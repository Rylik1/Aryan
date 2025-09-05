"use client";

import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { getDictionary, type Locale } from "@/lib/i18n";

interface MenuFiltersProps {
  categories: Array<{
    id: string;
    name_en: string;
    name_fa: string;
  }>;
  locale: Locale;
}

export function MenuFilters({ categories, locale }: MenuFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dict = getDictionary(locale);
  
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const selectedCategory = searchParams.get('cat') || '';
  const isHalal = searchParams.get('halal') === '1';
  const isVeg = searchParams.get('veg') === '1';
  const isGF = searchParams.get('gf') === '1';

  const updateFilters = useCallback((updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === '') {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    
    router.push(`/${locale}/menu?${params.toString()}`);
  }, [locale, router, searchParams]);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateFilters({ search: searchTerm });
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, updateFilters]);

  const toggleDietary = (key: string, current: boolean) => {
    updateFilters({ [key]: current ? null : '1' });
  };

  const clearFilters = () => {
    router.push(`/${locale}/menu`);
    setSearchTerm('');
  };

  const hasActiveFilters = selectedCategory || searchTerm || isHalal || isVeg || isGF;

  return (
    <div className="space-y-4 mb-8">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={dict.menu.searchPlaceholder}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--saffron)]"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={!selectedCategory ? "default" : "outline"}
          size="sm"
          onClick={() => updateFilters({ cat: null })}
        >
          {dict.common.viewAll}
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={selectedCategory === cat.id ? "default" : "outline"}
            size="sm"
            onClick={() => updateFilters({ cat: cat.id })}
          >
            {locale === 'fa' ? cat.name_fa : cat.name_en}
          </Button>
        ))}
      </div>

      {/* Dietary Filters */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-medium text-[color:var(--navy)] self-center mr-2">
          {dict.menu.dietary}:
        </span>
        <Button
          variant={isHalal ? "secondary" : "outline"}
          size="sm"
          onClick={() => toggleDietary('halal', isHalal)}
        >
          {dict.menu.tags.halal}
        </Button>
        <Button
          variant={isVeg ? "secondary" : "outline"}
          size="sm"
          onClick={() => toggleDietary('veg', isVeg)}
        >
          {dict.menu.tags.veg}
        </Button>
        <Button
          variant={isGF ? "secondary" : "outline"}
          size="sm"
          onClick={() => toggleDietary('gf', isGF)}
        >
          {dict.menu.tags.gf}
        </Button>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-red-600 hover:text-red-700"
        >
          <X className="h-4 w-4 mr-1" />
          {dict.common.clear}
        </Button>
      )}
    </div>
  );
}
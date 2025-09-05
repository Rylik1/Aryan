"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { DishCard } from "@/components/DishCard";
import { getDictionary, type Locale } from "@/lib/i18n";
import menuData from "@/data/menu.json";

interface MenuContentProps {
  locale: Locale;
}

export function MenuContent({ locale }: MenuContentProps) {
  const searchParams = useSearchParams();
  const dict = getDictionary(locale);
  
  const [favorites, setFavorites] = useState<string[]>([]);
  
  // Load favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(id)
        ? prev.filter(f => f !== id)
        : [...prev, id];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  // Apply filters
  const searchTerm = searchParams.get('search')?.toLowerCase() || '';
  const selectedCategory = searchParams.get('cat') || '';
  const isHalal = searchParams.get('halal') === '1';
  const isVeg = searchParams.get('veg') === '1';
  const isGF = searchParams.get('gf') === '1';

  const filteredItems = menuData.items.filter(item => {
    // Category filter
    if (selectedCategory && item.cat !== selectedCategory) return false;
    
    // Search filter
    if (searchTerm) {
      const nameMatch = item.name_en.toLowerCase().includes(searchTerm) || 
                       item.name_fa.includes(searchTerm);
      const descMatch = item.desc_en.toLowerCase().includes(searchTerm) || 
                       item.desc_fa.includes(searchTerm);
      if (!nameMatch && !descMatch) return false;
    }
    
    // Dietary filters
    if (isHalal && !item.tags.includes('halal')) return false;
    if (isVeg && !item.tags.includes('veg')) return false;
    if (isGF && !item.tags.includes('gf')) return false;
    
    return true;
  });

  const favoriteItems = menuData.items.filter(item => favorites.includes(item.id));

  return (
    <>
      {/* Favorites Section */}
      {favoriteItems.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[color:var(--navy)] mb-4">
            {dict.menu.favorites}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteItems.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                locale={locale}
                isFavorite={true}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Main Menu Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              locale={locale}
              isFavorite={favorites.includes(dish.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-[color:var(--navy)]/60 py-12">
          {dict.menu.noResults}
        </p>
      )}
    </>
  );
}
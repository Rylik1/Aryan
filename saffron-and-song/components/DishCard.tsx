import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { type Locale } from "@/lib/i18n";

interface DishCardProps {
  dish: {
    id: string;
    name_en: string;
    name_fa: string;
    desc_en: string;
    desc_fa: string;
    price: number;
    tags: string[];
    image?: string;
  };
  locale: Locale;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function DishCard({ dish, locale, isFavorite, onToggleFavorite }: DishCardProps) {
  const name = locale === 'fa' ? dish.name_fa : dish.name_en;
  const description = locale === 'fa' ? dish.desc_fa : dish.desc_en;

  const tagColors = {
    halal: 'bg-green-100 text-green-800',
    veg: 'bg-emerald-100 text-emerald-800',
    gf: 'bg-blue-100 text-blue-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-[color:var(--navy)]">
          {name}
        </h3>
        {onToggleFavorite && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onToggleFavorite(dish.id)}
            className="h-8 w-8"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={cn("h-4 w-4", isFavorite && "fill-red-500 text-red-500")} />
          </Button>
        )}
      </div>
      
      <p className="text-sm text-[color:var(--navy)]/70 mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-[color:var(--saffron)]">
          {formatPrice(dish.price, locale)}
        </span>
        
        <div className="flex gap-2">
          {dish.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "px-2 py-1 text-xs rounded-full",
                tagColors[tag as keyof typeof tagColors] || 'bg-gray-100 text-gray-800'
              )}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
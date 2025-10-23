import { Plus, Heart, Leaf } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MenuItem } from '@/data/mockData';

interface FoodItemCardProps {
  item: MenuItem;
  onAddToCart?: () => void;
}

const FoodItemCard = ({ item, onAddToCart }: FoodItemCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {item.popular && (
          <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold shadow-md">
            Popular
          </div>
        )}
        
        {item.vegetarian && (
          <div className="absolute top-2 right-2 bg-accent text-accent-foreground p-1.5 rounded-full shadow-md">
            <Leaf className="w-3 h-3" />
          </div>
        )}

        <Button
          size="icon"
          className="absolute bottom-2 right-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart?.();
          }}
        >
          <Plus className="w-5 h-5" />
        </Button>
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h4 className="font-semibold text-base group-hover:text-primary transition-colors line-clamp-1">
              {item.name}
            </h4>
            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
              {item.description}
            </p>
          </div>
          <Button variant="ghost" size="icon" className="shrink-0 h-8 w-8">
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-lg font-bold text-primary">${item.price.toFixed(2)}</span>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            {item.category}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default FoodItemCard;

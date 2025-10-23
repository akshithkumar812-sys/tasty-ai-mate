import { Star, Clock, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Restaurant } from '@/data/mockData';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {restaurant.popular && (
            <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              Popular
            </div>
          )}
          
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-4 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
              {restaurant.name}
            </h3>
            <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-lg shrink-0">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="font-semibold text-sm">{restaurant.rating}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>

          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default RestaurantCard;

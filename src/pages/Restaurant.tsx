import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Clock, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FoodItemCard from '@/components/FoodItemCard';
import { Button } from '@/components/ui/button';
import { restaurants, menuItems } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const Restaurant = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const restaurant = restaurants.find(r => r.id === id);
  const items = menuItems.filter(item => item.restaurantId === id);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
          <Link to="/">
            <Button>Go back home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = (itemName: string) => {
    toast({
      title: "Added to cart!",
      description: `${itemName} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Restaurant Header */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-4 text-white hover:text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            
            <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="font-semibold">{restaurant.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{restaurant.cuisine} Cuisine</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Menu</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <FoodItemCard
                key={item.id}
                item={item}
                onAddToCart={() => handleAddToCart(item.name)}
              />
            ))}
          </div>

          {items.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>No menu items available at the moment</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Restaurant;

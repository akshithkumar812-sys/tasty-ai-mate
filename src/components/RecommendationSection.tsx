import { Sparkles } from 'lucide-react';
import FoodItemCard from './FoodItemCard';
import { MenuItem } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

interface RecommendationSectionProps {
  items: MenuItem[];
}

const RecommendationSection = ({ items }: RecommendationSectionProps) => {
  const { toast } = useToast();

  const handleAddToCart = (itemName: string) => {
    toast({
      title: "Added to cart!",
      description: `${itemName} has been added to your cart.`,
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Recommended for You</h2>
            <p className="text-muted-foreground">Personalized picks based on your preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <FoodItemCard
              key={item.id}
              item={item}
              onAddToCart={() => handleAddToCart(item.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;

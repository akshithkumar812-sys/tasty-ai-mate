import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RestaurantCard from '@/components/RestaurantCard';
import RecommendationSection from '@/components/RecommendationSection';
import { restaurants, getRecommendations } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [cartCount] = useState(0);
  const recommendedItems = getRecommendations();

  const popularRestaurants = restaurants.filter(r => r.popular);
  const allRestaurants = restaurants;

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemCount={cartCount} />
      <Hero />
      
      {/* Restaurants Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Browse Restaurants</h2>
            <p className="text-muted-foreground">Discover amazing food near you</p>
          </div>

          <Tabs defaultValue="popular" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="all">All Restaurants</TabsTrigger>
              <TabsTrigger value="nearby">Nearby</TabsTrigger>
            </TabsList>
            
            <TabsContent value="popular">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularRestaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allRestaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="nearby">
              <div className="text-center py-12 text-muted-foreground">
                <p>Enable location services to see nearby restaurants</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* AI Recommendations */}
      <RecommendationSection items={recommendedItems} />

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Lovable AI. Made with ❤️ for food lovers.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

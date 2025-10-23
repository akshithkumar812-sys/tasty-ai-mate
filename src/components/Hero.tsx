import { Button } from '@/components/ui/button';
import { Search, Heart, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-food.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-secondary/30 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI-Powered Recommendations
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your Favorite Food,
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Delivered with Love
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Discover delicious meals from top-rated restaurants. Get personalized recommendations powered by AI, just for you.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all">
                <Search className="w-5 h-5 mr-2" />
                Explore Restaurants
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Heart className="w-5 h-5 mr-2" />
                View Favorites
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Restaurants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Delicious food"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-4 border border-border animate-in fade-in zoom-in delay-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <div className="font-semibold">Fast Delivery</div>
                  <div className="text-sm text-muted-foreground">In 30 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Link } from 'react-router-dom';
import { ArrowLeft, Package, User, Heart, Settings } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Profile = () => {
  const mockOrders = [
    {
      id: '1',
      restaurant: 'Burger Paradise',
      items: ['Classic Cheeseburger', 'Sweet Potato Fries'],
      total: 18.98,
      status: 'delivered',
      date: '2024-01-15',
    },
    {
      id: '2',
      restaurant: 'Sushi Master',
      items: ['Dragon Roll', 'Salmon Nigiri Set'],
      total: 30.98,
      status: 'on-the-way',
      date: '2024-01-16',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-accent bg-accent/10';
      case 'on-the-way':
        return 'text-primary bg-primary/10';
      case 'preparing':
        return 'text-secondary bg-secondary/20';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusText = (status: string) => {
    return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Profile Sidebar */}
          <Card className="p-6 h-fit space-y-6">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-bold text-xl">John Doe</h2>
              <p className="text-sm text-muted-foreground">john@example.com</p>
            </div>

            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <Package className="w-4 h-4 mr-2" />
                My Orders
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Heart className="w-4 h-4 mr-2" />
                Favorites
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>

            <Button variant="outline" className="w-full">
              Log Out
            </Button>
          </Card>

          {/* Main Content */}
          <div className="md:col-span-3">
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="orders">Order History</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
              </TabsList>

              <TabsContent value="orders" className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
                
                {mockOrders.map((order) => (
                  <Card key={order.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg">{order.restaurant}</h3>
                        <p className="text-sm text-muted-foreground">Order #{order.id} • {order.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      {order.items.map((item, index) => (
                        <p key={index} className="text-sm">• {item}</p>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="font-semibold">Total: ${order.total.toFixed(2)}</span>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button size="sm">Reorder</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="favorites">
                <h2 className="text-2xl font-bold mb-4">Favorite Restaurants</h2>
                <div className="text-center py-12 text-muted-foreground">
                  <Heart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>You haven't added any favorites yet</p>
                  <Link to="/">
                    <Button className="mt-4">Explore Restaurants</Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

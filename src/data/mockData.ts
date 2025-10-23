export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  image: string;
  popular: boolean;
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular: boolean;
  vegetarian?: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: { menuItem: MenuItem; quantity: number }[];
  total: number;
  status: 'preparing' | 'on-the-way' | 'delivered';
  timestamp: Date;
}

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Burger Paradise',
    cuisine: 'American',
    rating: 4.8,
    deliveryTime: '25-35 min',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80',
    popular: true,
  },
  {
    id: '2',
    name: 'Sushi Master',
    cuisine: 'Japanese',
    rating: 4.9,
    deliveryTime: '30-40 min',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80',
    popular: true,
  },
  {
    id: '3',
    name: 'Pizza Heaven',
    cuisine: 'Italian',
    rating: 4.7,
    deliveryTime: '20-30 min',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
    popular: true,
  },
  {
    id: '4',
    name: 'Curry House',
    cuisine: 'Indian',
    rating: 4.6,
    deliveryTime: '35-45 min',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
    popular: false,
  },
  {
    id: '5',
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.5,
    deliveryTime: '25-35 min',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
    popular: false,
  },
  {
    id: '6',
    name: 'Fresh Bowls',
    cuisine: 'Healthy',
    rating: 4.8,
    deliveryTime: '20-30 min',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    popular: true,
  },
];

export const menuItems: MenuItem[] = [
  // Burger Paradise
  {
    id: 'm1',
    restaurantId: '1',
    name: 'Classic Cheeseburger',
    description: 'Juicy beef patty with cheddar, lettuce, tomato, and special sauce',
    price: 12.99,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
    popular: true,
  },
  {
    id: 'm2',
    restaurantId: '1',
    name: 'Crispy Chicken Burger',
    description: 'Crispy fried chicken with coleslaw and honey mustard',
    price: 11.99,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80',
    popular: true,
  },
  {
    id: 'm3',
    restaurantId: '1',
    name: 'Sweet Potato Fries',
    description: 'Crispy sweet potato fries with garlic aioli',
    price: 5.99,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80',
    popular: false,
  },
  // Sushi Master
  {
    id: 'm4',
    restaurantId: '2',
    name: 'Dragon Roll',
    description: 'Shrimp tempura, avocado, topped with eel and sweet sauce',
    price: 15.99,
    category: 'Rolls',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80',
    popular: true,
  },
  {
    id: 'm5',
    restaurantId: '2',
    name: 'Salmon Nigiri Set',
    description: 'Fresh salmon nigiri (8 pieces)',
    price: 14.99,
    category: 'Nigiri',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&q=80',
    popular: true,
  },
  {
    id: 'm6',
    restaurantId: '2',
    name: 'Miso Soup',
    description: 'Traditional Japanese soup with tofu and seaweed',
    price: 3.99,
    category: 'Soup',
    image: 'https://images.unsplash.com/photo-1626776877684-6a7d37596fd7?w=400&q=80',
    popular: false,
  },
  // Pizza Heaven
  {
    id: 'm7',
    restaurantId: '3',
    name: 'Margherita Pizza',
    description: 'Classic tomato, mozzarella, and fresh basil',
    price: 13.99,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&q=80',
    popular: true,
    vegetarian: true,
  },
  {
    id: 'm8',
    restaurantId: '3',
    name: 'Pepperoni Deluxe',
    description: 'Loaded with premium pepperoni and extra cheese',
    price: 15.99,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80',
    popular: true,
  },
  // Fresh Bowls
  {
    id: 'm9',
    restaurantId: '6',
    name: 'Buddha Bowl',
    description: 'Quinoa, roasted vegetables, avocado, and tahini dressing',
    price: 12.99,
    category: 'Bowls',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
    popular: true,
    vegetarian: true,
  },
  {
    id: 'm10',
    restaurantId: '6',
    name: 'Poke Bowl',
    description: 'Fresh salmon, rice, edamame, and sesame dressing',
    price: 14.99,
    category: 'Bowls',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80',
    popular: true,
  },
];

// Simple AI recommendation logic
export const getRecommendations = (userHistory?: string[]): MenuItem[] => {
  // If user has order history, recommend based on that
  if (userHistory && userHistory.length > 0) {
    const lastCategory = menuItems.find(item => item.id === userHistory[0])?.category;
    return menuItems
      .filter(item => item.category === lastCategory || item.popular)
      .slice(0, 4);
  }
  
  // Otherwise show popular items
  return menuItems.filter(item => item.popular).slice(0, 4);
};

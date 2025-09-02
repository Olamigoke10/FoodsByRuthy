import React, { useState } from 'react';
import bGroundImg from "../assets/imgs/ruthyhero.jpg";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Menu data
  const menuItems = [
    {
      id: 1,
      name: "Classic Beef Burger",
      description: "Juicy beef patty with lettuce, tomato, onion, and our special sauce",
      price: 12.99,
      category: "mains",
      popular: true
    },
    {
      id: 2,
      name: "Truffle Mushroom Pasta",
      description: "Creamy pasta with wild mushrooms and truffle oil",
      price: 16.50,
      category: "mains"
    },
    {
      id: 3,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with parmesan, croutons, and homemade Caesar dressing",
      price: 9.99,
      category: "starters"
    },
    {
      id: 4,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
      price: 8.50,
      category: "desserts",
      popular: true
    },
    {
      id: 5,
      name: "Garlic Bread",
      description: "Toasted bread with garlic butter and herbs",
      price: 5.99,
      category: "starters"
    },
    {
      id: 6,
      name: "Grilled Salmon",
      description: "Atlantic salmon with lemon butter sauce and seasonal vegetables",
      price: 18.99,
      category: "mains"
    },
    {
      id: 7,
      name: "Tiramisu",
      description: "Classic Italian dessert with layers of coffee-soaked ladyfingers",
      price: 7.99,
      category: "desserts"
    },
    {
      id: 8,
      name: "Fresh Lemonade",
      description: "Homemade lemonade with a hint of mint",
      price: 4.50,
      category: "drinks"
    },
    {
      id: 9,
      name: "Red Wine",
      description: "House selection of premium red wine",
      price: 9.00,
      category: "drinks"
    },
    {
      id: 10,
      name: "Cheesecake",
      description: "New York style cheesecake with berry compote",
      price: 8.25,
      category: "desserts",
      popular: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Menu' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'starters', name: 'Starters' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 bg-fixed"
        style={{ backgroundImage: `url(${bGroundImg})` }}
      >
       
      </div>
      
      {/* Content Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Menu</h1>
            <div className="absolute bg-amber-500 w-16 h-2 left-1/2 transform -translate-x-1/2 -bottom-3"></div>
          </div>
          <p className="text-amber-100 mt-8 max-w-2xl mx-auto text-lg">
            Discover our carefully crafted dishes made with the freshest ingredients and passion for flavor
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-amber-700 hover:bg-amber-100 shadow-sm'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="bg-white bg-opacity-95 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                  {item.popular && (
                    <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-amber-600 mb-4 text-sm">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-700 font-bold text-lg">${item.price.toFixed(2)}</span>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1 rounded-full text-sm transition-colors duration-300">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Note */}
        <div className="mt-16 text-center p-6 bg-amber-100 bg-opacity-95 rounded-xl border border-amber-200">
          <h3 className="text-2xl font-bold text-amber-900 mb-3">Special Dietary Requirements?</h3>
          <p className="text-amber-700 mb-4">
            We accommodate various dietary needs. Please inform your server about any allergies or preferences.
          </p>
          <button className="bg-amber-700 hover:bg-amber-800 text-white font-medium px-6 py-2 rounded-full transition-colors duration-300">
            Download Full Menu (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
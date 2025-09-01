import React from 'react';
import bGroundImg from "../assets/imgs/ruthyhero.jpg";
import { Users, Heart, Sprout, Calendar, Utensils, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className='relative h-96'>
        <div 
          className='absolute inset-0 bg-cover bg-center z-0 bg-fixed'
          style={{ backgroundImage: `url(${bGroundImg})` }}
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-orange-200 max-w-2xl">
            From a family kitchen to your table - a journey of flavor, passion, and tradition
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Our Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-700">How It All Began</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                FoodsByRuthy began in 2010 when Ruthy Martinez turned her lifelong passion for cooking into a small neighborhood eatery. What started as a humble kitchen serving comfort food to locals quickly grew into a beloved culinary destination.
              </p>
              <p className="text-lg mb-4">
                Ruthy's recipes were passed down through generations, with each dish telling a story of family traditions, cultural heritage, and the simple joy of sharing a meal with loved ones.
              </p>
              <p className="text-lg">
                Today, we continue to honor Ruthy's original vision by crafting dishes that blend traditional techniques with modern creativity, always using the freshest locally-sourced ingredients.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">Our Commitment</h3>
                <p className="mb-4">
                  Our commitment to quality, community, and authentic flavor has remained unchanged since day one. We invite you to become part of our story.
                </p>
                <div className="flex items-center text-orange-700">
                  <Heart className="mr-2" size={20} />
                  <span>Family recipes passed down for generations</span>
                </div>
                <div className="flex items-center text-orange-700 mt-2">
                  <Sprout className="mr-2" size={20} />
                  <span>Locally-sourced, seasonal ingredients</span>
                </div>
                <div className="flex items-center text-orange-700 mt-2">
                  <Users className="mr-2" size={20} />
                  <span>A welcoming atmosphere for all</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-16 bg-orange-50 py-12 px-6 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-700">Our Philosophy</h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            At FoodsByRuthy, we believe that great food is more than just nourishment—it's an experience that brings people together, creates memories, and celebrates life's special moments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Sprout className="text-orange-600" size={30} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-800">Farm-to-Table Freshness</h3>
              <p className="text-gray-700">
                We partner with local farmers and producers to bring you the freshest seasonal ingredients, supporting our community while reducing our environmental footprint.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Heart className="text-orange-600" size={30} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-800">Made with Love</h3>
              <p className="text-gray-700">
                Every dish is prepared with care and attention to detail, honoring the traditional recipes and techniques that have been perfected over generations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Users className="text-orange-600" size={30} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-800">Community Focused</h3>
              <p className="text-gray-700">
                We're more than a restaurant—we're a gathering place where friendships are formed, celebrations are held, and the community comes together.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-700">Meet Our Culinary Family</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto rounded-full bg-orange-200 mb-4 flex items-center justify-center">
                <Users size={60} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Ruthy Martinez</h3>
              <p className="text-orange-600 italic">Founder & Executive Chef</p>
              <p className="mt-3 text-gray-700">
                The heart and soul behind our recipes, with over 30 years of culinary experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 mx-auto rounded-full bg-orange-200 mb-4 flex items-center justify-center">
                <Utensils size={60} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Marcus Johnson</h3>
              <p className="text-orange-600 italic">Head Chef</p>
              <p className="mt-3 text-gray-700">
                Brings innovation to traditional dishes with his expertise in modern cooking techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 mx-auto rounded-full bg-orange-200 mb-4 flex items-center justify-center">
                <Award size={60} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Elena Rodriguez</h3>
              <p className="text-orange-600 italic">Pastry Chef</p>
              <p className="mt-3 text-gray-700">
                Creates delightful desserts that perfectly complement our main courses.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 mx-auto rounded-full bg-orange-200 mb-4 flex items-center justify-center">
                <Users size={60} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-1">David Kim</h3>
              <p className="text-orange-600 italic">Restaurant Manager</p>
              <p className="mt-3 text-gray-700">
                Ensures every guest has an exceptional dining experience from start to finish.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-700 text-white py-12 px-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the FoodsByRuthy Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us for a meal and discover why we've been a community favorite for over a decade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Make a Reservation
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-orange-700 transition-colors">
              View Our Menu
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
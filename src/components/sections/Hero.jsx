import heroImg from "../../assets/imgs/ruthyhero.jpg";
import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image - Reduced overlay darkness since background is already dark */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 bg-fixed"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      
      {/* Lighter overlay to enhance contrast without making too dark */}
      <div className="absolute inset-0 bg-black/20 z-0" />
      
      {/* Hero Content - Enhanced contrast */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Restaurant Name with glow effect */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
            Ruthy's Foods
          </h1>
          
          {/* Tagline with brighter accent */}
          <p className="text-xl md:text-2xl text-orange-300 font-medium mb-6 drop-shadow-md">
            Authentic Flavors • Farm-to-Table Freshness
          </p>
          
          {/* Value proposition with better readability */}
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto px-4 py-2 rounded-lg">
            Serving locally-sourced, seasonal ingredients with passion since 2010
          </p>
          
          {/* Call-to-Action Buttons - More vibrant */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/menu"
              className="px-6 py-3 bg-white text-gray-900 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View Our Menu
            </NavLink>
            <NavLink
              to="/reservations"
              className="px-6 py-3 bg-orange-500 text-white rounded-md text-lg font-medium hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book a Table
            </NavLink>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - More visible */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-6 h-10 border-2 border-orange-300 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-orange-300 rounded-full mt-2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
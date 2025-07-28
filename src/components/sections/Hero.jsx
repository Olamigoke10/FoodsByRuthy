import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/imgs/heroimg.jpg'; // Replace with your actual image
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Delicious dishes from Foods by Ruthy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Tagline */}
          <span className="text-orange-300 font-medium mb-4 inline-block">
            Authentic Flavors Since 2015
          </span>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Savor the Taste of <span className="text-orange-400">Ruthy's</span> Kitchen
          </h1>
          
          {/* Description */}
          <p className="text-lg text-gray-100 mb-8 max-w-lg">
            Experience handcrafted dishes made with love using family recipes passed down through generations. Our seasonal menu celebrates local ingredients and global flavors.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center transition duration-300">
              View Our Menu <ArrowRight className="ml-2" size={18} />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-full transition duration-300">
              Make An Order
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-8 h-8 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
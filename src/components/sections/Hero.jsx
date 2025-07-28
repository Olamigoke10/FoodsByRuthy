import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/imgs/heroimg.jpg';
import { motion } from 'framer-motion';
import React from 'react';

const Hero = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const imageZoom = {
    hidden: { scale: 1.1 },
    show: { scale: 1, transition: { duration: 1.5, ease: "easeOut" } }
  };

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background Image with Overlay - Animated */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial="hidden"
        animate="show"
        variants={imageZoom}
      >
        <img
          src={heroImage}
          alt="Delicious dishes from Foods by Ruthy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      {/* Hero Content - Animated with stagger */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="max-w-2xl">
          {/* Tagline */}
          <motion.span 
            className="text-orange-300 font-medium mb-4 inline-block"
            variants={item}
          >
            Authentic Flavors Since 2015
          </motion.span>
          
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={item}
          >
            Savor the Taste of <span className="text-orange-400">Ruthy's</span> Kitchen
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-lg text-gray-100 mb-8 max-w-lg"
            variants={item}
          >
            Experience handcrafted dishes made with love using family recipes passed down through generations. Our seasonal menu celebrates local ingredients and global flavors.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={item}
          >
            <motion.button 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Menu <ArrowRight className="ml-2" size={18} />
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-full transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Make An Order
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Animated */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div 
          className="w-8 h-8 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  return (
    <div className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/countries/australia/australia_banner.webp')" }}>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      {isClient && (
        <motion.div className="relative z-10 text-white px-4 sm:px-8 md:px-12 lg:px-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Study in Australia
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto">
            Unlock world-class education and career opportunities in Australia
          </p>
        </motion.div>
      )}

    </div>
  );
};

export default HeroBanner;

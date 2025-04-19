"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  return (
    <div className="relative h-[500px] w-full flex items-center justify-center text-center bg-cover bg-center" 
         style={{ backgroundImage: "url('/images/countries/uk/uk_banner.webp')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white p-4">
        {isClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-4">Study in UK</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Study in the UK and gain a prestigious degree recognized worldwide
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;

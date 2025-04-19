"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroBanner_newzealand = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  return (
    <div className="relative h-[500px] w-full flex items-center justify-center text-center bg-cover bg-center" 
         style={{ backgroundImage: "url('/images/countries/newzealand/newzealand_banner.webp')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {isClient && (
        <motion.div 
          className="relative z-10 text-white p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4">Study in New Zealand</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Study in New Zealand for a high-quality and innovative learning experience
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default HeroBanner_newzealand;

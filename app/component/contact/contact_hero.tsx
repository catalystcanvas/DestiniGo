'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ContactBanner() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center text-center relative">
      {isClient && (
        <motion.div
          className="w-full flex flex-col justify-center items-center text-center relative mt-4 sm:mt-6 lg:mt-10"
        >
          <picture>
            {/* For desktop screens (1024px and above) */}
            <source
              media="(min-width: 1024px)"
              srcSet="/images/contact/contact-hero-desktop.webp"
            />
            {/* For tablets and smaller */}
            <img
              src="/images/contact/contact-hero-ipad.webp"
              alt="Contact Us"
              width={1200}
              height={500}
              className="object-cover w-full h-[200px] sm:h-[250px] lg:h-[300px]"
            />
          </picture>
        </motion.div>
      )}
    </div>
  );
}

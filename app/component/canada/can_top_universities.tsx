"use client";
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

const ImpactSection_canada = () => {
  const universities = [
    { name: 'University of Alberta', image: '/images/countries/canada/colleges/alberta.webp' },
    { name: 'The University of British Columbia', image: '/images/countries/canada/colleges/colombia.webp' },
    { name: 'Dalhousie University', image: '/images/countries/canada/colleges/dalhousie.jpg' },
    { name: 'McGill University', image: '/images/countries/canada/colleges/mcgill.webp' },
    { name: 'University of Ottawa', image: '/images/countries/canada/colleges/ottawa.webp' },
    { name: 'University of Toronto', image: '/images/countries/canada/colleges/toronto.webp' },
    { name: 'University of Victoria', image: '/images/countries/canada/colleges/victoria.webp' },
    { name: 'University of Waterloo', image: '/images/countries/canada/colleges/waterloo.webp' },
  ];

  const controls = useAnimation();
  const [xPosition, setXPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const [movementDistance, setMovementDistance] = useState('-47%');
  const [animationSpeed, setAnimationSpeed] = useState(15);

  useEffect(() => {
    setIsClient(true); // Ensure motion is client-only
  }, []);

  useEffect(() => {
    const updateMovement = () => {
      if (window.innerWidth < 768) {
        setMovementDistance('-90%');
        setAnimationSpeed(20);
      } else if (window.innerWidth < 1024) {
        setMovementDistance('-75%');
        setAnimationSpeed(20);
      } else {
        setMovementDistance('-55%');
        setAnimationSpeed(20);
      }
    };

    updateMovement();
    window.addEventListener('resize', updateMovement);
    return () => window.removeEventListener('resize', updateMovement);
  }, []);

  useEffect(() => {
    if (!isPaused && isClient) {
      controls.start({
        x: [xPosition, movementDistance],
        transition: { repeat: Infinity, duration: animationSpeed, ease: 'linear' },
      });
    }
  }, [isPaused, xPosition, movementDistance, animationSpeed, controls, isClient]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-16 bg-gray-100 text-center overflow-hidden">
      <h2 className="text-5xl font-bold text-blue-600 pb-6">Top Universities</h2>

      <div
        className="relative w-full overflow-hidden mt-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isClient && (
          <motion.div
            className="flex gap-10 w-max"
            animate={controls}
            initial={{ x: '0%' }}
            onUpdate={(latest) => {
              if (typeof latest.x === 'number') setXPosition(latest.x);
            }}
          >
            {universities.map((uni, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center w-96 bg-white rounded-2xl shadow-lg p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-56 rounded-lg overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    width={384}
                    height={224}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-lg font-bold px-8 py-2 rounded-lg shadow-md whitespace-nowrap">
                    {uni.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ImpactSection_canada;

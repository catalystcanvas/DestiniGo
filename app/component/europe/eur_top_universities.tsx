"use client";
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ImpactSection_europe = () => {
  const universities = [
    { name: 'University of Erlangen-Nuremberg', image: '/images/countries/europe/colleges/fau.webp' },
    { name: 'INSA Lyon', image: '/images/countries/europe/colleges/insalyon.webp' },
    { name: 'TUBAF', image: '/images/countries/europe/colleges/tubaf.webp' },
    { name: 'LUT University', image: '/images/countries/europe/colleges/lut.webp' },
    { name: 'University of Amsterdam', image: '/images/countries/europe/colleges/amsterdam.webp' },
    { name: 'University of Fribourg', image: '/images/countries/europe/colleges/Fribourg.webp' },
    { name: 'University of Hamburg', image: '/images/countries/europe/colleges/Hamburg.webp' },
    { name: 'Humboldt University of Berlin', image: '/images/countries/europe/colleges/Humboldt.webp' },
    { name: 'University of Milan', image: '/images/countries/europe/colleges/milan.webp' },
    { name: 'Sorbonne University', image: '/images/countries/europe/colleges/Sorbonne.webp' },
    { name: 'University of Strasbourg', image: '/images/countries/europe/colleges/Strasbourg.webp' },
    { name: 'University of Turin', image: '/images/countries/europe/colleges/turin.webp' }
  ];

  const [isClient, setIsClient] = useState(false);
  const controls = useAnimation();
  const [xPosition, setXPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [movementDistance, setMovementDistance] = useState('-47%');
  const [animationSpeed, setAnimationSpeed] = useState(15);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  useEffect(() => {
    const updateMovement = () => {
      if (window.innerWidth < 768) {
        setMovementDistance('-92%');
        setAnimationSpeed(30);
      } else if (window.innerWidth < 1024) {
        setMovementDistance('-87%');
        setAnimationSpeed(30);
      } else {
        setMovementDistance('-72%');
        setAnimationSpeed(20);
      }
    };

    updateMovement();
    window.addEventListener('resize', updateMovement);
    return () => window.removeEventListener('resize', updateMovement);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: [xPosition, movementDistance],
        transition: { repeat: Infinity, duration: animationSpeed, ease: 'linear' },
      });
    }
  }, [isPaused, xPosition, movementDistance, animationSpeed, controls]);

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
                {/* University Image */}
                <div className="relative w-full h-56 rounded-lg overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    width="384"
                    height="224"
                    className="w-full h-full object-cover"
                  />

                  {/* University Name Box */}
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

export default ImpactSection_europe;

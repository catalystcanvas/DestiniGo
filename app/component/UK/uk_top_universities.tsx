'use client';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ImpactSection_uk = () => {
  const universities = [
    { name: 'University of Bristol', image: '/images/countries/uk/colleges/Bristol.webp' },
    { name: 'University of Edinburgh', image: '/images/countries/uk/colleges/edinburg.webp' },
    { name: 'University of Glasgow', image: '/images/countries/uk/colleges/glasgow.webp' },
    { name: 'University of Liverpool', image: '/images/countries/uk/colleges/liverpool.webp' },
    { name: 'University of Manchester', image: '/images/countries/uk/colleges/manchester.webp' },
    { name: 'Newcastle University', image: '/images/countries/uk/colleges/new castel.webp' },
    { name: 'University of Oxford', image: '/images/countries/uk/colleges/oxford.webp' },
    { name: 'Queen Mary University of London', image: '/images/countries/uk/colleges/queen marry.webp' }
  ];

  const controls = useAnimation();
  const [xPosition, setXPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const [movementDistance, setMovementDistance] = useState('-47%');
  const [animationSpeed, setAnimationSpeed] = useState(15);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  useEffect(() => {
    const updateMovement = () => {
      if (window.innerWidth < 768) {
        setMovementDistance('-90%'); // Move fully in smaller screens
        setAnimationSpeed(20); // Increase speed for mobile
      } else if (window.innerWidth < 1024) {
        setMovementDistance('-75%'); // Adjust for tablets
        setAnimationSpeed(20); // Faster than desktop
      } else {
        setMovementDistance('-55%'); // Default for larger screens
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
                    width={500}
                    height={350}
                    className="object-cover absolute inset-0"
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

export default ImpactSection_uk;

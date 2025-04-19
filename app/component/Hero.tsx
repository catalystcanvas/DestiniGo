"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  const slides = [
    {
      img: "/images/hero/1.webp",
      heading: "Transform your dreams into global success with DestiniGo",
      description:
        "At DestiniGo, we don’t just help you study abroad—we build your future. With expert mentorship and personalized support, we turn your aspirations into achievements.",
    },
    {
      img: "/images/hero/3.webp",
      heading: "Your pathway to prestigious universities starts here",
      description:
        "Gain admission to world-renowned institutions with our comprehensive support. We specialize in profile building, university list creation, and admission assistance to ensure you stand out among global applicants and secure a place in top-tier universities.",
    },
    {
      img: "/images/hero/4.webp",
      heading: "Navigate your study abroad journey with confidence",
      description:
        "Beyond admissions, we assist with visa applications, scholarships, insurance, education loans, flight bookings, accommodation and forex exchange, making your transition to international education smooth and hassle-free.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 20000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center w-full px-4 sm:px-8 mt-10 md:mt-16 lg:mt-20 xl:mt-24">
      {/* Left Arrow Button */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#A5C6FF] p-2 rounded text-white"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Content Section with motion animation */}
      {isClient && (
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row w-full items-center md:space-x-10"
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-6 sm:px-10 md:px-12 lg:px-14 xl:px-16 mt-6 md:mt-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] leading-snug">
              {slides[currentSlide].heading}
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 h-[250px] sm:h-[300px] md:h-[450px] lg:h-[500px] relative flex justify-center md:justify-end pr-6 md:pr-10 lg:pr-14 xl:pr-16">
          <picture>
  <source srcSet={slides[currentSlide].img} type="image/webp" />
  <img
    src={slides[currentSlide].img}
    alt="Hero"
    width={500}
    height={400}
    className="object-contain max-w-full rounded-lg"
  />
</picture>

          </div>
        </motion.div>
      )}

      {/* Slide Pagination */}
      <div className="flex space-x-2 absolute bottom-4 md:bottom-6">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-gray-700" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#A5C6FF] p-2 rounded text-white"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Hero;

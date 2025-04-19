'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AboutUs() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section 
        className="
          relative items-center justify-center text-white 
          bg-center bg-no-repeat 
          h-[210px] bg-[url('/images/about/hero_mobile.webp')] bg-contain
          sm:h-[164px] sm:bg-[url('/images/about/hero_desktop.webp')] sm:bg-contain
          lg:h-[400px] lg:bg-[url('/images/about/hero_desktop.webp')] lg:bg-cover
        "
      ></section>

      {/* Who We Are Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">Who We Are</h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto text-justify leading-relaxed tracking-normal hyphens-auto">
          We are a team of expert consultants dedicated to guide students and professionals to achieve their dreams of studying abroad. 
          We offer end-to-end support from choosing universities to visa processing.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800">What We Do</h2>
          <p className="text-base md:text-lg text-justify leading-relaxed tracking-normal hyphens-auto">
            We provide professional guidance for study-abroad aspirants and travelers. Our services include IELTS and PTE exam training, SOP and LOR analysis, personality development, and interview preparation. Additionally, we assist students in getting accepted into top universities worldwide and support them with scholarships, visa applications, forex, education loans, insurance, and accommodation.
          </p>
        </div>
        {isClient && (
          <motion.div 
            className="relative w-full h-60 md:h-72" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <img 
              src="/images/about/what-we-do.webp" 
              alt="What We Do" 
              className="object-cover rounded-lg shadow-lg rotate-3 w-full h-full"
            />
          </motion.div>
        )}
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 px-6 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {isClient && (
          <motion.div 
            className="relative w-full h-60 md:h-72 order-2 md:order-1" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <img 
              src="/images/about/vission.webp" 
              alt="Our Vision" 
              className="rounded-lg shadow-lg -rotate-6 w-full h-full object-cover"
            />
          </motion.div>
        )}
        <div className="text-center order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">Our Vision</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto mt-4 text-justify leading-relaxed tracking-normal hyphens-auto">
            At <strong>DestiniGo Overseas Consultants</strong>, Our aim is to become the most trusted consultancy for students seeking international education. Guided by clarity, integrity, and expert mentorship, we empower individuals to take confident steps toward achieving global success.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">Our Mission</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto mt-4 text-justify leading-relaxed tracking-normal hyphens-auto">
            At DestiniGo Overseas Consultants, our mission is to empower students and professionals to transform their global aspirations into reality. We provide personalized guidance, expert counselling and seamless visa support—ensuring a smooth transition to international education and career pathways. With a steadfast focus on integrity and excellence, we simplify the complex journey of going abroad, one success story at a time.
          </p>
        </div>
        {isClient && (
          <motion.div 
            className="relative w-full h-60 md:h-72" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <img 
              src="/images/about/mission.webp" 
              alt="Our Mission" 
              className="rounded-lg shadow-lg rotate-6 w-full h-full object-cover"
            />
          </motion.div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-6 lg:px-16">
          <div className="flex-1 text-center">
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-green-600">4000+</h2>
            <p className="text-sm md:text-base font-semibold">Students Selected</p>
          </div>
          <div className="flex-1 text-center">
            <h2 className="text-2xl md:text-7xl lg:text-8xl font-bold text-green-600 leading-none">15+</h2>
            <p className="text-base md:text-lg font-semibold">Years of Experience</p>
          </div>
          <div className="flex-1 text-center">
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-green-600">95+</h2>
            <p className="text-sm md:text-base font-semibold">Top Universities</p>
          </div>
        </div>
      </section>
    </div>
  );
}

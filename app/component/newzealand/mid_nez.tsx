"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StudyInNewZealand = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-8">
      {/* Study in the New Zealand Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Image with Creative Styling */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition duration-300 w-full sm:w-[400px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[350px] relative">
            {isClient && (
              <motion.img
                src="/images/countries/newzealand/newzealand_intro.webp"
                alt="Study in New Zealand"
                width={500}
                height={350}
                className="object-cover absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>
        </div>

        {/* Description */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Study in New Zealand</h2>
          <p className="text-gray-700 text-justify leading-relaxed tracking-normal max-w-full md:max-w-[800px] lg:max-w-[900px] hyphens-auto">
            New Zealand is a leading study destination, recognized for its world-class education system, 
            safe environment, and exceptional quality of life. The country offers internationally accredited 
            degrees, extensive research opportunities, and a student-centered learning approach. With high 
            employability rates and post-study work visas, students can transition smoothly from academics 
            to professional success. New Zealand’s universities are consistently ranked among the best 
            globally, and its stunning natural landscapes provide a perfect balance between education and 
            lifestyle. Whether seeking industry connections, research-driven programs, or an enriching student 
            experience, New Zealand presents an outstanding choice for higher education.
          </p>
        </div>
      </div>

      {/* Why Choose New Zealand Section - Creative Wave Pattern */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-10">Why choose New Zealand?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {[
            { icon: "🎓", text: "World-class education" },
            { icon: "🤝", text: "Diverse & welcoming society" },
            { icon: "🛡️", text: "Safe & peaceful environment" },
            { icon: "💼", text: "Work & post-study opportunities" },
            { icon: "💰", text: "Affordable tuition & living" },
            { icon: "📚", text: "Innovative education system" },
            { icon: "🆘", text: "Strong student support services" },
            { icon: "🌍", text: "Internationally recognized degrees" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-lg rounded-lg p-4 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                {item.icon}
              </div>
              <p className="text-gray-800 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyInNewZealand;

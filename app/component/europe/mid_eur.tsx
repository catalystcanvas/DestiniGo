"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StudyInEurope = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure animations are only triggered client-side
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-8">
      {/* Study in the Europe Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Image with Creative Styling */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition duration-300 w-full sm:w-[400px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[350px] relative">
            <img
              src="/images/countries/europe/europe_intro.webp"
              alt="Study in Europe"
              width="100%"
              height="100%"
              className="object-cover absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Description */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Study in Europe</h2>
          <p className="text-gray-700 text-justify leading-relaxed tracking-normal w-full max-w-full md:max-w-[900px] lg:max-w-[1100px] mx-auto px-4 
  hyphens-auto lg:hyphens-none 
  [text-align-last:left]">
            Europe is a premier destination for international education offering a distinguished academic heritage,
            cutting-edge research opportunities and a diverse cultural environment. Home to renowned universities
            in countries such as Germany, France, the Netherlands, and Sweden, Europe provides high-quality education
            at relatively affordable tuition fees. Many European nations offer scholarship programs and post-study
            work opportunities. With its multicultural setting, multilingual advantages, and strong industry connections,
            Europe delivers an immersive and globally relevant learning experience. Whether pursuing research-intensive
            programs, innovation-driven courses, or a historically rich academic environment—Europe remains an excellent
            choice for students aspiring to study abroad.
          </p>
        </div>
      </div>

      {/* Why Choose Europe Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-10">Why choose Europe?</h2>

        {isClient && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {[
              { icon: "🏛️", text: "Top-ranked universities" },
              { icon: "🗣️", text: "English-Taught programs" },
              { icon: "💼", text: "Global career opportunities" },
              { icon: "🌍", text: "Internationally recognized degrees" },
              { icon: "🧠", text: "Innovative teaching methods" },
              { icon: "💶", text: "Affordable & free education" },
              { icon: "✈️", text: "Easy travel across Europe" },
              { icon: "🎉", text: "Lively student communities" },
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
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default StudyInEurope;

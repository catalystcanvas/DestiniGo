"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StudyInUK = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-8">
      {/* Study in the UK Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Image with Creative Styling */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition duration-300 w-full sm:w-[400px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[350px] relative">
            <img
              src="/images/countries/uk/uk_intro.webp"
              alt="Study in UK"
              width={500}
              height={350}
              className="object-cover absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Description */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Study in UK</h2>
          <p className="text-gray-700 text-justify leading-relaxed tracking-normal w-full max-w-full md:max-w-[900px] lg:max-w-[1100px] mx-auto px-4 
  hyphens-auto lg:hyphens-none 
  [text-align-last:left]">
            The United Kingdom is home to some of the world’s most prestigious universities, 
            including Oxford, Cambridge, and Imperial College London. With a rich academic heritage 
            and globally recognized degree programs, the UK attracts students from across the globe. 
            The education system emphasizes research, innovation, and critical thinking, equipping students 
            with the skills required for successful careers. International students benefit from post-study 
            work visas, cultural diversity, and networking opportunities with industry leaders. Additionally, 
            the UK&apos;s shorter degree durations—three years for undergraduate programs and one year for 
            postgraduate studies—make it a cost-effective option for those seeking high-quality education and 
            career advancement in a dynamic global environment.
          </p>
        </div>
      </div>

      {/* Why Choose UK Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-10">Why choose UK?</h2>

        {isClient && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
          >
          {[
            { icon: "🎓", text: "World-class universities" },
            { icon: "🌍", text: "Multicultural learning environment" },
            { icon: "💼", text: "Post-Study work opportunities (PSW Visa)" },
            { icon: "📚", text: "Shorter & cost-effective degrees" },
            { icon: "🔬", text: "Strong research & innovation focus" },
            { icon: "🏆", text: "Globally recognized degrees" },
            { icon: "💰", text: "Thriving economy & business hub" },
            { icon: "🏙️", text: "Vibrant cities & rich history" },
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

export default StudyInUK;

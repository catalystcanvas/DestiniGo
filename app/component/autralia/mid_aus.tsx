"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StudyInAustralia = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-8">
      {/* Study in the Australia Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Image with Creative Styling */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition duration-300 w-full sm:w-[400px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[350px] relative">
            <img
              src="/images/countries/australia/australia_intro.webp"
              alt="Study in Australia"
              width="100%"
              height="100%"
              className="object-cover w-full h-full absolute inset-0"
            />
          </div>
        </div>

        {/* Description */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-3 md:mb-4">
            Study in Australia
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed tracking-normal w-full max-w-full md:max-w-[900px] lg:max-w-[1100px] mx-auto px-4 
  hyphens-auto lg:hyphens-none 
  [text-align-last:left]">
            Australia is among the top study destinations for international students, offering
            high-quality education, cultural diversity, and excellent career prospects. The country
            is home to leading universities, state-of-the-art research facilities, and a high standard
            of living. Students benefit from post-study work opportunities, globally recognized
            qualifications, and a safe welcoming environment.
          </p>
        </div>
      </div>

      {/* Why Choose Australia Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-10">Why choose Australia?</h2>

        {isClient && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
          >
            {[
              { icon: "🎓", text: "World-class & globally recognized education" },
              { icon: "💼", text: "Post-study work opportunities" },
              { icon: "🌎", text: "Multicultural & diverse society" },
              { icon: "🔬", text: "Strong research & innovation hub" },
              { icon: "🛂", text: "Support for international students" },
              { icon: "🏙️", text: "Vibrant, safe & friendly cities" },
              { icon: "🏝️", text: "Stunning nature & outdoor lifestyle" },
              { icon: "💰", text: "Affordable living " },
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

export default StudyInAustralia;

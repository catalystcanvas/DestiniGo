"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StudyInSingapore = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-8">
      {/* Study in the Singapore Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Image with Creative Styling */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition duration-300 w-full sm:w-[400px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[350px] relative">
            <img
              src="/images/countries/singapore/singapore_intro.webp"
              alt="Study in singapore"
              width={500}
              height={350}
              className="object-cover absolute inset-0"
            />
          </div>
        </div>

        {/* Description */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Study in Singapore</h2>
          <p className="text-gray-700 text-justify leading-relaxed tracking-normal max-w-full md:max-w-[800px] lg:max-w-[900px] hyphens-auto">
            Singapore is a globally recognized education hub, renowned for its world-class
            universities, technological advancements, and strong industry connections. As a bridge
            between the East and West, the country offers a highly competitive, research-driven education,
            making it a preferred destination for international students. With top-ranking universities,
            reasonable tuition fees, and a high standard of living, students gain practical skills,
            global exposure, and valuable networking opportunities. Moreover, Singapore&rsquo;s robust economy,
            thriving business ecosystem, and post-study work options make it an ideal choice for students
            pursuing careers in finance, technology, healthcare, and other industries.
          </p>
        </div>
      </div>

      {/* Why Choose Singapore Section - Creative Wave Pattern */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-10">Why choose Singapore ?</h2>

        {isClient && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
          {[
            { icon: "🎓", text: "Top-ranked universities" },
            { icon: "🌏", text: "Vibrant multicultural experience" },
            { icon: "🛡️", text: "Safe &amp; clean environment" },
            { icon: "💼", text: "Global business & career hub" },
            { icon: "💰", text: "Affordable tuition & scholarships" },
            { icon: "🍜", text: "Diverse &amp; delicious food" },
            { icon: "🚆", text: "Highly developed infrastructure &amp; connectivity" },
            { icon: "🧠", text: "Innovative teaching methods" },
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

export default StudyInSingapore;

"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StudyInCanada = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-8">
      {/* Study in the Canada Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Image with Creative Styling */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition duration-300 w-full sm:w-[400px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[350px] relative">
            <img
              src="/images/countries/canada/canada_intro.webp"
              alt="Study in Canada"
              width="500"
              height="350"
              className="object-cover absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Description */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Study in Canada</h2>
          <p className="text-gray-700 text-justify leading-relaxed tracking-normal max-w-full md:max-w-[800px] lg:max-w-[900px] hyphens-auto">
            Canada is a top destination for international students, known for its high-quality
            education system, affordable tuition fees, and welcoming multicultural society.
            The country boosts globally ranked universities, research-intensive institutions,
            and strong post-graduation work opportunities, making it an ideal environment for
            both academic and professional growth. Students benefit from government-supported
            scholarships, a safe living environment, and an exceptional quality of life. Canadian
            universities emphasize hands-on learning, innovation, and global collaboration, ensuring
            graduates are well-equipped for their careers. For those seeking world-class education,
            reasonable tuition cost, and an inclusive culture, Canada stands as one of the most
            attractive destinations for higher education.
          </p>
        </div>
      </div>

      {/* Why Choose Canada Section - Creative Wave Pattern */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-10">Why choose Canada?</h2>

        {isClient && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
          >
          {[
            { icon: "🏫", text: "Top-ranked education & research" },
            { icon: "💰", text: "Affordable tuition & living cost" },
            { icon: "🌎", text: "Multicultural & inclusive society" },
            { icon: "🛂", text: "Work & PR pathways for graduates" },
            { icon: "🛡️", text: "Safe & peaceful environment" },
            { icon: "🔬", text: "Cutting-Edge research opportunities" },
            { icon: "💼", text: "Part-Time work & internships" },
            { icon: "🎉", text: "Vibrant campus & student life" },
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

export default StudyInCanada;

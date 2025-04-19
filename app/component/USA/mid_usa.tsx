'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StudyInUSA = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-8">
      {/* Study in the USA Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Image with Creative Styling */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition duration-300 w-full sm:w-[400px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[350px] relative">
            <img
              src="/images/countries/usa/usa_intro.webp"
              alt="Study in the USA"
              width={500}
              height={350}
              className="object-cover absolute inset-0"
            />
          </div>
        </div>
        {/* Description */}
        <div className="md:w-1/2">
          {isClient && (
            <motion.h2
              className="text-3xl font-bold text-red-600 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Study in USA
            </motion.h2>
          )}
          <p className="text-gray-700 text-justify leading-relaxed tracking-normal max-w-full md:max-w-[800px] lg:max-w-[900px] hyphens-auto">
            The United States is a leading study destination for international students, 
            renowned for its top-ranked universities, advanced research facilities, and a 
            strong culture of innovation and entrepreneurship. With prestigious institutions 
            such as Harvard, MIT, and Stanford, students benefit from world-class faculty, 
            state-of-the-art technology, and a diverse range of academic programs. The U.S. 
            education system offers flexibility, allowing students to tailor their courses, 
            engage in interdisciplinary studies, and gain practical experience through internships 
            and research opportunities. Additionally, post-study work options, including the 
            Optional Practical Training (OPT) program and the H-1B visa, enhance career prospects, 
            making the United States an ideal choice for those seeking global exposure, a dynamic 
            learning environment, and extensive networking opportunities.
          </p>
        </div>
      </div>

      {/* Why Choose USA Section - Creative Wave Pattern */}
      <div className="mt-16">
        {isClient && (
          <motion.h2
            className="text-3xl font-bold text-center text-red-600 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Why choose USA?
          </motion.h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {[
            { icon: "🎓", text: "Top-ranked global universities" },
            { icon: "💼", text: "Diverse career opportunities" },
            { icon: "🏛️", text: "Flexible & innovative education system" },
            { icon: "🔬", text: "World-Leading research facilities" },
            { icon: "🌎", text: "Rich cultural & global exposure" },
            { icon: "🎭", text: "Vibrant campus life & activities" },
            { icon: "🛂", text: "Strong international student support" },
            { icon: "🏆", text: "Globally recognized degrees" },
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

export default StudyInUSA;

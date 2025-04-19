"use client";

import { useState, useEffect } from "react";
import {
  FaComments, FaBook, FaFileAlt, FaMoneyBill, FaMedal,
  FaUniversity, FaEnvelopeOpenText, FaPassport, FaHome, FaGraduationCap
} from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  { icon: <FaComments />, text: "Counselling for country, university and course selection" },
  { icon: <FaBook />, text: "IELTS preparation & guidance" },
  { icon: <FaFileAlt />, text: "SOP & LOR analysis and improvement" },
  { icon: <FaMoneyBill />, text: "Assessment and budget planning" },
  { icon: <FaMedal />, text: "Scholarship application" },
  { icon: <FaUniversity />, text: "University application and submission" },
  { icon: <FaEnvelopeOpenText />, text: "Receiving offer letter & fees payment" },
  { icon: <FaPassport />, text: "Visa formalities" },
  { icon: <FaHome />, text: "Accommodation guidelines" },
  { icon: <FaGraduationCap />, text: "Your dream College/University" },
];

export default function StudentsPathway() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure animations are only triggered client-side
  }, []);

  return (
    <div className="py-10 px-4 text-center relative">
      <h2 className="text-3xl font-bold mb-8 text-blue-700">Student Pathway</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center ${
              index === 6 ? "md:col-start-2" : ""
            }`}
          >
            {/* Step Number */}
            <span className="text-lg font-bold text-blue-700 mb-1">{index + 1}</span>

            {/* Icon */}
            {isClient && (
              <motion.div
                className="text-3xl text-white p-4 bg-blue-500 border-4 border-white rounded-full shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {step.icon}
              </motion.div>
            )}

            {/* Text */}
            <p className="mt-2 text-sm text-gray-700 font-medium">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

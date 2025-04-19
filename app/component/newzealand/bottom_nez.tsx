"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaUniversity, FaFileAlt, FaPlane, FaUserGraduate, FaCheckCircle } from "react-icons/fa";

const steps = [
  { id: 1, title: "Research & select course", description: "Explore universities and choose a course that fits your goals.", icon: <FaGlobe /> },
  { id: 2, title: "Meet entry requirements", description: "Academic and English proficiency standards.", icon: <FaUniversity /> },
  { id: 3, title: "Prepare documents", description: "Gather transcripts, test scores, SOP, LORs, resume and financial documents.", icon: <FaFileAlt /> },
  { id: 4, title: "Submit application", description: "Submit your university applications with our expert guidance", icon: <FaCheckCircle /> },
  { id: 5, title: "Receive offer letter", description: "Accept the university offer and pay initial deposit.", icon: <FaUserGraduate /> },
  { id: 6, title: "Apply for student visa", description: "Submit visa application with financial proofs and other related documents.", icon: <FaPlane /> },
  { id: 7, title: "Plan accommodation & travel", description: "Book housing, flight, and get ready to study in New Zealand.", icon: <FaGlobe /> },
  { id: 8, title: "Attend orientation", description: "Join orientation program and start your academic journey.", icon: <FaUserGraduate /> }
];

export default function StudyNewzealandProcess() {
  const [selected, setSelected] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  return (
    <div className="bg-gray-100 min-h-[500px] py-10">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Study in New Zealand: Step-by-Step guide</h1>
        <p className="text-gray-700 mb-10">Follow these key steps to successfully apply for studying in New Zealand.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={step.id}>
              {isClient && (
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 cursor-pointer hover:bg-blue-50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelected(selected === index ? null : index)}
                >
                  <div className="text-blue-500 text-3xl">{step.icon}</div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
                    {selected === index && (
                      <motion.p 
                        className="text-gray-600 mt-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

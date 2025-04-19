"use client";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const ExamsInfo = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  const whatsappNumber = "9116000488"; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hello! 👋 I would like to book a free mock test. Can you help me with the details?");
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

  return (
    <div className="container mx-auto p-6">
      <div className="relative text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-wide">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-700 to-cyan-400 text-transparent bg-clip-text">
              IELTS & PTE EXAMS
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4 italic font-medium">
          Your gateway to Global Education ✈️
        </p>
      </div>

      {/* IELTS Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold mb-4">What is IELTS?</h2>
            <p className="text-gray-700 text-justify leading-relaxed tracking-normal max-w-full md:max-w-[800px] lg:max-w-[900px] hyphens-auto">
              IELTS (International English Language Testing System) is a globally recognized English proficiency test
              for non-native English speakers. It is widely accepted by universities, employers, and immigration
              authorities worldwide. The test evaluates your ability to communicate effectively in an English-speaking
              environment and is designed to measure your listening, reading, writing, and speaking skills.
            </p>
            <p className="text-lg mt-2">
              The test is available in two formats:
            </p>
            <ul className="list-disc pl-5">
              <li><strong>Academic:</strong> Suitable for students applying to universities and higher education institutions.</li>
              <li><strong>General Training:</strong> Ideal for individuals migrating to English-speaking countries or seeking work opportunities.</li>
            </ul>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="/images/exam/ielts1.webp"
              alt="IELTS Exam"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* IELTS Test Format */}
        <div className="bg-blue-100 p-6 rounded-lg mt-6">
          <h3 className="text-2xl font-semibold mb-4">IELTS Test Format</h3>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-blue-200">
                <th className="border border-gray-400 p-2">Section</th>
                <th className="border border-gray-400 p-2">Duration</th>
                <th className="border border-gray-400 p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">Listening</td>
                <td className="border border-gray-400 p-2">30 min</td>
                <td className="border border-gray-400 p-2">Four recorded conversations and monologues.</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">Reading</td>
                <td className="border border-gray-400 p-2">60 min</td>
                <td className="border border-gray-400 p-2">40 questions to assess comprehension skills.</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">Writing</td>
                <td className="border border-gray-400 p-2">60 min</td>
                <td className="border border-gray-400 p-2">Two writing tasks: data interpretation and essay writing.</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">Speaking</td>
                <td className="border border-gray-400 p-2">11-14 min</td>
                <td className="border border-gray-400 p-2">Face-to-face or virtual interview with an examiner.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Floating WhatsApp Popup */}
      {isClient && (
        <motion.div
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-red-600 text-white p-3 md:p-4 rounded-full flex items-center gap-2 shadow-2xl cursor-pointer 
                     hover:bg-red-700 transition-all z-[9999] w-auto md:w-auto"
          initial={{ scale: 0 }}
          animate={{ scale: [0.9, 1.1, 1] }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 1 }}
          onClick={() => window.open(whatsappLink, "_blank")}
        >
          <FaWhatsapp className="text-xl md:text-2xl" />
          <span className="font-semibold text-sm md:text-base">Book a Free Mock Test</span>
        </motion.div>
      )}

      {/* PTE Section */}
      <section>
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold mb-4">What is PTE?</h2>
            <p className="text-gray-700 text-justify leading-relaxed tracking-normal max-w-full md:max-w-[800px] lg:max-w-[900px] hyphens-auto">
              PTE (Pearson Test of English) is a fully computer-based English language proficiency test. It is widely
              recognized for its AI-based assessment and quick result delivery. The test evaluates real-life English
              skills through a range of integrated tasks that assess speaking, writing, reading, and listening abilities.
            </p>
            <p className="text-lg mt-2">
              The PTE is divided into three sections:
            </p>
            <ul className="list-disc pl-5">
              <li><strong>Speaking & Writing:</strong> Assesses spoken and written English skills.</li>
              <li><strong>Reading:</strong> Tests comprehension, grammar, and vocabulary.</li>
              <li><strong>Listening:</strong> Evaluates the ability to understand spoken English.</li>
            </ul>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="/images/exam/pte.webp"
              alt="PTE Exam"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* PTE Test Format */}
        <div className="bg-green-100 p-6 rounded-lg mt-6">
          <h3 className="text-2xl font-semibold mb-4">PTE Test Format</h3>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-green-200">
                <th className="border border-gray-400 p-2">Section</th>
                <th className="border border-gray-400 p-2">Duration</th>
                <th className="border border-gray-400 p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">Speaking & Writing</td>
                <td className="border border-gray-400 p-2">54-67 min</td>
                <td className="border border-gray-400 p-2">Personal introduction, essay writing, and sentence repetition.</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">Reading</td>
                <td className="border border-gray-400 p-2">29-30 min</td>
                <td className="border border-gray-400 p-2">Multiple-choice questions, fill-in-the-blanks, and re-ordering text.</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">Listening</td>
                <td className="border border-gray-400 p-2">30-43 min</td>
                <td className="border border-gray-400 p-2">Summarizing spoken text, multiple-choice, and dictation.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Eligibility and Application */}
      <section className="relative mt-12 bg-gradient-to-r from-blue-50 to-gray-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6 tracking-wide">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-700 to-cyan-400 text-transparent bg-clip-text">
              Eligibility & When to Apply
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
          {/* Eligibility Section */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2 flex items-center">
              <img src="/images/exam/check.webp" alt="Check" width={24} height={24} className="mr-2" />
              Who Can Apply?
            </h3>
            <p className="text-gray-700 text-lg">
              Both IELTS and PTE can be taken by students and professionals aiming to study or work abroad.
            </p>
            <p className="text-gray-700 text-lg mt-2">
              Candidates must be at least <span className="font-bold text-blue-600">16 years old.</span>
            </p>
          </div>

          {/* Application Timing Section */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
            <h3 className="text-2xl font-semibold text-cyan-600 mb-2 flex items-center">
              <img src="/images/exam/calender.webp" alt="Calendar" width={24} height={24} className="mr-2" />
              Best Time to Apply
            </h3>
            <p className="text-gray-700 text-lg">
              It is recommended to book your test at least <span className="font-bold text-cyan-600">2-3 months</span> before your application deadlines.
            </p>
            <p className="text-gray-700 text-lg mt-2">
              Early booking ensures flexibility in choosing test dates and preparation time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamsInfo;

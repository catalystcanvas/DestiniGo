"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion"; // Ensure you have framer-motion installed for animations

const testimonials = [
  {
    img: "/images/testimonials/palak.webp",
    text: "Highly recommend this institute. Really helpful and great guide, helped me through IELTS training to visa interview practice as well as through the University process. Thank you DestiniGo for helping me to get enrolled in Arizona State University (Tempe), USA.",
    name: "Palak",
    rating: 5,
  },
  {
    img: "/images/testimonials/rahil.webp",
    text: "I applied for a Canadian study permit this year,2022. IRCC was facing a significant backlog. It was because of DestiniGo's help and continuous hand holding, that I got my visa and was able to join my University (UofT) on time. Ruchi and Manish were always available, even for the smallest of matters and at odd hours, to guide me and suggest ways to handle specific matters and follow-up on a regular basis. My sincerest thanks to them and wish them the best in their endeavours.",
    name: "Rahil Chadha",
    rating: 5,
  },
  // Add remaining testimonials here...
];

const useTestimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handlePrev = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonialIndex]);

  return { testimonialIndex, handlePrev, handleNext };
};

const Testimonials = () => {
  const { testimonialIndex, handlePrev, handleNext } = useTestimonials();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  return (
    <section className="py-24 px-6 text-center flex flex-col justify-center items-center min-h-screen relative bg-blue-200">
      {/* Heading Moved Up for Better Spacing */}
      <h2 className="text-5xl font-bold text-white mb-20 mt-[-140px]">
        What Our Students Say
      </h2>

      <div className="relative w-[90%] max-w-xl">
        {/* Left Navigation Button */}
        <button
          onClick={handlePrev}
          className="absolute lg:left-[-200px] left-[-100px] top-1/2 transform -translate-y-1/2 bg-gray-600 p-4 rounded-full text-white shadow-lg hover:bg-gray-800 transition hidden sm:block"
        >
          <ChevronLeft size={32} />
        </button>

        {isClient && (
          <motion.div
            className="relative bg-white rounded-lg shadow-xl p-8 text-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Gold Starred Tag */}
            <div className="absolute top-[-12px] right-[-12px] bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
              ⭐ Starred
            </div>

            {/* User Image - Pops Out More */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <img
                src={testimonials[testimonialIndex].img}
                alt="User"
                width={112} // 28 x 4 = 112px
                height={112} // 28 x 4 = 112px
                className="rounded-full shadow-lg bg-white ring-8 ring-blue-200 object-cover"
              />
            </div>

            {/* Testimonial Content */}
            <div className="mt-16">
              <p className="text-gray-700 text-lg">
                “{testimonials[testimonialIndex].text}”
              </p>
              <div className="mt-4 text-xl font-semibold text-black">
                {testimonials[testimonialIndex].name}
              </div>

              {/* Star Ratings */}
              <div className="mt-2 flex justify-center">
                {[...Array(testimonials[testimonialIndex].rating)].map(
                  (_, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">
                      ★
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Sharper Shadow Effect */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-85px] w-80 h-8 bg-black opacity-10 blur-sm rounded-full"></div>

        {/* Right Navigation Button */}
        <button
          onClick={handleNext}
          className="absolute lg:right-[-200px] right-[-100px] top-1/2 transform -translate-y-1/2 bg-gray-600 p-4 rounded-full text-white shadow-lg hover:bg-gray-800 transition hidden sm:block"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [showMore, setShowMore] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isClient, setIsClient] = useState(false); // Ensures animations are triggered client-side

  useEffect(() => {
    setIsClient(true); // Set to true after the component is mounted (client-side)
    
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const services = [
    { title: "15 Years Of successful experience in overseas education", icon: "🎓", description: "With over a decade of expertise, DestiniGo has guided thousands of students toward their dream universities, ensuring a seamless transition into global education." },
    { title: "4000+ students admitted to global universities", icon: "🌍", description: "Join our vast community of successful students who have secured admission in prestigious institutions worldwide, turning aspirations into reality." },
    { title: "Comprehensive career counseling", icon: "🧑‍🏫", description: "Our expert counselors assess your strengths, interests, and goals to craft a personalized roadmap for your international academic journey." },
    { title: "IELTS-PTE test preparation support", icon: "📚", description: "Ace your english proficiency exams with our structured training, mock tests, and personalized coaching to maximize your score." },
    { title: "Personalized university selection", icon: "🏛️", description: "We match your academic profile with the best-fit universities, ensuring a successful and fulfilling study abroad experience." },
    { title: "Scholarship assistance", icon: "💰", description: "Reduce financial burden with our expert guidance on securing scholarships and grants tailored to your academic excellence and background." }, 
    { title: "Strong alumni network for mentorship", icon: "🤝", description: "Connect with our global alumni community for mentorship, career guidance, and networking opportunities in your field of study." },
    { title: "Additional services", icon: "📑", description: "Secure your future with our expert guidance on scholarships, education loan, visa documentation and mock interviews —ensuring a smooth and stress-free study abroad journey." },
    { title: "Post-Admission support", icon: "🏠", description: "From accommodation, travel insurance, forex exchange to pre-departure briefings, we ensure a smooth transition to your new academic life abroad." },
  ];

  const initialServicesCount = isDesktop ? 6 : 4;
  const visibleServices = showMore ? services : services.slice(0, initialServicesCount);

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8 text-[#1E3A8A]">Why Choose DestiniGo</h2>

      {isClient && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8"
        >
          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group h-[320px] p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center 
                bg-gray-50 text-black hover:bg-blue-700 hover:text-white transition-all duration-300"
            >
              <div className="text-red-500 text-4xl mb-4 group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-sm mt-2 group-hover:text-white">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {services.length > initialServicesCount && (
        <motion.button
          onClick={() => setShowMore(!showMore)}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
        >
          {showMore ? "Show Less" : "See More"}
        </motion.button>
      )}
    </section>
  );
};

export default Services;

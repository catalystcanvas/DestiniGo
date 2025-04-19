'use client';

import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

const ImpactSection = () => {
  const universities = [
    { 
      name: 'Purdue University-USA', 
      image: '/images/top_colleges/home/purdue.webp',
      shortlisted: 120,
      scholarshipRecipients: 50,
      review: {
        student: 'Saksham Singh',
        comment: 'I had a wonderful experience. The faculty was too good and they helped me throughout my admission process. IELTS classes were really beneficial. I will definitely recommend you all to go ahead with Destinigo.',
        studentImage: '/images/testimonials/stu_secured_uni/saksham.webp'
      }
    },
    { 
      name: 'TUBAF-Germany', 
      image: '/images/top_colleges/home/tubaf.webp',
      shortlisted: 95,
      scholarshipRecipients: 40,
      review: {
        student: 'Prayagraj Singh',
        comment: 'I am thankful to DESTINIGO OVERSEAS CONSULTANTS for providing me coaching regarding my IELTS exam. Special thanks to Ruchi maam and Manish sir for their continues support during my preparation. I am very glad to have such teachers, who are always ready to help. The thing I liked the most is the concern of both of them towards my future and their advice helps me alot to get my desired score in IELTS exam. Last but not the least, I am very happy to meet such a supportive personalities and got chance to be a part of DESTINIGO family .',
        studentImage: '/images/testimonials/stu_secured_uni/praygraj.webp'
      }
    },
    { 
      name: 'Arizona State University-USA', 
      image: '/images/top_colleges/home/arizona-state-university (asu).webp',
      shortlisted: 110,
      scholarshipRecipients: 60,
      review: {
        student: 'Palak',
        comment: 'Highly recommend this institute. Really helpful and great guide, helped me through IELTS training to visa interview practice as well as through University process. Thank you DestiniGo for helping me to get enrolled in Arizona State University (Tempe), USA.',
        studentImage: '/images/testimonials/stu_secured_uni/palak.webp'
      }
    },
    { 
      name: 'University of Bedfordshire-UK', 
      image: '/images/top_colleges/home/bedfordshire.webp',
      shortlisted: 110,
      scholarshipRecipients: 60,
      review: {
        student: 'Vishav Vir Singh',
        comment: 'DestiniGo made my dream of studying in the UK a reality! Their team guided me through every step, from university selection to visa approval, making the entire process smooth and stress-free. Thanks to their support, I secured admission to the University of Bedfordshire without any hassle. Highly recommended for anyone planning to study abroad!',
        studentImage: '/images/testimonials/stu_secured_uni/vishavvir.webp'
      }
    },
    { 
      name: 'University of Wisconsin-USA', 
      image: '/images/top_colleges/home/wiscosin.webp',
      shortlisted: 110,
      scholarshipRecipients: 60,
      review: {
        student: 'Arki Walia',
        comment: 'Ruchi has helped us with both children and the experience has been amazing. Very professional, very accessible and helpful. We took their assistance for Finland and US and in both cases the paperwork, deadlines and submissions were very well facilitated.',
        studentImage: '/images/testimonials/stu_secured_uni/walia.webp'
      }
    },
    { 
      name: 'INSA Lyon-France', 
      image: '/images/top_colleges/home/insalyon.webp',
      shortlisted: 110,
      scholarshipRecipients: 60,
      review: {
        student: 'Krisha Verma',
        comment: 'Thank you Destinigo for the making my visa process go so smooth. A big thanks to Ruchi maam for showing relentless commitment and patience.',
        studentImage: '/images/testimonials/stu_secured_uni/krishna.webp'
      }
    },
    { 
      name: 'Deakin University-Australia', 
      image: '/images/top_colleges/home/deakin.webp',
      shortlisted: 110,
      scholarshipRecipients: 60,
      review: {
        student: 'Jay Sharma',
        comment: 'DestiniGo made my study abroad dream a reality! From university shortlisting to visa guidance, their team provided exceptional support at every step. Their personalized approach helped me secure admission to Deakin University, and their expert counseling ensured I made the right choice for my career. Highly recommended for anyone aiming to study overseas!',
        studentImage: '/images/testimonials/stu_secured_uni/jay.webp'
      }
    },
    { 
      name: 'UIUC-USA', 
      image: '/images/top_colleges/home/uiuc.webp',
      shortlisted: 110,
      scholarshipRecipients: 60,
      review: {
        student: 'Aryan',
        comment: 'I cannot thank DestiniGo enough for their expert guidance and unwavering support. Their strategic approach to profile building, SOP guidance, and interview preparation played a crucial role in my admission to UIUC. The entire process was seamless, and their team ensured that I had the best possible chance at securing a top university. Truly a game-changer for aspiring international students!',
        studentImage: '/images/testimonials/stu_secured_uni/aryan.webp'
      }
    },
    { 
      name: 'NYU-USA', 
      image: '/images/top_colleges/home/nyu.webp',
      shortlisted: 110,
      scholarshipRecipients: 60,
      review: {
        student: 'Aadvika Gupta',
        comment: 'DestiniGo Overseas Consultant has helped my daughter Aadvika  for selection/shortlisting of best available Universities for UK, Canada and USA. Ruchi and team DOC did help us in filing the different and complicated online forms, essay writing, fees/payments and other required paperwork for all the desired Universities.. She did help my daughter in IELTS and SAT exams too. We had very good Experience with team DOC, they are very professional, very accessible and helpful with very reasonable charges..',
        studentImage: '/images/testimonials/stu_secured_uni/aadvika.webp'
      }
    },
    { 
      name: 'University Of Toronto-Canada', 
      image: '/images/top_colleges/home/torento.webp',
      shortlisted: 110,
      scholarshipRecipients: 60,
      review: {
        student: 'Rahil Chadha',
        comment: 'I applied for a Canadian study permit this year,2022. IRCC was facing a significant backlog. It was because of Destinigo help and continuous hand holding, that I got my visa and was able to join my University (UofT) on time. Ruchi and Manish were always available, even for the smallest of matters and at odd hours, to guide me and suggest ways to handle specific matters and follow-up on a regular basis. My sincerest thanks to them and wish them the best in their endeavours',
        studentImage: '/images/testimonials/stu_secured_uni/rahil.webp'
      }
    },
    { 
      name: 'George Brown College-Canada', 
      image: '/images/top_colleges/home/george.webp',
      shortlisted: 110,
      scholarshipRecipients: 60,
      review: {
        student: 'Vaibhav Nangia',
        comment: 'When I finally made up my mind to study abroad, I had lots of doubts and concerns but I think I found the right place to get an honest and trustworthy answers to all of them. DestiniGo made sure that I applied to the right course at the right college. They ensured that the whole process was not overwhelming by being available whenever I needed and by taking care of everything. I am grateful for their constant support. Kudos Ms Ruchi and Mr Manish.',
        studentImage: '/images/testimonials/stu_secured_uni/vaibhav.webp'
      }
    },
    { 
      name: 'Rose-Hulman Institute of Technology-USA', 
      image: '/images/top_colleges/home/rose.webp',
      shortlisted: 110,
      scholarshipRecipients: 60,
      review: {
        student: 'Ekansh Bansal',
        comment: 'Destinigo provides amazing consultancy services for studying abroad and it ensures that you are on the right track. Ruchi maam and sir takes care of everything personally and at the end, outstanding results are produced. I personally have a really good experience and I guess it is the best place to start your journey for studying abroad.',
        studentImage: '/images/testimonials/stu_secured_uni/ekansh.webp'
      }
    },
    { 
      name: 'Massachusetts College of Pharmacy and Health Sciences-USA', 
      image: '/images/top_colleges/home/MASSACHUSETTS.webp',
      shortlisted: 110,
      scholarshipRecipients: 60,
      review: {
        student: 'Samridhi Sikhhwal',
        comment: 'Completed the whole visa process very efficiently and smoothly. Couldnot have asked for a better consultant. I did not have to worry about anything',
        studentImage: '/images/testimonials/stu_secured_uni/Samridhi.webp'
      }
    }
  ];

  const controls = useAnimation();
  const [xPosition, setXPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const [movementDistance, setMovementDistance] = useState('-47%');
  const [animationSpeed, setAnimationSpeed] = useState(10);
  const [isClient, setIsClient] = useState(false); // New state for client-side rendering

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  useEffect(() => {
    const updateMovement = () => {
      if (window.innerWidth < 768) {
        setMovementDistance('-90%'); // Move fully in smaller screens
        setAnimationSpeed(30); // Increase speed for mobile
      } else if (window.innerWidth < 1024) {
        setMovementDistance('-83%'); // Adjust for tablets
        setAnimationSpeed(40); // Faster than desktop
      } else {
        setMovementDistance('-70%'); // Default for larger screens
        setAnimationSpeed(30);
      }
    };

    updateMovement();
    window.addEventListener('resize', updateMovement);

    return () => window.removeEventListener('resize', updateMovement);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: [xPosition, movementDistance],
        transition: { repeat: Infinity, duration: animationSpeed, ease: 'linear' },
      });
    }
  }, [isPaused, xPosition, movementDistance, animationSpeed, controls]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100 text-center overflow-hidden">
      <h2 className="text-5xl font-bold text-blue-600 pb-6">What our Students Say</h2>

      <div
        className="relative w-full overflow-hidden mt-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isClient && ( // Only render the motion divs on the client-side
          <motion.div
            className="flex gap-10 w-max"
            animate={controls}
            initial={{ x: '0%' }}
            onUpdate={(latest) => {
              if (typeof latest.x === 'number') setXPosition(latest.x);
            }}
          >
            {universities.map((uni, index: number) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center w-80 bg-white rounded-2xl shadow-lg p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Admit Badge */}
                <div className="absolute -top-3 bg-gradient-to-r from-yellow-500 to-orange-400 text-white text-sm font-semibold px-4 py-0 rounded-md shadow-md"> 
                  <span className="flex items-center gap-1 translate-y-1"> {/* Shift down slightly */}
                    <img src="/images/logo/graduation_cap.webp" alt="Crown" width={32} height={21} />
                    Admitted
                  </span>
                </div>

                {/* University Image with Overlays */}
                <div className="relative w-full h-56 rounded-lg overflow-hidden">
                  <img src={uni.image} alt={uni.name} width={400} height={224} className="object-cover w-full h-full" />

                  {/* University Name (Top Center) */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-6 py-2 rounded-md text-sm font-semibold w-max min-w-[200px] max-w-[90%] text-center">
                    {uni.name}
                  </div>
                </div>

                {/* Student Review */}
                <div className="mt-4 flex items-center bg-gray-200 p-4 rounded-xl w-full">
                  <img
                    src={uni.review.studentImage}
                    alt={uni.review.student}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4 text-left">
                    <p className="text-sm font-semibold">{uni.review.student}</p>
                    <p className="text-xs text-gray-600">
                      {expandedIndex === index
                        ? uni.review.comment
                        : `${uni.review.comment.slice(0, 80)}...`}
                    </p>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-blue-500 text-xs font-semibold mt-1"
                    >
                      {expandedIndex === index ? 'See Less' : 'See More'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ImpactSection;







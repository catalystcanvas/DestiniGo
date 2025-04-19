"use client";

import { useState, useEffect } from "react";

const countries = [
  { country: "Australia", desc: "Join globally recognized institutions with great career prospects and a high standard of living.", link: "/countries/australia" },
  { country: "Canada", desc: "Study in a friendly and multicultural society with strong post-study work opportunities.", link: "/countries/canada" },
  { country: "Europe", desc: "Access affordable, high-quality education with multi-country exposure and rich cultural diversity.", link: "/countries/europe" },
  { country: "NewZealand", desc: "Enjoy a high-quality education, breathtaking landscapes, and a safe, welcoming environment for international students.", link: "/countries/newzealand" },
  { country: "Singapore", desc: "Pursue education in a globally connected hub with top-notch universities and strong job prospects.", link: "/countries/singapore" },
  { country: "UK", desc: "Study at world-class universities with a rich history, research opportunities, and vibrant student life.", link: "/countries/uk" },
  { country: "USA", desc: "Experience diverse culture, innovative education, and vast career opportunities in top-ranked universities.", link: "/countries/usa" }
].sort((a, b) => a.country.localeCompare(b.country));

export default function StudyDestinations() {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState(300);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setCardWidth(380);
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setCardWidth(240);
        setVisibleCards(2);
      } else {
        setCardWidth(280);
        setVisibleCards(4);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setStartIndex((prevIndex) => prevIndex + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (startIndex >= countries.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setStartIndex(0);
      }, 500);
    }
  }, [startIndex]);

  return (
    <section className="py-32 px-6 text-center w-full overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 text-[#1E3A8A]">Explore Study Destinations</h2>

      <div className="relative w-full overflow-hidden">
        <div
          className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : "transition-none"} gap-4`}
          style={{
            transform: `translateX(-${startIndex * (cardWidth + 16)}px)`,
            width: `${(countries.length + visibleCards) * (cardWidth + 16)}px`,
          }}
        >
          {[...countries, ...countries.slice(0, visibleCards)].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${cardWidth}px` }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative w-full h-72 perspective">
                <div className="relative w-full h-full transition-transform transform-style-preserve-3d duration-500 hover:rotate-y-180">
                  <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
                    <div className="relative w-full h-48 mt-8">
                      {isClient && (
                        <img
                          src={`/images/flag/${item.country.toLowerCase().replace(/\s+/g, '-')}.webp`}
                          alt={item.country}
                          width={300}
                          height={200}
                          className="rounded-t-2xl object-cover w-full h-full"
                        />
                      )}
                    </div>
                    <div className="mt-auto p-3 w-full text-center text-white text-lg font-semibold bg-black">
                      {item.country}
                    </div>
                  </div>
                  <div className="absolute w-full h-full bg-blue-500 text-white flex flex-col items-center justify-center rotate-y-180 backface-hidden rounded-2xl shadow-lg p-4">
                    <h3 className="text-xl font-semibold mb-4">{item.country}</h3>
                    <p className="text-sm text-center mb-6">{item.desc}</p>
                    <a href={item.link} className="mt-2 underline">See More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

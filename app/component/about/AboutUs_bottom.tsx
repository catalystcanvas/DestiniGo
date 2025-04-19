"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const images = [
  "/images/student gallery/1.webp", "/images/student gallery/2.webp", "/images/student gallery/3.webp","/images/student gallery/4.webp",
  "/images/student gallery/5.webp", "/images/student gallery/6.webp", "/images/student gallery/7.webp", "/images/student gallery/8.webp",
  "/images/student gallery/9.webp", "/images/student gallery/10.webp", "/images/student gallery/11.webp","/images/student gallery/12.webp", 
  "/images/student gallery/13.webp", "/images/student gallery/14.webp", "/images/student gallery/15.webp", "/images/student gallery/16.webp",
  "/images/student gallery/17.webp","/images/student gallery/18.webp"
];

const certificates = [
  "/images/certificates/certificate1.webp", "/images/certificates/certificate2.webp", "/images/certificates/certificate3.webp",
  "/images/certificates/certificate4.webp", "/images/certificates/certificate5.webp"
];

export default function GalleryAndCertificates() {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
const [currentImageIndex, setCurrentImageIndex] = useState(0);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [isCertificatePopup, setIsCertificatePopup] = useState(false);

  useEffect(() => {
    if (showGallery || selectedCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showGallery, selectedCertificate]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (showGallery) {
        if (event.key === "ArrowRight") {
          setCurrentImageIndex((prev) => (prev + 1) % images.length);
        } else if (event.key === "ArrowLeft") {
          setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        } else if (event.key === "Escape") {
          setShowGallery(false);
        }
      }

      if (selectedCertificate && event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    if (showGallery || selectedCertificate) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showGallery, selectedCertificate]);

  return (
    <div className="p-8 space-y-16">
      {/* Gallery Section */}
      <div className="p-6 bg-white shadow-lg rounded-2xl border border-gray-300 mx-auto w-[90%] md:w-[80%] lg:w-[70%]">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[550px] overflow-hidden">
          {images.slice(0, 6).map((src, index) => (
            <div 
              key={index} 
              className="relative w-full h-[250px] rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 hover:rotate-1"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="rounded-xl cursor-pointer w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                onClick={() => {
                  setShowGallery(true);
                  setCurrentImageIndex(index);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition duration-300"></div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setShowGallery(true)} 
          className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          View More
        </button>
      </div>

      {/* Full-Screen Gallery Popup */}
      {showGallery && (
        <div className="fixed top-[-65px] left-0 bg-black bg-opacity-90 backdrop-blur-md flex items-center justify-center z-50 w-full h-screen transition-opacity duration-300 ease-in-out">
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition-transform"
          >
            <X size={32} />
          </button>

          <div className="w-full h-full flex flex-wrap justify-center items-center gap-6 overflow-auto p-6">
            {images.map((src, index) => (
              <div 
                key={index} 
                className="relative w-[250px] h-[300px] rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain max-h-full max-w-full transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certificates Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Our Certificates</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {certificates.map((src, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer overflow-hidden border-2 border-gray-300 rounded-lg shadow-lg w-40 sm:w-48 md:w-52 lg:w-64 h-32 sm:h-36 md:h-40"
              onClick={() => {
                setSelectedCertificate(src);
                setIsCertificatePopup(true);
              }}
            >
              <img 
                src={src}
                alt={`Certificate ${index + 1}`} 
                width={256} 
                height={200} 
                className="object-fill w-full h-full" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Certificate Popup */}
      {selectedCertificate && (
        <div className="fixed top-[-65px] left-0 bg-black bg-opacity-90 backdrop-blur-md flex items-center justify-center z-50 w-full h-screen transition-opacity duration-300 ease-in-out">
          <button onClick={() => setSelectedCertificate(null)} className="absolute top-6 right-6 text-white text-3xl">
            <X size={32} />
          </button>
          <img 
            src={selectedCertificate} 
            alt="Selected Certificate" 
            width={500} 
            height={350} 
            className="object-cover rounded-lg shadow-lg" 
          />
        </div>
      )}
    </div>
  );
}

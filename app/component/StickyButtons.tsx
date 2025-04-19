"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyKoYXAZAl1RplSs4R-YUt-iy2ETUdk0qIGl0BB2Bqevkgdat57nJTfpKmRN_OWDxPyJg/exec"; // Replace this with your Google Apps Script URL

const StickyWidgets = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isClient, setIsClient] = useState(false); // Ensures animations are triggered client-side

  useEffect(() => {
    setIsClient(true); // Set to true after the component is mounted (client-side)
  }, []);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      // Allow only numbers and limit to 10 digits
      if (!/^\d{0,10}$/.test(value)) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Show success message immediately
    setIsSubmitted(true);
  
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // You have to keep this if using Google Apps Script without CORS headers
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
  
      // Close form after a short delay
      setTimeout(() => {
        setIsSubmitted(false);
        setIsFormOpen(false);
      }, 2000); // Increased time to give better UX
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
      setIsSubmitted(false);
    }
  };
  

  return (
    <>
      {/* WhatsApp Floating Icon */}
      {isClient && (
        <motion.a
          href="https://wa.me/9116000488" 
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-[999] hover:bg-green-600 transition-all"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src="/images/logo/whatsapp.webp"
            alt="WhatsApp"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </motion.a>
      )}

      {/* "Contact Us" Bar */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed top-2/4 right-4 transform -translate-y-1/2 bg-blue-600 text-white px-12 py-2 rounded-l-lg rounded-r-lg shadow-lg z-[999] hover:bg-blue-700 transition-all flex items-center rotate-[90deg] origin-right"
      >
        <span className="text-lg font-semibold tracking-wide">Contact Us</span>
      </button>

      {/* Floating Contact Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          {isClient && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="relative bg-white w-[90%] max-w-md p-6 rounded-lg shadow-xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                <X size={24} />
              </button>

              {/* Check if the form is submitted */}
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <CheckCircle size={48} className="text-green-600 mb-4" />
                  <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
                  <p className="text-lg text-gray-600">We&apos;ll get back to you soon. 🚀</p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-4 text-center">Get in Touch</h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border p-2 rounded-md text-black"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border p-2 rounded-md text-black"
                      required
                    />
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Your Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="border p-2 rounded-md text-black"
                      required
                      pattern="\d{10}"
                      maxLength={10}
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="border p-2 rounded-md h-24 text-black"
                      required
                    ></textarea>
                    <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                      Send
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          )}
        </div>
      )}
    </>
  );
};

export default StickyWidgets;

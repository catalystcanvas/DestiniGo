'use client';
import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

export default function ContactSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that animations are only triggered client-side
  }, []);

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Left Side - Contact Info (1/3 Width) */}
        {isClient && (
          <div className="flex flex-col justify-between space-y-4">
            <motion.a
              href="tel:+919116000488"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-2xl flex items-center shadow-lg text-white h-full cursor-pointer"
            >
              <Phone className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">+91-9116000488</h3>
                <p className="text-sm opacity-80">Call us for quick support.</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:info@destinigoedu.com"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-2xl flex items-center shadow-lg text-white h-full cursor-pointer"
            >
              <Mail className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">info@destinigoedu.com</h3>
                <p className="text-sm opacity-80">Drop us an email anytime.</p>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 rounded-2xl flex items-center shadow-lg text-white h-full"
            >
              <MapPin className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Our Office Location</h3>
                <p className="text-sm opacity-80">10-B , 3rd Floor, Shyam Sagar Building, Gopalpura Bypass Road, Opp. Frankfinn Institute, Jaipur-302018 Rajasthan, India.</p>
              </div>
            </motion.div>
          </div>
        )}

        {/* Right Side - Google Map (2/3 Width) */}
        {isClient && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 overflow-hidden rounded-3xl shadow-xl border border-gray-200"
          >
            <iframe
              className="w-full h-[450px] rounded-3xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.064638067583!2d75.77980187522279!3d26.869687376672772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5ca81ecd415%3A0xdabddd73bf29558f!2sDestiniGo%20Overseas%20Consultant!5e0!3m2!1sen!2sin!4v1740248202640!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        )}
      </div>
    </div>
  );
}

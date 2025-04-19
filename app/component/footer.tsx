'use client';

import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  const countries = [
    "Australia",
    "Canada",
    "Europe",
    "New Zealand",
    "Singapore",
    "UK",
    "USA",
  ];

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 rounded-t-[50px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Left: Logo & Social Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/images/logo/destinigo logo_footer.webp"
            alt="Company Logo"
            width={180}
            height={70}
            className="mb-5 mt-4"
          />
          <div className="flex space-x-6 justify-center md:justify-start">
            <a href="https://www.instagram.com/destinigo_india?igsh=czV0bXExczh2dTB1" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl transition-transform hover:-translate-y-2 hover:text-pink-500 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/company/destinigo-consultants/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl transition-transform hover:-translate-y-2 hover:text-blue-500 cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/@destinigoedu" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-3xl transition-transform hover:-translate-y-2 hover:text-red-500 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Middle: Top Countries */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-5">Top Countries for Study</h3>
          <ul className="space-y-3 text-lg">
            {countries.map((country) => (
              <li key={country}>
                <a
                  href={`/countries/${country.toLowerCase().replace(/\s+/g, "-")}/`}
                  className="hover:text-blue-400 transition-all"
                >
                  {country}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-5">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start space-x-4 text-lg mb-4">
            <FaPhone className="text-blue-400 text-3xl min-w-[32px] rotate-90" />
            <a href="tel:+919116000488" className="hover:text-blue-400 transition-all">
              +91-9116000488
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start space-x-4 text-lg mb-4">
            <FaEnvelope className="text-blue-400 text-3xl min-w-[32px]" />
            <a href="mailto:info@destinigoedu.com" className="hover:text-blue-400 transition-all">
              info@destinigoedu.com
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start space-x-4 text-lg">
            <FaMapMarkerAlt className="text-blue-400 text-3xl min-w-[32px] -mt-10" />
            <span className="max-w-xs md:max-w-md">
              10-B, 3rd Floor, Shyam Sagar Building, Gopalpura Bypass Road, Opp. Frankfinn Institute, Jaipur-302018, Rajasthan, India.
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-white mt-8 text-lg">
        © {new Date().getFullYear()} - All rights reserved by DestiniGo <br />
        Developed by CatalystCanvas
      </div>
    </footer>
  );
};

export default Footer;

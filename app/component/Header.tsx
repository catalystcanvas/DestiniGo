"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    const isOpening = !menuOpen;
    setMenuOpen(isOpening);
    document.body.style.overflow = isOpening ? "hidden" : "auto";
  };
  
  // const closeMenu = (e: MouseEvent | TouchEvent) => {
  //   if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
  //     setMenuOpen(false);
  //     document.body.style.overflow = "auto";
  //   }
  // };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"; // Reset on component unmount
    };
  }, []);

  return (
    <nav className="bg-white-100 p-4 flex items-center justify-between w-full px-6 md:px-12 shadow-md relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo/destinigo logo.webp"
            alt="Logo"
            width={120}
            height={10}
            className="cursor-pointer"
          />
        </Link>
      </div>
      {/* Free Counselling Button for Mobile */}
      <div className="lg:hidden flex items-center gap-4">
        <Link href="https://wa.me/9116000488" target="_blank" className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105">
          Free Counselling
        </Link>
        <button onClick={toggleMenu} className="p-2 text-black">
          <Menu size={24} />
        </button>
      </div>
      {/* Free Counselling Button for Mobile */}

      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-10 text-lg font-semibold mx-auto">
        <Link
          href="/"
          className="hover:text-gray-700 transition duration-200 md:text-sm lg:text-lg text-black"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-700 transition duration-200 md:text-sm lg:text-lg text-black"
        >
          About Us
        </Link>
      

        {/* Services Dropdown */}
        <div className="relative group">
          <button className="hover:text-gray-700 transition duration-200 md:text-sm lg:text-lg text-black">
            Services <span className="md:text-sm lg:text-lg">▾</span>
          </button>
          <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-30">
            <li>
              <Link
                href="https://www.universityliving.com"
                className="block px-4 py-2 text-black hover:bg-blue-400 hover:text-white md:text-sm lg:text-lg"
              >
                Accommodation
              </Link>
            </li>
            {["Forex", "Education Loan", "Ticket Assistance", "Tourist Visa","Insurance"].map((service, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:bg-blue-400 hover:text-white md:text-sm lg:text-lg"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Countries Dropdown */}
<div className="relative group">
  <button className="hover:text-gray-700 transition duration-200 md:text-sm lg:text-lg text-black">
    Countries <span className="md:text-sm lg:text-lg">▾</span>
  </button>
  <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-30">
    {[
      "Australia",
      "Canada",
      "Europe",
      "New Zealand",
      "Singapore",
      "UK",
      "USA",
    ].map((country, index) => {
      const href = `/countries/${country.toLowerCase().replace(/\s+/g, "-")}`;
      return (
        <li key={index}>
          <Link
            href={href}
            className="block px-4 py-2 text-black hover:bg-blue-400 hover:text-white md:text-sm lg:text-lg"
          >
            {country}
          </Link>
        </li>
      );
    })}
  </ul>
</div>
        {/* TestPrep Dropdown */}
        <div className="relative group">
          <button className="hover:text-gray-700 transition duration-200 md:text-sm lg:text-lg text-black">
            Test-Preperation <span className="md:text-sm lg:text-lg">▾</span>
          </button>
          <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-30">
            {["IELTS & PTE"].map((exam, index) => (
              <li key={index}>
                <a
                  href="/exam/"
                  className="block px-4 py-2 text-black hover:bg-blue-400 hover:text-white md:text-sm lg:text-lg"
                >
                  {exam}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* <Link
          href="/exam"
          className="hover:text-gray-700 transition duration-200 md:text-sm lg:text-lg text-black"
        >
          IELTS & PTE
        </Link> */}

        <Link
          href="/contact"
          className="hover:text-gray-700 transition duration-200 md:text-sm lg:text-lg text-black"
        >
          Contact Us
        </Link>
      </div>
      {/* Free Counselling Button for Large Screens */}
      <Link
        href="https://wa.me/9116000488"
        target="_blank"
        className="hidden lg:block bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Free Counselling
      </Link>


      {/* Mobile Menu Button */}
      {/* <div className="md:hidden">
        <button onClick={toggleMenu} className="p-2 text-black">
          <Menu size={24} />
        </button>
      </div> */}

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-end"
        >
          <div className="bg-white w-64 h-full p-6 relative overflow-y-auto">
          {/* <Link href="/counselling" className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105">
          Free Counselling
        </Link> */}
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-black">
              <X size={24} />
            </button>
            <ul className="space-y-4 mt-10">
              <li>
                <Link href="/" className="block text-lg font-semibold text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block text-lg font-semibold text-black">
                  About Us
                </Link>
              </li>
              

              

<li
  className="mt-4 font-semibold text-black"
  onClick={() =>
    setOpenDropdown(openDropdown === "services" ? null : "services")
  }
>
  Services ▾
</li>
{openDropdown === "services" && (
  <ul>
    <li>
      <Link href="https://www.universityliving.com" className="block px-4 py-2 text-black hover:bg-gray-100">
        Accommodation
      </Link>
    </li>
    {["Forex", "Education Loan", "Ticket Assistance", "Tourist Visa","Insurance"].map((service, index) => (
      <li key={index} className="block px-4 py-2 text-black">
        {service}
      </li>
    ))}
  </ul>
)}


<li
  className="mt-4 font-semibold text-black"
  onClick={() =>
    setOpenDropdown(openDropdown === "countries" ? null : "countries")
  }
>
  Countries ▾
</li>
{openDropdown === "countries" &&
  [
    "Australia",
    "Canada",
    "Europe",
    "New Zealand",
    "Singapore",
    "UK",
    "USA",
  ].map((country, index) => (
    <li key={index}>
      <Link
        href={`/countries/${country.toLowerCase().replace(/\s+/g, "-")}`}
        className="block px-4 py-2 text-black hover:bg-gray-100"
      >
        {country}
      </Link>
    </li>
  ))}

<li
                className="mt-4 font-semibold text-black"
                onClick={() =>
                  setOpenDropdown(openDropdown === "testprep" ? null : "testprep")
                }
              >
                Test-Preperation ▾
              </li>
              {openDropdown === "testprep" &&
                ["IELTS & PTE"].map((exam, index) => (
                  <li key={index}>
                    <a href="/exam/" className="block px-4 py-2 text-black hover:bg-gray-100">
                      {exam}
                    </a>
                  </li>
                ))}

<li>
                <Link href="/contact" className="block text-lg font-semibold text-black">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

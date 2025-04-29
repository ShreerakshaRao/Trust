"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {Menu, X } from "lucide-react";
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoTwitter,
  } from "react-icons/io5";
  import { TiSocialLinkedin } from "react-icons/ti";
  import { FaYoutube } from "react-icons/fa";


const navLinks = [
  { name: "Sav", href: "/" },
  { name: "Blood Bank", href: "/categories" },
  { name: "Donation", href: "/products" },
  { name: "About Us", href: "/about" },
//   { name: "Contact Us", href: "/contact" },
];

const socialIcons = [
    <IoLogoFacebook key="facebook" />,
    <FaYoutube  key="youtube"/>,
    <TiSocialLinkedin key="linkedin" />,
    <IoLogoTwitter key="twitter" />,
    <IoLogoInstagram key="instagram" />,
  ];


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 md:px-16 py-4 bg-[#C19574]">
      <div className="flex justify-between items-center">

        <div className="flex items-center space-x-4 md:space-x-14 flex-shrink-0">
          <Image
            src="/Logo1.svg"
            alt="Company Logo"
            width={50}
            height={50}
          />
        </div>

        
        <div className="flex justify-center items-center space-x-4 text-base font-normal bg-[#1C1B1C] text-white w-[433px] h-[51px] rounded-3xl">
          {navLinks.map(({ name, href }) => (
            <Link key={name} href={href} className="px-4 py-2 rounded-3xl hover:bg-[#B17F59] transition-colors duration-200">
              {name}
            </Link>
          ))}

        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {socialIcons.map((icon, idx) => (
            <div key={idx} className="text-lg">
              {icon}
            </div>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
 
      {menuOpen && (
        <div className="mt-4 md:hidden flex flex-col items-center space-y-4 text-base text-center">
       

          {navLinks.map(({ name, href }) => (
            <Link key={name} href={href} className="hover:underline">
              {name}
            </Link>
          ))}

        </div>
      )}
    </header>
  )
}

export default Header
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  IoLogoFacebook,
} from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Sav", href: "/sav" },
  { name: "Blood Bank", href: "/bloodBank" },
  { name: "Conatct Us", href: "/contact" },
  { name: "Donation", href: "/donation" },
];

const socialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "https://www.facebook.com/sudhanandgroup/",
    key: "facebook",
  },
  {
    icon: <FaYoutube />,
    url: "https://www.youtube.com/channel/UCs7Y8FtmXpqWnxsdLW60HJA",
    key: "youtube",
  },
  {
    icon: <TiSocialLinkedin />,
    url: "https://www.linkedin.com/company/sudhanand-group/",
    key: "linkedin",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 md:px-16 py-4 bg-[#C19574]">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4 md:space-x-14 flex-shrink-0">
          <Link href="/"><Image src="/Logo1.svg" alt="Company Logo" width={50} height={50} /></Link>
        </div>

        <div className="flex justify-center items-center space-x-3 text-base font-normal bg-[#1C1B1C] text-white w-[520px] h-[51px] rounded-3xl">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="px-4 py-2 rounded-3xl hover:bg-[#B17F59] transition-colors duration-200"
            >
              {name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          {socialLinks.map(({ icon, url, key }) => (
            <Link
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              {icon}
            </Link>
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
  );
};

export default Header;

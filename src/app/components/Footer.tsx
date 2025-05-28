"use client";

import React from "react";
import Image from "next/image";
import {
  IoLocationSharp,
  IoLogoFacebook,
  IoMail,
} from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {

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
  

  return (
    <footer className="px-6 md:px-30 pt-15 pb-5 space-y-3 bg-[#C19574] overflow-x-hidden max-w-full">
      <div className="space-y-7 w-full flex flex-col md:flex-row md:items-start gap-8 justify-between items-center">
        <div className="flex-shrink-0">
          <Image src="/Logo2.svg" alt="Company Logo" width={130} height={130} />
        </div>

        {/* <div className="flex flex-col sm:flex-row sm:space-x-12 gap-8 sm:gap-16">
          {navLinks.map(({ title, links }) => (
            <div key={title} className="flex-1">
              {" "}
              <h3 className="text-xl font-medium mb-2">{title}</h3>
              <div className="space-y-2 text-base">
                {links.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="block hover:underline"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        <div className="flex justify-center items-center space-x-15 flex-wrap py-10">
          <div className="flex items-center space-x-3">
            <IoLocationSharp />
            <div className="text-sm font-normal">
              Sy. No. 59, 3rd Floor, Dakshina Murthy Towers, Devanooru,
              <br />
              Rajeevnagara 2nd Stage, Udayagiri, Mysore 570019.
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <IoIosCall />
            <div className="text-sm font-normal">+91 7259512983</div>
          </div>

          <div className="flex items-center space-x-3">
            <IoMail />
            <div className="text-sm font-normal">info@smt.help</div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-[#81522E]" />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        <div className="text-sm font-normal space-x-4 sm:space-x-10 flex">
          <div>Privacy Policy</div>
          <div>Disclaimer</div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <span>Social Media</span>
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

        <div className="text-sm font-normal text-center">
          Copyright © 2025. All rights are reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import HeroSection from "./HeroSection";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.clientWidth;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
     <main className="bg-[#C19574] overflow-hidden">
      <div>
        <HeroSection
          backgroundVectorSrc="/Vector.svg"
          imageSrc="/Img1.svg"
          heading="Dr. M. D. Sachidananda Murthy Memorial Educational Trust"
          subheading="By Dr. M. D. Sachidananda Murthy Memorial Educational Trust. An innovative plan to assist the vulnerable population during this crisis"
        />
      </div>

<div className="rounded-4xl bg-white">
      <div className="flex flex-col relative min-h-screen mx-70 pt-25">
      <Link href="/sav">
        <div className="flex space-x-20 cursor-pointer">
          <div className="max-w-md space-y-5">
            <div className="font-medium text-3xl font-serif">
              Sudhanand Arogya Vahini (SAV)
            </div>
            <div className="font-normal text-lg">
              Transforming Rural Healthcare, One Life at a Time. During the
              COVID-19 crisis, access to healthcare became increasingly
              difficult due to limited infrastructure and medical resources. SAV
              bridges this gap by deploying fully equipped mobile healthcare
              units, ensuring no one is left behind in accessing critical
              healthcare.
            </div>
          </div>
          <div>
            <Image
              src="/SavImg.svg"
              alt="Company Logo"
              width={400}
              height={480}
            />
          </div>
        </div>
      </Link>
        <div className="flex space-x-20">
          <div className="absolute top-[50%] left-0">
            <Image
              src="/ApproachImg.svg"
              alt="Company Logo"
              width={400}
              height={480}
              className=""
            />
          </div>
          <div className="max-w-md space-y-5 ml-[500px] mt-56">
            <div className="font-medium text-3xl font-serif">Our Approach</div>
            <ul className="list-disc font-normal text-lg">
              <li>
                Mobile Healthcare Units – Staffed with doctors and equipped with
                diagnostic tools and emergency response systems.
              </li>
              <li>
                Community Engagement – Conducting health awareness drives and
                educational programs.
              </li>
              <li>
                Real-Time Medical Care – Immediate diagnosis, treatment, and
                follow-up care.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="m-20 flex space-x-10 justify-center">
        <Card
          title="600,000+ Lives Touched"
          content="From medical consultations to life-saving treatments"
          className="w-[400px] h-[320px]"
        />
        <Card
          title="22 Districts Covered"
          content="Reaching even the most remote villages"
          className="w-[400px] h-[320px]"
        />
        <Card
          title="35,000+ Surgeries Performed"
          content="Timely interventions improving survival rates"
          className="w-[400px] h-[320px]"
        />
      </div>

      <div className="relative w-full overflow-hidden pb-30">
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x scroll-smooth no-scrollbar w-full"
        >
          <div className="relative min-w-full h-[640px] snap-start">
            <button
              className="absolute cursor-pointer right-4 top-1/2 z-30 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-2 shadow-md hover:bg-opacity-90"
              onClick={() => scrollTo(1)}
            >
              <ChevronRight size={28} />
            </button>

            <Image
              src="/CardImg1.jpg"
              alt="Card image 1"
              fill
              className="object-cover w-full h-full rounded-4xl"
            />
            <div className="absolute inset-0 flex flex-col justify-between text-white text-left px-16 py-20 z-10">
              <div>
                <div className="text-6xl font-normal mb-8 font-serif">
                  Get Involved
                </div>
                <div className="text-2xl font-normal max-w-2xl">
                  Join as a Volunteer, or Partner – Support healthcare by giving
                  time, funds, or expertise. Help improve lives and expand
                  access to quality care!
                </div>
              </div>
              <div>
                <Link href="/contact">
                  <button className="px-6 py-3 bg-[#C19574] text-white rounded-3xl text-lg hover:opacity-90 cursor-pointer">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-w-full h-[640px] snap-start">
            <button
              className="absolute cursor-pointer left-4 top-1/2 z-30 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-2 shadow-md hover:bg-opacity-90"
              onClick={() => scrollTo(0)}
            >
              <ChevronLeft size={28} />
            </button>

            <Image
              src="/CardImg2.jpg"
              alt="Card image 2"
              fill
              className="object-cover w-full h-full rounded-4xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000066] to-[#000000cc] rounded-4xl z-10" />
            <div className="absolute inset-0 z-20 flex flex-col justify-between text-[#FFF7F0] text-left px-16 py-20">
              <div>
                <div className="text-6xl font-normal mb-8 font-serif">
                  Donate Now
                </div>
                <div className="text-2xl font-normal max-w-2xl">
                  Your support can fund treatments, provide essential medicines,
                  and improve healthcare access, ensuring life-saving care for
                  those in need. Make a difference!
                </div>
              </div>
              <div>
                <Link href="/donation">
                  <button className="px-6 py-3 bg-[#C19574] text-white rounded-3xl text-lg hover:opacity-90 cursor-pointer">
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </main>
    </>
  );
};

export default Home;

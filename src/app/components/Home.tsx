"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroSection from "./HeroSection";
import Card from "./Card";

const Home = () => {
  return (
    <>
      <HeroSection
        backgroundVectorSrc="/Vector.svg"
        imageSrc="/Img1.svg"
        heading="Dr. M. D. Sachidananda Murthy Memorial Educational Trust"
        subheading="By Dr. M. D. Sachidananda Murthy Memorial Educational Trust. An innovative plan to assist the vulnerable population during this crisis"
      />

      <div className="flex flex-col relative min-h-screen mx-70 my-25">
        <div className="flex space-x-20">
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
    </>
  );
};

export default Home;

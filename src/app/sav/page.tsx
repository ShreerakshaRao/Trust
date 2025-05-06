"use client";

import React from "react";
import HeroSection from "../components/HeroSection";
import Image from "next/image";
import Card from "../components/Card";

const Page = () => {
  return (
    <>
      <main className="bg-[#C19574] overflow-hidden">
        <div>
          <HeroSection
            backgroundVectorSrc="/Vector.svg"
            imageSrc="/SavImg1.svg"
            heading="Sudhanand Arogya Vahini (SAV)"
            subheading="SAV closes this gap by deploying fully equipped mobile healthcare units, guaranteeing that everyone has access to essential medical care"
          />
        </div>

        <div className="p-45 rounded-4xl bg-white">
          <div>
            <div className="flex justify-between">
              <div className="flex flex-col space-y-6 max-w-xl">
                <span className="text-3xl font-medium font-serif">
                  Our Story
                </span>
                <span className="font-medium text-2xl">
                  SAV was founded with the vision of equitable healthcare access
                  for rural communities
                </span>
                <span className="font-normal text-2xl">
                  The lack of medical infrastructure in these regions often
                  turns minor illnesses into life-threatening conditions. SAV’s
                  mobile units bring healthcare directly to the people, reducing
                  dependency on distant hospitals and improving survival rates.
                </span>
              </div>
              <div>
                <Image
                  src="/Img4.svg"
                  alt="Company Logo"
                  width={400}
                  height={480}
                />
              </div>
            </div>
          </div>

          <div className="flex my-30 space-x-12">
            <Card
              title="Mission"
              content="To deliver accessible, affordable, and high-quality healthcare to underserved communities through mobile units and outreach programs"
              className="w-[560px] h-[450px]"
            />
            <Card
              title="Vision"
              content="A self-sufficient healthcare ecosystem where no one is deprived of timely medical care due to financial or geographic barriers"
              className="w-[560px] h-[450px]"
            />
          </div>

          <div className="font-medium text-3xl font-serif text-center">
            Services We Provide
          </div>

          <div>
            <div className="flex text-2xl justify-between border-b border-[#C9C6C5] py-20 items-center">
              <span className="font-semibold">Diagnostic Services</span>
              <span className="font-normal max-w-2xl">
                On-site testing enables rapid detection of infections, chronic
                diseases, and risks through portable diagnostics, ensuring early
                treatment, convenience, and better care
              </span>
            </div>

            <div className="flex text-2xl justify-between border-b border-[#C9C6C5] py-20 items-center">
              <span className="font-semibold">Treatment</span>
              <span className="font-normal max-w-2xl">
                Immediate care provides swift diagnosis and treatment for acute
                and chronic conditions, ensuring timely relief, preventing
                complications, and enhancing patient outcomes
              </span>
            </div>

            <div className="flex text-2xl justify-between border-b border-[#C9C6C5] py-20 items-center">
              <span className="font-semibold">Emergency Care</span>
              <span className="font-normal max-w-2xl">
                First aid ensures rapid response to injuries or medical issues,
                while emergency transport swiftly moves patients to partner
                hospitals for advanced care and treatment
              </span>
            </div>

            <div className="flex text-2xl justify-between border-b border-[#C9C6C5] py-20 items-center">
              <span className="font-semibold">Health Education</span>
              <span className="font-normal max-w-2xl">
                Community workshops educate on hygiene, nutrition, and disease
                prevention, promoting healthier lifestyles, reducing illness
                risks, and empowering proactive well-being
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;

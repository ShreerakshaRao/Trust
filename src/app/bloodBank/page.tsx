"use client";

import Image from "next/image";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";

const Page = () => {
  return (
    <>
      <main className="bg-[#C19574] overflow-hidden">
        <div>
          <HeroSection
            backgroundVectorSrc="/Vector.svg"
            imageSrc="/BloodImg.svg"
            heading="CurePlus Blood Bank"
            subheading="Saving lives is its own reward, but at CurePlus, we like to thank our donors with  something special."
            contentClassName="max-w-md"
          />
        </div>

        <div className="p-45 rounded-4xl bg-white">
          <div>
            <div className="flex justify-between">
              <div className="flex flex-col space-y-6 max-w-xl">
                <span className="text-3xl font-medium font-serif">
                  Saving Lives, One Donation at a Time
                </span>
                <span className="font-medium text-2xl">
                  Donate today—because every drop counts in making a difference!
                </span>
                <span className="font-normal text-2xl">
                  Welcome to CurePlus Blood Bank, a dedicated platform
                  connecting generous donors with patients in urgent need. Your
                  blood donation has the power to save lives, support critical
                  medical treatments, and bring hope to families. Join us in our
                  mission to ensure a steady, lifesaving blood supply.
                </span>
              </div>
              <div>
                <Image
                  src="/Img2.svg"
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
              content="We aim to recruit 30,000 blood donors across the district by 2026, ensuring a steady blood supply for emergencies and treatments. Join us in saving lives—your donation can make a real difference!"
              className="w-[560px] h-[450px]"
            />
            <Card
              title="Vision"
              content="We strive to build a sustainable, compassionate blood donation ecosystem, empowering individuals to save lives while fostering a culture of giving, unity, and care in the community"
              className="w-[560px] h-[450px]"
            />
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col space-y-10">
              <span className="font-medium text-3xl font-serif text-center">
                About Us
              </span>
              <span>
                <Image
                  src="/Img3.svg"
                  alt="Company Logo"
                  width={400}
                  height={562}
                />
              </span>
            </div>

            <div className="font-normal text-2xl max-w-xl">
              Welcome to CurePlus Blood Bank, an initiative by Dr. M. D.
              Sachidananda Murthy Memorial Educational Trust, committed to
              saving lives through an advanced and accessible blood storage and
              distribution network. Located in Mysuru, Karnataka, CurePlus Blood
              Bank has the capacity to store 2,000 blood units, supporting
              CurePlus Hospitals across rural Karnataka. Our Sudhanand Arogya
              Vahinis mobile pathology labs and health centers ensure the safe
              and timely transportation of blood and its components to those in
              need. To further improve accessibility, we have established
              Storage Centres within select CurePlus Hospitals, ensuring that
              even the most remote regions have access to life-saving blood
              services without the need to travel to urban areas. CurePlus Blood
              Bank is committed to ensuring a steady supply of safe blood for
              those in need. We work with donors, hospitals, and organizations
              to facilitate life-saving donations. With a strong network and a
              dedicated team, we strive to bridge the gap between those who can
              give and those who need it most.
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;

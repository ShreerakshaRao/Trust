"use client";

import Image from "next/image";

interface HeroSectionProps {
  backgroundColor?: string;
  backgroundVectorSrc: string;
  imageSrc: string;
  imageAlt?: string;
  heading: string;
  subheading?: string;
  contentClassName?: string;
}

export default function HeroSection({
  backgroundColor = "#C19574",
  backgroundVectorSrc,
  imageSrc,
  imageAlt = "Image",
  heading,
  subheading,
  contentClassName,
}: HeroSectionProps) {
  return (
    <div className={`relative bg-[${backgroundColor}] py-30 overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundVectorSrc}
          alt="Background Vector"
          fill
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 px-20">
        <div className="flex justify-between items-start">
        <div className={`${contentClassName ?? "max-w-3xl"} space-y-5`}>
            <h1 className="text-6xl font-semibold font-serif leading-[1.3]">
              {heading}
            </h1>
            <p>{subheading}</p>
          </div>

          <div className="flex-shrink-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

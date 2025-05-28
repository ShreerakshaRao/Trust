"use client";

import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [, setResponseMessage] = useState("");

  //   const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(
          "Failed to send the message. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred while sending the message.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <main className="bg-[#C19574] overflow-hidden">
        <div>
          <HeroSection
            backgroundVectorSrc="/Vector.svg"
            imageSrc="/ContactImg.svg"
            heading="Here to Help. Reach Out with Confidence."
            contentClassName="max-w-2xl"
          />
        </div>

        <div className="px-45 rounded-4xl bg-[#FFF7F0] py-25">
          <div className="font-normal text-3xl text-center font-serif">
            We’d love to hear from you—whether you have questions,
            <br /> ideas, or a desire to join us in creating lasting change.
          </div>

          <div
            className="lg:mx-5 lg:mt-20 my-2 space-y-5 flex flex-col lg:flex-row w-full max-w-full overflow-x-hidden 
  lg:w-[1300px] h-auto lg:h-[625px] bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.25)] rounded-xl "
          >
            <div className="w-full lg:basis-[60%]">
              <div className="w-full max-w-[95%] mx-auto space-y-7 py-10 px-4 sm:px-6">
                <form className="space-y-10" onSubmit={handleSubmit}>
                  <div className="relative w-full">
                    <label
                      htmlFor="name"
                      className={`block mb-1 text-sm font-medium transition-colors ${
                        formData.name ? "text-[#B17F59]" : "text-gray-500"
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 outline-none border-b-2 transition-colors ${
                        formData.name
                          ? "border-[#B17F59]"
                          : "border-[#939090] text-gray-500"
                      }`}
                    />
                  </div>

                  <div className="relative w-full">
                    <label
                      htmlFor="email"
                      className={`block mb-1 text-sm font-medium transition-colors ${
                        formData.email ? "text-[#B17F59]" : "text-gray-500"
                      }`}
                    >
                      Email ID
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 outline-none border-b-2 transition-colors ${
                        formData.email
                          ? "border-[#B17F59]"
                          : "border-[#939090] text-gray-500"
                      }`}
                    />
                  </div>

                  <div className="relative w-full">
                    <label
                      htmlFor="message"
                      className={`block mb-1 text-sm font-medium transition-colors ${
                        formData.message ? "text-[#B17F59]" : "text-gray-500"
                      }`}
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message here"
                      className={`w-full p-3 outline-none border-b-2 transition-colors ${
                        formData.message
                          ? "border-[#B17F59]"
                          : "border-[#939090] text-gray-500"
                      }`}
                      rows={6}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={
                      loading ||
                      !formData.name ||
                      !formData.email ||
                      !formData.message
                    }
                    className="w-full bg-[#B17F59] text-white p-3 cursor-pointer rounded-3xl"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            <div className="bg-[#81522E] rounded-xl text-white w-full max-w-full lg:basis-[40%] sm:m-6 sm:px-10 px-0 m-0 space-y-12 relative overflow-hidden">
              <div className="mt-10 max-w-[90%] mx-auto">
                <div className="font-medium text-xl">Mail Us</div>
                <div className="font-normal text-sm">
                  Mail us your query - we will reply within 48 hours
                </div>
                <div className="flex space-x-2 font-medium text-base items-center pt-3 break-words">
                  <IoMail />
                  <span>info@smt.help</span>
                </div>

                <div className="mt-10">
                  <div className="font-medium text-xl">Call Us</div>
                  <div className="font-normal text-sm">
                    Call our team Mon-Sat from 9am to 7pm
                  </div>
                  <div className="flex space-x-2 font-medium text-base items-center pt-3 break-words">
                    <IoIosCall />
                    <span>+91 7259512983</span>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="font-medium text-xl">Visit Us</div>
                  <div className="font-normal text-sm">
                    Visit our office Mon-Sat from 9am to 8pm
                  </div>
                  <div className="flex space-x-2 font-medium text-base items-center pt-3 break-words">
                    <IoLocationSharp />
                    <span>
                      Sy. No. 59, 3rd Floor, Dakshina Murthy 
                      <br /> Towers, Devanooru, Rajeevnagara 2nd 
                      <br />Stage, Udayagiri, Mysore 570019.
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0">
                <Image
                  src="/Img5.svg"
                  alt="Decorative"
                  width={88}
                  height={88}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Typography } from "@mui/material";
import Image from "next/image";
import faqs from "@/mock/Faqs";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:px-6 lg:px-8 bg-[#fdf8f5]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 bg-[#fdf8f5]">
        <div className="flex items-center gap-10">
          <Typography variant="h2">
            Q&A
            <span className="absolute left-0 bottom-0 w-[80px] h-[4px] bg-purple-700 rounded-full" />
          </Typography>
          <Image
            src="/images/FAQ.png"
            alt="Saloony about"
            width={50}
            height={20}
          />
        </div>
        <div className="flex flex-col items-center font-inter px-4 md:px-16 lg:px-32 py-10">
          <div className="text-center mb-10 w-full">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <div className="w-full h-[2px] bg-gray-300 mx-auto rounded-full" />
          </div>
          <div className="w-full max-w-4xl divide-y divide-gray-300">
            {faqs.map((item, index) => (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left text-gray-800 text-lg font-semibold"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <p
                    id={`faq-${index}`}
                    className="mt-3 text-base text-gray-600 leading-relaxed"
                  >
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;

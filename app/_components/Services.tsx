'use client';

import { useState } from 'react';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

type Service = {
  title: string;
  image: string;
  description: string;
};
const services: Service[] = [
  {
    title: 'Barber',
    image: '/images/Services.jpg',
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consequat. Duis aute irure dolor  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui um.qui officia deserunt est laborum.",
  },
  {
    title: 'Hairdresser',
    image: '/images/Services.jpg',
    description:
      'Haircuts, color, and treatments with top-tier hairdressers.',
  },
  {
    title: 'Nails',
    image: '/images/Services.jpg',
    description: 'Luxurious manicures and pedicures with hygiene-focused care.',
  },
];

const Services=()=> {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = services[currentIndex];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-12 sm:px-6 lg:px-8 bg-[#fdf8f5]">
    <div className="max-w-7xl mx-auto flex flex-col gap-5 ">
      <div className="flex items-center  gap-5">
            <h2 className="text-[50px] font-bold font-inter text-gray-900 relative inline-block">
            Main Services
            <span className="absolute left-0 bottom-0 w-[80px] h-[4px] bg-purple-700 rounded-full" />
          </h2>

            <Image
                src="/images/serviceslogo.png"
                alt="Saloony about"
                width={50}
                height={20}
                className="border-2 rounded-lg"
        />
        </div>

      <div className="flex gap-2 ">
        <div className='flex flex-col mt-10'>
          <Image
                src={current.image}
                alt={current.title}
                width={360}
                height={360}
                />
    
      <div className="flex justify-center mt-5 gap-8">
          <IconButton
          onClick={prev}
          disableRipple
          className="!w-10 !h-10 !rounded-full !border !border-gray-400 bg-[#fdf8f5]  hover:!bg-gray-200 transition duration-200 flex items-center justify-center"
        >
          <ArrowBackIosNew fontSize="small" />
        </IconButton>

        <IconButton
          onClick={next}
          disableRipple
          className="!w-10 !h-10 !rounded-full !border !border-gray-400 bg-[#fdf8f5]  hover:!bg-gray-200 transition duration-200 flex items-center justify-center"
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>

    </div>

        </div>
       <div className="flex flex-col items-center gap-4">
       <div className="relative w-[246px] h-[54px] flex items-center justify-center">
        <p className="text-[35px] text-center">{current.title}</p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50px] h-[3px] bg-purple-400 rounded-full" />
      </div>

        <p  className="font-inter font-normal text-[28px] leading-[100%] text-gray-600 max-w-[600px] ml-[50px]">
          {current.description}
        </p>
      </div>

      </div>
   </div>
    </section>
  );
}

export default Services;

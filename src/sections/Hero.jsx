import React, { useState, useCallback } from "react";
import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  const handleImageChange = useCallback(
    (newImg) => {
      if (newImg !== bigShoeImg) {
        setBigShoeImg(newImg);
      }
    },
    [bigShoeImg]
  );

  return (
    <section
      id="home"
      className="w-full min-h-screen bg-[#111827] py-10 overflow-hidden"
      aria-label="Hero section showcasing new arrivals and featured Nike shoes"
    >
      <div className="max-container flex flex-col md:flex-row items-center justify-center px-5 sm:px-8 lg:px-16">
        {/* Left Content */}
        <div className="w-full md:w-2/5 flex flex-col justify-center items-start text-left space-y-5">
          <p className="text-[1.15rem] sm:text-[2.15rem] text-coral-red font-montserrat font-semibold">
            Our Summer Collections
          </p>

          <h1 className="text-[2.5rem] sm:text-[2.95rem] md:text-[3.4rem] lg:text-[3.9rem] xl:text-[4.35rem] font-palanquin font-bold leading-tight tracking-tight text-white">
            <span className="relative inline-block">
              The New Arrival
              <span className="absolute inset-0 bg-white opacity-10 rounded-md -z-10" />
            </span>
            <br />
            <span className="inline-block mt-2 text-coral-red">Nike</span> Shoes
          </h1>

          <p className="text-base sm:text-[1.10rem] leading-7 text-slate-gray font-montserrat sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>

          <Button
            label="Shop now"
            iconURL={arrowRight}
            aria-label="Shop now for Nike arrivals"
          />

          <ul className="flex flex-wrap gap-x-3 gap-y-4 justify-start items-center text-center text-slate-gray mt-3">
            {statistics.map(({ value, label }) => (
              <li key={label} className="min-w-[80px]">
                <p className="text-[1.25rem] sm:text-[1rem] lg:text-[2.2rem] font-bold font-palanquin text-white">
                  {value}
                </p>
                <p className="text-xs sm:text-sm font-montserrat leading-snug">
                  {label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-3/5 flex flex-col items-center justify-start pt-6 md:pt-0 relative">
          <img
            src={bigShoeImg}
            alt="Selected Nike shoe"
            className="mb-10 md:mb-14 w-[85%] max-w-[280px] sm:w-[62%] sm:max-w-[320px] md:w-[82%] md:max-w-[420px] lg:w-[492px] lg:h-[502px] object-contain transition-transform duration-300 ease-in-out hover:scale-100 hover:shadow-lg rounded-lg ml-[2%]"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />

          {/* Mobile Carousel */}
          <ul
            className="flex gap-4 mt-6 sm:hidden px-2"
            role="list"
            aria-label="Shoe selection carousel mobile"
          >
            {shoes.map((imgURL, idx) => (
              <li
                key={idx}
                className="bg-[#1f2937] rounded-xl p-[6px] min-w-[80px]"
              >
                <ShoeCard
                  imgURL={imgURL}
                  bigShoeImg={bigShoeImg}
                  changeBigShoeImage={handleImageChange}
                />
              </li>
            ))}
          </ul>

          {/* Desktop Carousel */}
          <ul
            className="hidden sm:flex flex-wrap justify-center items-center w-full max-w-3xl absolute bottom-6 left-1/2 transform -translate-x-1/2 gap-4"
            role="list"
            aria-label="Shoe selection carousel desktop"
          >
            {shoes.map((imgURL, idx) => (
              <li key={idx} className="bg-[#1f2937] rounded-xl p-1">
                <ShoeCard
                  imgURL={imgURL}
                  bigShoeImg={bigShoeImg}
                  changeBigShoeImage={handleImageChange}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);

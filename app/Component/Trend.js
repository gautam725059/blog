import React from "react";
import Image from "next/image";
import car2 from "../assest/image/car2.jpeg";
import ad from "../assest/image/ad.jpg";
import ad2 from "../assest/image/car2.jpeg"; // replace this with another ad image

const Trend = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-[90%] mx-auto px-4 my-10 gap-10">
      {/* ==== Left Section: Blog ==== */}
      <div className="flex-1">
        <p className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          Latest Blog
        </p>

        <Image
          src={car2}
          alt="car"
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl mb-6 shadow-md"
          priority
        />

        <p className="mb-3 text-gray-600 text-sm md:text-base">
          By <span className="text-red-600 font-medium">Johan Deo</span> | March 12, 2024
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug text-gray-900">
          Based on the image, the car appears to be a <br className="hidden md:block" /> Dodge
          Challenger SRT8.
        </h2>

        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          The Dodge Challenger SRT8 is a high-performance vehicle equipped with a 6.4-liter HEMI V8
          engine that produces 470 horsepower and 470 lb-ft of torque. The car can accelerate from 0
          to 60 mph in the high 4-second range and reach a top speed of up to 182 mph. Other
          features include a performance brake package with Brembo calipers and a race-inspired
          interior featuring an SRT-exclusive steering wheel and a system that provides instant
          feedback on acceleration, braking, and G-forces.
        </p>

        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold mt-6 transition-all shadow-md hover:shadow-lg">
          Read More
        </button>
      </div>

      {/* ==== Right Section: Advertisements ==== */}
      <div className="flex flex-col w-full lg:w-[30%] gap-8">
        {/* ---- Main Ad (Top) ---- */}
        <div className="relative overflow-hidden rounded-xl shadow-lg group">
          <Image
            src={ad}
            alt="Advertisement"
            className="w-full h-[450px] sm:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl"></div>

          {/* Sponsored Tag */}
          <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
            Sponsored
          </span>

          {/* Ad Buttons */}
          <div className="absolute top-3 right-3 flex gap-2">
            <button className="p-1.5 rounded-full bg-white/90 text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-400 transition">
              ℹ
            </button>
            <button className="p-1.5 rounded-full bg-white/90 text-red-500 hover:bg-red-500 hover:text-white border border-red-400 transition">
              ❌
            </button>
          </div>

          {/* Ad Text & CTA */}
          <div className="absolute bottom-6 left-0 w-full text-center px-4">
            <p className="text-white text-base md:text-lg font-semibold mb-2 drop-shadow">
              Get the best car deals of 2025 🚗
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white text-sm md:text-base font-semibold px-6 py-2 rounded-full transition shadow-md">
              Learn More
            </button>
          </div>
        </div>

        {/* ---- Secondary Ad (Bottom) ---- */}
        <div className="relative overflow-hidden rounded-xl shadow-lg group">
          <Image
            src={ad2}
            alt="Advertisement 2"
            className="w-full h-[230px] sm:h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl"></div>

          <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
            Sponsored
          </span>

          <div className="absolute bottom-4 left-0 w-full text-center px-4">
            <p className="text-white text-sm md:text-base font-medium mb-2 drop-shadow">
              Discover new car accessories 🛠️
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs md:text-sm font-semibold px-5 py-2 rounded-full transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;

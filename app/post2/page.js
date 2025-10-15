"use client";
import React from "react";
import Image from "next/image";
import car4 from "../assest/image/car4.jpeg";
import ad11 from "../assest/image/ad11.webp";
import ad12 from "../assest/image/ad12.webp";

const Post = () => {
  return (
    <div className="relative max-w-4xl mx-auto px-4 py-10 bg-gray-50 min-h-screen">
      {/* ======= Right Side Ad ======= */}
      <div className="hidden lg:flex fixed right-5 top-20 w-[200px] h-[700px] rounded-xl overflow-hidden shadow-md">
        <div className="relative w-full h-full">
          <Image
            src={ad11}
            alt="Right Ad"
            className="w-full h-full"
          />
          <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
            Sponsored
          </span>

          {/* Ad Buttons */}
          <div className="absolute top-3 right-3 flex gap-2">
            <button className="p-1.5 w-10 h-10 rounded-full bg-white/90 text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-400 transition">
              ℹ
            </button>
            <button className="p-1.5 w-10 h-10 rounded-full bg-white/90 text-red-500 hover:bg-red-500 hover:text-white border border-red-400 transition">
              ❌
            </button>
          </div>
        </div>
      </div>

      {/* ======= Left Side Ad ======= */}
      <div className="hidden lg:flex fixed left-5 top-20 w-[200px] h-[600px] rounded-xl overflow-hidden shadow-md">
        <div className="relative w-full h-full">
          <Image
            src={ad12}
            alt="Left Ad"
            className=" w-full h-full"
          />
          <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
            Sponsored
          </span>

          {/* Ad Buttons */}
          <div className="absolute top-3 right-3 flex gap-2">
            <button className="p-1.5 w-10 h-10 rounded-full bg-white/90 text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-400 transition">
              ℹ
            </button>
            <button className="p-1.5 w-10 h-10 rounded-full bg-white/90 text-red-500 hover:bg-red-500 hover:text-white border border-red-400 transition">
              ❌
            </button>
          </div>
        </div>
      </div>

      {/* ======= Blog Section ======= */}
      <div className="lg:mx-20">
        {/* ======= Blog Image ======= */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={car4}
            alt="Muscle Car"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* ======= Blog Content ======= */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-sm space-y-5">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            The Enduring Allure of the Modern Muscle Car
          </h1>

          <p className="text-gray-600 text-sm md:text-base">
            By{" "}
            <span className="text-red-600 font-semibold">Gautam Gupta</span> | March
            18, 2024
          </p>

          <hr className="border-gray-300 my-4" />

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            The image you've shared captures the essence of raw power and iconic
            design: a sleek, black muscle car, which appears to be a modern Dodge
            Challenger. This machine is more than just transportation; it's a
            statement, a nod to a golden age of American automotive engineering,
            updated for the 21st century.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-6">
            The Heart of the Beast: Performance and Presence
          </h2>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            What truly sets a muscle car apart is the sheer visceral experience
            it offers. The rumble of the engine, the sudden surge of acceleration,
            and the commanding presence on the road are unmatched. The dark color
            and blacked-out wheels on this particular model amplify its menacing,
            powerful aesthetic, suggesting a car that is both beautiful and
            untamed. It speaks to a driver who values performance, heritage, and
            undeniable curb appeal.
          </p>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            These vehicles represent a unique segment in the auto industry,
            catering to enthusiasts who want to feel a direct, mechanical
            connection to the machine they drive. They are the standard-bearers
            of American performance, carrying the torch passed down from the
            legendary models of the 60s and 70s, ensuring that the roar of the V8
            continues to echo on our roads. The modern muscle car is alive, well,
            and more formidable than ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;

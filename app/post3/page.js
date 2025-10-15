"use client";
import React, { useState } from "react";
import Image from "next/image";
import car3 from "../assest/image/car3.jpeg";
import ad11 from "../assest/image/ad11.webp";
import ad12 from "../assest/image/ad12.webp";

const Post3 = () => {
  const [showMobileAd1, setShowMobileAd1] = useState(true);
  const [showMobileAd2, setShowMobileAd2] = useState(true);

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-10 bg-gray-50 min-h-screen">

      {/* ======= Desktop Right Ad ======= */}
      <div className="hidden lg:flex fixed right-10 top-20 w-[200px] h-[700px] rounded-xl overflow-hidden shadow-md z-50">
        <Image src={ad11} alt="Right Ad" className="w-full h-full" />
        <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
          Sponsored
        </span>
      </div>

      {/* ======= Desktop Left Ad ======= */}
      <div className="hidden lg:flex fixed left-5 top-20 w-[200px] h-[600px] rounded-xl overflow-hidden shadow-md z-50">
        <Image src={ad12} alt="Left Ad" className="w-full h-full" />
        <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
          Sponsored
        </span>
      </div>

      {/* ======= Blog Section ======= */}
      <div className="lg:mx-20">

        {/* Blog Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={car3}
            alt="Dodge Challenger SRT"
            fill
            className="hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* ======= Mobile Ad 1 (Sticky Car ke niche) ======= */}
        {showMobileAd1 && (
          <div className="lg:hidden sticky top-20 mt-6 z-40">
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <Image src={ad11} alt="Mobile Ad 1" className="w-full h-[250px] object-cover" />
              <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
                Sponsored
              </span>
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="p-1.5 w-10 h-10 rounded-full bg-white/90 text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-400 transition">ℹ</button>
                <button
                  onClick={() => setShowMobileAd1(false)}
                  className="p-1.5 w-10 h-10 rounded-full bg-white/90 text-red-500 hover:bg-red-500 hover:text-white border border-red-400 transition"
                >
                  ❌
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Content */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-sm space-y-5">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            The Soul of American Muscle: An Intimate Look
          </h1>

          <p className="text-gray-600 text-sm md:text-base">
            By <span className="text-red-600 font-semibold">Gautam Gupta</span> | March 22, 2024
          </p>

          <hr className="border-gray-300 my-4" />

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            The image provided, rendered in stark black and white, offers a dramatic and intimate perspective&hellip;
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            The choice of black and white photography elevates the Challenger from a consumer product to a piece of industrial art&hellip;
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            It&apos;s a tribute to the legacy of muscle cars &mdash; vehicles that were always about unadulterated power and undeniable presence&hellip;
          </p>
        </div>

        {/* ======= Mobile Ad 2 (Sticky Bottom) ======= */}
        {showMobileAd2 && (
          <div className="lg:hidden sticky bottom-5 mt-10 z-40">
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <Image src={ad12} alt="Mobile Ad 2" className="w-full h-[250px] object-cover" />
              <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
                Sponsored
              </span>
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="p-1.5 w-10 h-10 rounded-full bg-white/90 text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-400 transition">ℹ</button>
                <button
                  onClick={() => setShowMobileAd2(false)}
                  className="p-1.5 w-10 h-10 rounded-full bg-white/90 text-red-500 hover:bg-red-500 hover:text-white border border-red-400 transition"
                >
                  ❌
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Post3;

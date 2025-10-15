"use client";
import React, { useState } from "react";
import Image from "next/image";
import dodge1 from "../assest/image/dodge1.jpeg";
import ad3 from "../assest/image/ad3.jpg";
import ad4 from "../assest/image/ad4.png";

const ReadDetailsPage = () => {
  const [showMobileAd1, setShowMobileAd1] = useState(true);
  const [showMobileAd2, setShowMobileAd2] = useState(true);

  return (
    <div className="relative flex justify-center bg-gray-50">

      {/* ======= Desktop Left Ad ======= */}
      <div className="hidden lg:flex fixed left-5 top-20 w-[200px] h-[600px] rounded-xl overflow-hidden shadow-md z-50">
        <Image src={ad4} alt="Left Ad" className="object-cover w-full h-full" />
        <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
          Sponsored
        </span>
      </div>

      {/* ======= Desktop Right Ad ======= */}
      <div className="hidden lg:flex fixed right-5 top-20 w-[200px] h-[600px] rounded-xl overflow-hidden shadow-md z-50">
        <Image src={ad3} alt="Right Ad" className="object-cover w-full h-full" />
        <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
          Sponsored
        </span>
      </div>

      {/* ======= Main Blog ======= */}
      <div className="max-w-4xl mx-auto px-4 py-10 overflow-y-auto">

        {/* Blog Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={dodge1}
            alt="Dodge Challenger"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* ======= Mobile Ad 1 (Car ke niche) ======= */}
        {showMobileAd1 && (
          <div className="lg:hidden sticky top-20 mt-6 z-40">
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <Image src={ad4} alt="Mobile Ad 1" className="w-full h-[250px] object-cover" />
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
        <div className="mt-8 space-y-5 bg-white p-6 rounded-xl shadow-sm">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Late-Night Legend: A Dodge Challenger Dominates the Urban Night
          </h1>

          <p className="text-gray-600 text-sm md:text-base">
            By <span className="text-red-600 font-semibold">Gautam Gupta</span> | March 12, 2024
          </p>

          <hr className="border-gray-300 my-4" />

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            The air crackles with unspoken energy. Illuminated by the neon glow
            of a late-night urban landscape, the Dodge Challenger sits, a coiled
            predator waiting to strike&apos;...
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            The clean, white exterior of the Challenger contrasts sharply with
            the deep blues and reds reflecting off the wet pavement...
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            The black racing stripe running over the twin-vent hood adds a
            classic, defiant touch, hinting at its legendary lineage&apos;...
          </p>
        </div>

        {/* ======= Mobile Ad 2 (Page Bottom) ======= */}
        {showMobileAd2 && (
          <div className="lg:hidden sticky bottom-5 mt-10 z-40">
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <Image src={ad3} alt="Mobile Ad 2" className="w-full h-[250px] object-cover" />
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

export default ReadDetailsPage;

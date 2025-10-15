"use client";
import React from "react";
import Image from "next/image";
import dodge1 from "../assest/image/dodge1.jpeg";
import ad3 from "../assest/image/ad3.jpg";
import ad4 from "../assest/image/ad4.png";

const ReadDetailsPage = () => {
  return (
    <div className="relative flex justify-center bg-gray-50">
      {/* ======= Left Ad (Fixed) ======= */}
      <div className="hidden lg:flex fixed left-5 top-20 w-[200px] h-[600px] rounded-xl overflow-hidden shadow-md">
        <Image
          src={ad4}
          alt="Left Ad"
          className="object-cover w-full h-full"
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

      {/* ======= Right Ad (Fixed) ======= */}
      <div className="hidden lg:flex fixed right-5 top-20 w-[200px] h-[600px] rounded-xl overflow-hidden shadow-md">
        <Image
          src={ad3}
          alt="Right Ad"
          className="object-cover w-full h-full"
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

      {/* ======= Main Blog (Scrollable) ======= */}
      <div className="max-w-4xl mx-auto px-4 py-10 overflow-y-auto">
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={dodge1}
            alt="Dodge Challenger"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="mt-8 space-y-5 bg-white p-6 rounded-xl shadow-sm">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Late-Night Legend: A Dodge Challenger Dominates the Urban Night
          </h1>

          <p className="text-gray-600 text-sm md:text-base">
            By{" "}
            <span className="text-red-600 font-semibold">Gautam Gupta</span> | March
            12, 2024
          </p>

          <hr className="border-gray-300 my-4" />

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            The air crackles with unspoken energy. Illuminated by the neon glow
            of a late-night urban landscape, the Dodge Challenger sits, a coiled
            predator waiting to strike. This isn't just a car; it's a statement,
            a modern muscle icon that refuses to be ignored.
          </p>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            The clean, white exterior of the Challenger contrasts sharply with
            the deep blues and reds reflecting off the wet pavement, a vivid
            tableau of the city after dark. The aggressive stance, marked by its
            widebody fenders and blacked-out wheels, speaks volumes about the
            raw power lurking beneath the hood. You can almost hear the deep
            rumble of the engine, a sound that is music to the ears of any
            performance enthusiast.
          </p>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            The black racing stripe running over the twin-vent hood adds a
            classic, defiant touch, hinting at its legendary lineage. Parked
            subtly in front of what appears to be a late-night establishment, the
            scene perfectly captures the spirit of Dodge performance — bold,
            unrelenting, and eternally cool. It's a snapshot of a muscle car in
            its natural habitat, ready to claim the empty streets.
          </p>
        </div>
      </div>
      
    </div>
    
  );
};

export default ReadDetailsPage;

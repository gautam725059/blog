"use client";
import React, { useState } from "react";
import Image from "next/image";
import car2 from "../assest/image/car2.jpeg";
import ad11 from "../assest/image/ad11.webp";
import ad12 from "../assest/image/ad12.webp";

const Lblog = () => {
  const [showLeftAd, setShowLeftAd] = useState(true);
  const [showRightAd, setShowRightAd] = useState(true);
  const [showMobileAd1, setShowMobileAd1] = useState(true);
  const [showMobileAd2, setShowMobileAd2] = useState(true);

  return (
    <div className="relative flex justify-center bg-gray-50">

      {/* ======= Desktop Left Ad ======= */}
      {showLeftAd && (
        <div className="hidden lg:flex fixed left-5 top-20 w-[200px] h-[600px] rounded-xl overflow-hidden shadow-md z-50">
          <Image src={ad12} alt="Left Ad" className="object-cover w-full h-full" />
          <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
            Sponsored
          </span>
          <div className="absolute top-3 right-3 flex  gap-2">
            <button className="p-1.5 w-8 h-8 rounded-full bg-white/90 text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-400 transition text-sm">
              ℹ
            </button>
            <button
              onClick={() => setShowLeftAd(false)}
              className="p-1.5 w-8 h-8 rounded-full bg-white/90 text-red-500 hover:bg-red-500 hover:text-white border border-red-400 transition text-sm"
            >
              ❌
            </button>
          </div>
        </div>
      )}

      {/* ======= Desktop Right Ad ======= */}
      {showRightAd && (
        <div className="hidden lg:flex fixed right-5 top-20 w-[200px] h-[600px] rounded-xl overflow-hidden shadow-md z-50">
          <Image src={ad11} alt="Right Ad" className="object-cover w-full h-full" />
          <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
            Sponsored
          </span>
          <div className="absolute top-3 right-3 flex  gap-2">
            <button className="p-1.5 w-8 h-8 rounded-full bg-white/90 text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-400 transition text-sm">
              ℹ
            </button>
            <button
              onClick={() => setShowRightAd(false)}
              className="p-1.5 w-8 h-8 rounded-full bg-white/90 text-red-500 hover:bg-red-500 hover:text-white border border-red-400 transition text-sm"
            >
              ❌
            </button>
          </div>
        </div>
      )}

      {/* ======= Blog Section ======= */}
      <div className="max-w-4xl mx-auto px-4 py-10 overflow-y-auto">

        {/* Blog Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={car2}
            alt="Dodge Challenger"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* ======= Mobile Ad 1 (Car ke niche) ======= */}
        {showMobileAd1 && (
          <div className="lg:hidden sticky top-20 mt-6 z-40">
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <Image src={ad11} alt="Mobile Ad 1" className="w-full h-[250px] object-cover" />
              <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
                Sponsored
              </span>
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="p-1.5 w-10 h-10 rounded-full bg-white/90 text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-400 transition">
                  ℹ
                </button>
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
            American Muscle Icon: The Dodge Challenger
          </h1>

          <p className="text-gray-600 text-sm md:text-base">
            By <span className="text-red-600 font-semibold">Gautam Gupta</span> | March 25, 2024
          </p>

          <hr className="border-gray-300 my-4" />

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            The image you&apos;ve shared captures the essence of classic American muscle: a Dodge Challenger.
            This isn&apos;t just a car; it&apos;s a statement, blending raw power with a nostalgic design that
            harks back to the golden age of performance vehicles.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            The particular model in the picture, with its sleek black paint job and bold twin blue racing stripes,
            screams high-performance style. The stripes aren&apos;t just for aesthetics; they are a timeless nod to
            racing heritage, often associated with powerful track-ready machines.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Under the hood, the Challenger is known for delivering thrilling performance, typically housing a powerful
            V8 engine that produces that signature, unmistakable muscle car growl. It stands proudly alongside its rivals,
            the Ford Mustang and the Chevrolet Camaro, cementing its place in the modern &quot;pony car&quot; war.
          </p>
        </div>

        {/* ======= Mobile Ad 2 (Bottom) ======= */}
        {showMobileAd2 && (
          <div className="lg:hidden sticky bottom-5 mt-10 z-40">
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <Image src={ad12} alt="Mobile Ad 2" className="w-full h-[250px] object-cover" />
              <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
                Sponsored
              </span>
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="p-1.5 w-10 h-10 rounded-full bg-white/90 text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-400 transition">
                  ℹ
                </button>
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

export default Lblog;

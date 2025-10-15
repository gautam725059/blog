"use client";
import React from "react";
import Image from "next/image";
import dodge2 from "../assest/image/dodge2.jpeg";

const Home = () => {
  return (
    <section id="Home">
      <div className="relative w-full h-[680px] overflow-hidden">
        <Image
          src={dodge2}
          alt="Car"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute top-1/2 left-16 -translate-y-1/2 text-white max-w-md">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Your Journey <br />
            Your Car <br />
            Your Way
          </h1>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum
            vel euismod aliquam. Amet ultrices neque augue consectetur purus
            phasellus. Ullamcorper lorem montes varius.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

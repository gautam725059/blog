"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dodge1 from "../assest/image/dodge1.jpeg";
import car4 from "../assest/image/car4.jpeg";
import car3 from "../assest/image/car3.jpeg";

const Post = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 min-h-screen w-full py-10">
      <div className="max-w-[90%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800 md:text-left">
          All Posts
        </h2>

        {/* ==== Post 1 ==== */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full mb-10 transition-all duration-300 hover:shadow-xl">
          <div className="md:w-[40%] w-full relative h-[220px] md:h-[250px]">
            <Image src={dodge1} alt="Post 1" fill className="object-cover" />
          </div>

          <div className="p-5 flex flex-col justify-between md:w-[60%]">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">
                A Review Of Cars With Advanced Infotainment Systems
              </h3>
              <div className="flex flex-wrap items-center text-gray-500 text-xs md:text-sm mb-3">
                <span>Dusten</span>
                <span className="mx-2 hidden sm:inline">•</span>
                <span>Jan 19, 2024</span>
                <span className="mx-2 hidden sm:inline">•</span>
                <span>3 Min Read</span>
              </div>
              <p className="text-gray-700 text-sm md:text-base line-clamp-3 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Consequat risus quis diam
                hendrerit. Interdum mattis in sed diam egestas metus at duis
                commodo.
              </p>
            </div>

            <button
              onClick={() => router.push("/readdeatilspage")}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm md:text-base rounded-md font-medium self-start mt-4 transition-all"
            >
              Read full article...
            </button>
          </div>
        </div>

        {/* ==== Post 2 ==== */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full mb-10 transition-all duration-300 hover:shadow-xl">
          <div className="md:w-[40%] w-full relative h-[220px] md:h-[250px]">
            <Image src={car4} alt="Post 2" fill className="object-cover" />
          </div>

          <div className="p-5 flex flex-col justify-between md:w-[60%]">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">
                The Future of Electric Vehicles in 2025
              </h3>
              <div className="flex flex-wrap items-center text-gray-500 text-xs md:text-sm mb-3">
                <span>Sophie</span>
                <span className="mx-2 hidden sm:inline">•</span>
                <span>Feb 10, 2024</span>
                <span className="mx-2 hidden sm:inline">•</span>
                <span>4 Min Read</span>
              </div>
              <p className="text-gray-700 text-sm md:text-base line-clamp-3 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis
                commodo sapien non orci cursus.
              </p>
            </div>

            <button
              onClick={() => router.push("/post2")}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm md:text-base rounded-md font-medium self-start mt-4 transition-all"
            >
              Read full article...
            </button>
          </div>
        </div>

        {/* ==== Post 3 ==== */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full mb-10 transition-all duration-300 hover:shadow-xl">
          <div className="md:w-[40%] w-full relative h-[220px] md:h-[250px]">
            <Image src={car3} alt="Post 3" fill className="object-cover" />
          </div>

          <div className="p-5 flex flex-col justify-between md:w-[60%]">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">
                Top 5 Sports Cars Under $50,000
              </h3>
              <div className="flex flex-wrap items-center text-gray-500 text-xs md:text-sm mb-3">
                <span>Alex</span>
                <span className="mx-2 hidden sm:inline">•</span>
                <span>Mar 5, 2024</span>
                <span className="mx-2 hidden sm:inline">•</span>
                <span>5 Min Read</span>
              </div>
              <p className="text-gray-700 text-sm md:text-base line-clamp-3 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Interdum mattis in sed diam
                egestas metus at duis commodo.
              </p>
            </div>

            <button
              onClick={() => router.push("/post3")}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm md:text-base rounded-md font-medium self-start mt-4 transition-all"
            >
              Read full article...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

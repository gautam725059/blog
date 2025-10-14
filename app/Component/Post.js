import React from "react";
import Image from "next/image";
import dodge1 from "../assest/image/dodge1.jpeg";
import car4 from "../assest/image/car4.jpeg";
import car3 from "../assest/image/car3.jpeg";

const Post = () => {
  const posts = [
    {
      id: 1,
      title: "A Review Of Cars With Advanced Infotainment Systems",
      author: "Dusten",
      date: "Jan 19, 2024",
      readTime: "3 Min Read",
      img: dodge1,
    },
    {
      id: 2,
      title: "A Review Of Cars With Advanced Infotainment Systems",
      author: "Dusten",
      date: "Jan 19, 2024",
      readTime: "3 Min Read",
      img: car4,
    },
    {
      id: 3,
      title: "A Review Of Cars With Advanced Infotainment Systems",
      author: "Dusten",
      date: "Jan 19, 2024",
      readTime: "3 Min Read",
      img: car3,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen w-full py-10">
      <div className="max-w-[90%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-black md:text-left">
          All Posts
        </h2>

        <div className="flex flex-col space-y-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full transition-all duration-300 hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="md:w-[40%] w-full relative h-[220px] md:h-[250px]">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col justify-between md:w-[60%]">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="flex flex-wrap items-center text-gray-500 text-xs md:text-sm mb-3">
                    <span>{post.author}</span>
                    <span className="mx-2 hidden sm:inline">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2 hidden sm:inline">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <p className="text-gray-700 text-sm md:text-base line-clamp-3 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Consequat risus quis
                    diam hendrerit. Interdum mattis in sed diam egestas metus at
                    duis commodo. Cursus quis cursus dignissim egestas sollicitudin
                    tristique quis.
                  </p>
                </div>

                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm md:text-base rounded-md font-medium self-start mt-4 transition-all">
                  Read full article...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;

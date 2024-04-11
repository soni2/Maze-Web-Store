"use client";

import { useState } from "react";
import Slide1 from "./Hero/slide1";
import Slide2 from "./Hero/slide2";
import Slide3 from "./Hero/slide3";
import Slide4 from "./Hero/slide4";
import Slide5 from "./Hero/slide5";

const colors = [
  { slide: <Slide1 /> },
  { color: "bg-blue-950", slide: <Slide2 /> },
  { color: "bg-green-950", slide: <Slide3 /> },
  { color: "bg-red-950", slide: <Slide4 /> },
  { color: "bg-purple-950", slide: <Slide5 /> },
];

export default function Hero() {
  const [color, setColor] = useState(0);

  // setTimeout(() => {
  //   if (color === colors.length - 1) {
  //     setColor(0);
  //   } else {
  //     setColor(color + 1);
  //   }
  // }, 3000);

  return (
    <section>
      <div
        className={`w-full min-h-[640px] duration-500 flex justify-center max-h-[800px] overflow-hidden ${colors[color].color}`}
      >
        {colors[color].slide}
      </div>
      {/* <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Summer Collection
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Introducing our vibrant and stylish summer collection. Get ready
              to shine with the latest trends.
            </p>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Shop Now
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
        <img
          alt="Hero"
          className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
          height="300"
          width="1270"
        />
      </div> */}
    </section>
  );
}

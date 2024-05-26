import Link from "next/link";
import React from "react";

export default function Slide2() {
  return (
    <div className=" flex flex-col md:grid md:grid-cols-2 max-w-[1800px] gap-12">
      <div
        src="/hero2.webp"
        alt="Hero"
        className="hidden md:flex  bg-[url('/hero2.webp')] bg-right-bottom bg-cover bg-no-repeat  mx-auto overflow-hidden object-cover w-full h-full"
      />
      <div
        alt="Hero"
        className="flex md:hidden bg-[url('/hero2-2.webp')] bg-contain bg-no-repeat bg-center overflow-hidden w-full h-3/4"
      />
      <div className="w-full pb-16 flex items-center text-center md:text-start md:items-start justify-center flex-col gap-8 justify-items-end">
        <div className="flex w-2/3">
          <h1 className="lg:leading-tighter text-3xl col-span-2 font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] duration-500">
            Style is a reflection of your attitude and personality
          </h1>
        </div>
        <div className="flex flex-col items-center md:items-start gap-8 w-2/3">
          <p className="w-full max-w-[700px] text-white md:text-xl">
            Discover exclusive offers on men&apos;s clothing and accessories
          </p>
          <div className="space-x-4">
            <a
              className="inline-flex h-9 items-center justify-center bg-gray-900 px-14 py-6 text-xl font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/products?category=mens"
              target="_blank"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

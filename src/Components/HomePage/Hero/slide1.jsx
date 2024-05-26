import Link from "next/link";
import React from "react";

export default function Slide1() {
  return (
    <div className=" flex flex-col md:grid md:grid-cols-2 max-w-[1800px] gap-12">
      <div
        src="/hero1.webp"
        alt="Hero"
        className="flex md:hidden overflow-hidden w-full h-3/4"
        style={{
          background: "url('/hero1-2.webp')",
          backgroundSize: "cover",
        }}
      />
      <div className="w-full pb-16 flex justify-end md:justify-center flex-col gap-8 items-center md:justify-items-end md:h-full duration-500">
        <div className="flex">
          <h1 className="lg:leading-tighter text-3xl col-span-2 font-bold text-center md:text-right tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] duration-500">
            Captivating Women&apos;s Wear
          </h1>
        </div>
        <div className="flex flex-col items-center md:items-end  gap-8 w-full">
          <p className="text-center md:text-right w-full mx-auto max-w-[700px] text-white md:text-xl">
            Exclusive deals waiting for you!
          </p>
          <div className="space-x-4">
            <a
              className="inline-flex h-9 items-center justify-center bg-gray-900 px-14 py-6 text-xl font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/products?category=womens"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
      <div
        src="/hero1.webp"
        alt="Hero"
        className="hidden md:flex mx-auto overflow-hidden object-cover w-full h-full"
        style={{ background: "url('/hero1.webp')" }}
      />
    </div>
  );
}

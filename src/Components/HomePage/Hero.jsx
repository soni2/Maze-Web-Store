"use client";

import { useEffect, useState } from "react";
import Slide1 from "./Hero/slide1";
import Slide2 from "./Hero/slide2";

const colors = [
  { color: "bg-[#9b8ac0]", slide: <Slide1 /> },
  { color: "bg-[#ceae89]", slide: <Slide2 /> },
];

export default function Hero() {
  // const number = Math.floor(Math.random() * 2);

  const [number, setNumber] = useState(undefined);

  useEffect(() => {
    function heroSection() {
      setNumber(Math.floor(Math.random() * 2));
    }

    heroSection();
  }, []);

  return number === undefined ? (
    <div className="min-w-full max-h-[850px] duration-300 bg-gradient-to-r from-$base-color via-$shine-color to-$base-color" />
  ) : (
    <section>
      <div
        className={`w-full min-h-[640px] duration-500 flex justify-center max-h-[900px] overflow-hidden ${colors[number].color} h-[850px] duration-500`}
      >
        {colors[number].slide}
      </div>
    </section>
  );
}

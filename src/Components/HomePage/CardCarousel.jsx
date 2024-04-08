"use client";

import { useState, useEffect } from "react";
import { products } from "@/Mocks/Products.json";

export function CardCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [card, setCard] = useState();
  const [cardSize, setCardSize] = useState(0);

  const itemsNumbers = [];

  function randomItems() {
    for (let index = 0; itemsNumbers.length < 15; index++) {
      const randomNumber = Math.ceil(Math.random() * products.length);

      if (!itemsNumbers.includes(randomNumber)) {
        itemsNumbers.push(randomNumber);
      }
    }
  }

  useEffect(() => {
    const cardContainer = document.getElementById("container");
    // setCardWith(cardContainer.scrollWidth - cardContainer.offsetWidth);
    setCardSize(cardContainer.scrollWidth / itemsNumbers.length);
  }, []);

  const handleNext = (e) => {
    setScrollPosition(scrollPosition + 228);
    console.log(scrollPosition);
  };
  const handlePrev = (e) => {
    setScrollPosition(scrollPosition - 228);

    console.log(scrollPosition);
  };

  const handleStartDraging = (e) => {
    const dragImage = new Image();
    dragImage.src = "";
    e.dataTransfer.setDragImage(dragImage, 0, 0);
  };
  const handleDraging = (e) => {
    const dragImage = new Image();
    dragImage.src = "";
    e.dataTransfer.setDragImage(dragImage, 0, 0);

    setScrollPosition(-e.nativeEvent.offsetX);
  };

  randomItems();

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8 ">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Most Visited Products
            </div> */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Discover our top-rated products
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore our best-selling items loved by our customers.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 w-full max-w-[1800px]">
        <ChevronLeftIcon
          className="text-[#adb5bd] h-6 w-6"
          onClick={handlePrev}
        />
        <div className="overflow-hidden">
          <div
            id="container"
            className="grid grid-flow-col gap-5"
            draggable={true}
            onDragStart={handleStartDraging}
            onDrag={handleDraging}
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {itemsNumbers.map((t) => (
              <div
                key={t}
                id="card"
                className="relative bg-[#48bfe3] p-4 rounded-md shadow-md min-w-52 h-80"
              >
                <img
                  alt="placeholder"
                  className="h-24 w-24"
                  height="100"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
            ))}
          </div>
        </div>
        <ChevronRightIcon
          className="text-[#adb5bd] h-6 w-6"
          onClick={handleNext}
        />
      </div>
      <div className="flex items-center justify-center space-x-1">
        {itemsNumbers.slice(0, -4).map((e, i) => (
          <div
            key={i}
            className="h-2 w-2 bg-[#adb5bd] rounded-full"
            onClick={() => setScrollPosition(cardSize * i)}
          />
        ))}
      </div>
    </div>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

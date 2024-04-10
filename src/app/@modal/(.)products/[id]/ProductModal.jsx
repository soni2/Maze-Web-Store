"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function ProductModal({
  title,
  thumbnail,
  images,
  description,
  price,
  rating,
  stocks,
}) {
  const [thumb, setThumb] = useState(thumbnail);

  const router = useRouter();
  return (
    <div className="relative p-0 w-11/12 md:w-2/3 lg:w-2/3 shadow-lg rounded-md bg-white max-w-screen-lg min-h-[450px] border-0 overflow-hidden">
      <div className="mt-3 grid grid-cols-4 grid-flow-col !m-0 items-center justify-center">
        <div className="max-h-[450px] col-span-2 flex items-center justify-center relative overflow-hidden">
          <img
            className="h-full absolute z-50"
            alt="Smartwatch"
            src={thumb}
            style={{ objectFit: "contain" }}
          />
          <div>
            <img
              className="min-h-full min-w-full block blur-lg"
              alt="Smartwatch"
              src={thumb}
              style={{
                objectFit: "cover",
                aspectRatio: "8/12",
              }}
            />
          </div>
        </div>
        <div className="mt-2 px-7 py-3 col-span-2 flex flex-col justify-between min-h-full">
          <div className="flex min-w-full justify-end">
            <button
              className="text-sm font-bold text-black "
              onClick={() => router.back()}
            >
              X
            </button>
          </div>
          <div className="flex">
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {title}
              </h3>
              <div className="flex">
                {[...Array(5)].map((star, index) => {
                  const currentRating = index + 1;

                  return (
                    <StarIcon
                      key={index}
                      className={`${
                        currentRating <= rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } h-5 w-5`}
                    />
                  );
                })}
              </div>
              <p className="text-4xl font-bold text-gray-900 mt-4">${price}</p>
              <div className="border-t-2 border-gray-200 mt-3" />
              <p className="text-gray-600 mt-3">{description}</p>
              <div className="mt-4">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="quantity"
                    >
                      QUANTITY
                    </label>
                    {/* <Input
                      className="ml-3 block w-16 pl-2 pr-7 py-2 border border-gray-300 rounded-md"
                      id="quantity"
                      min="1"
                      name="quantity"
                      type="number"
                    /> */}
                  </div>
                  {/* <Button className="mt-4">ADD TO CART</Button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {images?.map((image, index) => (
              <img
                alt="Smartwatch thumbnail"
                className="h-12 w-12 rounded-full border-2 border-blue-500 mx-1"
                src={image}
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                key={index}
                onMouseEnter={() => setThumb(image)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

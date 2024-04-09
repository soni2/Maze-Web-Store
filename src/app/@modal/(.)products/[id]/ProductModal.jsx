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
    <div className="relative p-0 border w-11/12 md:w-2/3 lg:w-2/3 shadow-lg rounded-md bg-white max-w-screen-lg min-h-[480px] border-0 overflow-hidden">
      <div className="mt-3 grid grid-flow-col !m-0">
        <div
          className="max-h-[450px] h-full"
          style={{
            aspectRatio: "10/12",
          }}
        >
          <Image
            className="max-h-full"
            alt="Smartwatch"
            height="200"
            src={thumb}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="mt-2 px-7 py-3">
          <div className="flex justify-between items-center">
            <button
              className="text-sm text-black"
              onClick={() => router.back()}
            >
              Close
            </button>
          </div>
          <div className="flex">
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {title}
              </h3>
              <div className="flex items-center">
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
              <Image
                alt="Smartwatch thumbnail"
                className="h-12 w-12 rounded-full border-2 border-blue-500 mx-1"
                height="50"
                src={image}
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width="50"
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

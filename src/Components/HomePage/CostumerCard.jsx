"use client";

import { useCart } from "@/Hooks/useCart";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function CostumerCard({ data }) {
  const [ratings, setRatings] = useState();
  const { baseUrl } = useCart();

  const getRatingsData = async () => {
    fetch(`${baseUrl}/api/ratings`)
      .then((res) => res.json())
      .then((res) => {
        return setRatings(res);
      });
  };

  useEffect(() => {
    getRatingsData();
  }, []);

  return (
    <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
      {ratings?.map((item, index) => (
        <div
          key={index}
          className="grid gap-3 relative border-solid content-between border-2 border-gray-200 px-4 py-5 h-full"
        >
          <FormatQuoteIcon className="h-40 w-full absolute -z-10 text-black/5 dark:text-white/10" />
          <div className="flex flex-col gap-2">
            <a href={`/products/${item.prod_id}`} target="_blank">
              <h1 className="font-bold text-xl">{item.product_title}</h1>
            </a>
            <div>
              {[...Array(5)].map((star, index) => {
                const rating = index + 1;

                return (
                  <StarIcon
                    key={index}
                    className={`${
                      rating <= item.rating
                        ? "text-yellow-400"
                        : "text-gray-400"
                    } text-md`}
                  />
                );
              })}
            </div>
            <h1 className="font-bold text-sm">{item.header}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.content}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <h3 className="font-bold uppercase text-xs text-gray-600">
              {item.users.user_name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

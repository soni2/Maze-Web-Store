"use client";

import { useQuery } from "@/Hooks/useQuery";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Menu() {
  const params = useSearchParams().get("category");

  const router = useRouter();

  const { productsData, queries, setQueries, loading } = useQuery();

  const { category } = productsData;

  const [price, setPrice] = useState(queries.minPrice);

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleCategory = (e) => {
    router.push(`/products?page=1&minPrice=0&category=${e}`);
    setQueries((prevState) => ({
      ...prevState,
      category: e,
      page: 1,
      minPrice: 0,
      search: "",
    }));

    setPrice(0);
  };

  const handlerMinPrice = () => {
    router.push(
      `/products?page=1&minPrice=${price}${
        queries.category && `&category=${queries.category}`
      }`
    );
    setQueries((prevState) => ({ ...prevState, minPrice: price, page: 1 }));
  };

  return (
    <aside className="bg-white p-4 w-1/5 text-gray-900 dark:bg-blackDark dark:text-white duration-500 hidden md:flex flex-col">
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Menu</h2>
        <ul className="flex flex-col gap-2">
          {loading ? (
            <Loading />
          ) : (
            <>
              <li
                className="cursor-pointer pl-3 hover:pl-5 duration-300"
                onClick={() => handleCategory("all")}
              >
                All
              </li>
              {category?.map((item, index) => (
                <li
                  className={`py-2 text-sm pl-3 duration-200 rounded-sm uppercase hover:text-primary hover:pl-5 ${
                    item === params &&
                    "bg-gray-100 pl-6 hover:pl-6 font-bold dark:bg-slate-950 text-primary disabled"
                  }`}
                  key={index}
                >
                  <a
                    className={`cursor-pointer`}
                    onClick={() => handleCategory(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-2">Min. Price</h2>
        <div className="flex flex-col gap-4">
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            className="rounded-lg appearance-none bg-gray-300 h-3 w-full accent-primary [::-ms-fill-lower]:bg-"
            value={price}
            onChange={handlePrice}
          />
          <button
            onClick={handlerMinPrice}
            className="border border-solid border-primary  duration-500 text-primary font-bold py-2 px-4 w-full hover:bg-primary hover:text-white"
          >
            ${price}
          </button>
        </div>
      </div>
    </aside>
  );
}

export function Loading() {
  return [...Array(15)].map((e, i) => (
    <li key={i} className="my-2">
      <div className="w-full h-4 bg-gray-200 dark:bg-keppel-900" />
    </li>
  ));
}

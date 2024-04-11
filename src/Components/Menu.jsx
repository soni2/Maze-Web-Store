"use client";

import { useQuery } from "@/Hooks/useQuery";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Menu() {
  const params = useSearchParams().get("category");

  const router = useRouter();

  const { productsData, queries, setQueries } = useQuery();

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
    <aside className="bg-white p-4 w-1/5 text-gray-900 dark:bg-slate-900 dark:text-white duration-500">
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Menu</h2>
        <ul className="flex flex-col gap-2">
          <li
            className="cursor-pointer pl-3 hover:pl-5 duration-300"
            onClick={() => handleCategory("all")}
          >
            All
          </li>
          {category?.map((item, index) => (
            <li
              className={`py-2 capitalize pl-3 duration-200 rounded-sm hover:pl-5 ${
                item === params &&
                "bg-slate-200 pl-6 hover:pl-6 dark:bg-slate-950 disabled:"
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
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-2">Min. Price</h2>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          className="w-4/6"
          value={price}
          onChange={handlePrice}
        />
        <button
          onClick={handlerMinPrice}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/6"
        >
          {price}
        </button>
      </div>
    </aside>
  );
}

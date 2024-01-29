"use client";

import { useQuery } from "@/Hooks/useQuery";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
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
    <aside className="bg-gray-200 p-4 w-1/5 text-gray-900">
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Menu</h2>
        <ul>
          <li className="cursor-pointer" onClick={() => handleCategory("all")}>
            All
          </li>
          {category?.map((item, index) => (
            <li className="py-2 capitalize" key={index}>
              <a
                className="cursor-pointer"
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

"use client";
import "./products.css";

import { useQuery } from "@/Hooks/useQuery";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useCart } from "@/Hooks/useCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function ProductsList({ session, addToCart }) {
  const { baseUrl } = useCart();

  const router = useRouter();

  const supabase = createClientComponentClient();
  const { productInCart, cart } = useCart();

  const { loading, productsData, currentPage, queries, setQueries, fetchData } =
    useQuery();
  const { products, previousPage, totalPages, nextPage } = productsData;

  const page = parseInt(queries.page);
  const handleNextPage = () => {
    router.push(
      `/products?minPrice=0${queries.page && `&page=${page + 1}`}${
        queries.category &&
        `&category=${queries.category}${
          queries.limit && `&limit=${queries.limit}`
        }`
      }`
    );
    setQueries((prevState) => ({
      ...prevState,
      page: page + 1,
    }));
  };

  const handlePrevPage = () => {
    router.push(
      `/products?minPrice=0${queries.page && `&page=${page - 1}`}${
        queries.category &&
        `&category=${queries.category}${
          queries.limit && `&limit=${queries.limit}`
        }`
      }`
    );
    setQueries((prevState) => ({
      ...prevState,
      page: page - 1,
    }));
  };

  return (
    <main className="flex flex-col items-center w-4/5 pl-2">
      <div className="w-full">
        <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
          {!loading
            ? products?.map((product) => {
                const productIn = productInCart(product.id);

                return (
                  <ProductItem
                    key={product.id}
                    session={session}
                    product={product}
                    addToCart={addToCart}
                    productIn={productIn}
                    cart={cart}
                  />
                );
              })
            : [...Array(12)].map((e, i) => <Loading key={i} />)}
        </ul>
      </div>
      <div className="flex w-full justify-between">
        <div>
          Page: <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </div>
        <div>
          <button
            className={`${
              !previousPage
                ? "bg-gray-400 text-white"
                : "border border-solid border-primary "
            } text-primary font-bold py-2 px-4 mr-2 rounded-sm`}
            disabled={previousPage ? false : true}
            onClick={handlePrevPage}
          >
            <ArrowBackIcon />
          </button>

          <button
            className={`${
              !nextPage ? "bg-gray-400" : "bg-primary"
            } text-white font-bold py-2 px-4 rounded-sm`}
            disabled={nextPage ? false : true}
            onClick={handleNextPage}
          >
            Next Page <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </main>
  );
}

export const Loading = () => {
  return (
    <li className="px-4 py-5 w-full flex flex-col bg-white gap-1 dark:bg-keppel-950">
      <div className="flex flex-col justify-between gap-2 min-w-full">
        <div
          className="w-full bg-gray-200 rounded-md dark:bg-keppel-900"
          style={{
            aspectRatio: "10/12",
            objectFit: "cover",
          }}
        ></div>
      </div>
      <div className="w-full h-4 bg-gray-200 dark:bg-keppel-900" />

      <div className="grid grid-cols-4 " style={{}}>
        <div className="h-4 bg-gray-200 col-span-2 dark:bg-keppel-900" />
        <div className="w-10 h-10 bg-gray-200 rounded-lg row-span-2 col-start-4 dark:bg-keppel-900" />
        <div className="h-4 bg-gray-200 col-span-2 dark:bg-keppel-900" />
      </div>
    </li>
  );
};

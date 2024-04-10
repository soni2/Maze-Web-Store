"use client";
import "./products.css";

import { useQuery } from "@/Hooks/useQuery";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export function ProductsList({ session, addToCart }) {
  const router = useRouter();

  const supabase = createClientComponentClient();
  const [cart, setCart] = useState([]);

  async function getCartData() {
    const url = "http://localhost:3000/shoppingcart";

    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setCart(res);
      });
  }

  useEffect(() => {
    getCartData();
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel("realtime button change")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "cart",
        },
        () => {
          getCartData();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, cart]);

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

  function productInCart(product) {
    return cart.some((item) => item.prod_id === product);
  }

  return (
    <main className="flex flex-col items-center w-4/5">
      <div className="products w-full h-full">
        <ul className="grid grid-cols-4 gap-4 mb-6">
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
      <div>
        <button
          className={`${
            !previousPage ? "bg-gray-400" : "bg-blue-500"
          } text-white font-bold py-2 px-4 mr-2 rounded`}
          disabled={previousPage ? false : true}
          onClick={handlePrevPage}
        >
          Previous
        </button>
        {`${currentPage} / ${totalPages}  `}
        <button
          className={`${
            !nextPage ? "bg-gray-400" : "bg-blue-500"
          } text-white font-bold py-2 px-4 mr-2 rounded`}
          disabled={nextPage ? false : true}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </main>
  );
}

export const Loading = () => {
  return (
    <li className="px-4 py-5 w-full flex flex-col bg-white gap-1 dark:bg-slate-900">
      <div className="flex flex-col justify-between gap-2 min-w-full">
        <div
          className="w-full bg-gray-200 rounded-md dark:bg-slate-800"
          style={{
            aspectRatio: "10/12",
            objectFit: "cover",
          }}
        ></div>
      </div>
      <div className="w-full h-4 bg-gray-200 dark:bg-slate-800" />

      <div className="grid grid-cols-4 " style={{}}>
        <div className="h-4 bg-gray-200 col-span-2 dark:bg-slate-800" />
        <div className="w-10 h-10 bg-gray-200 rounded-lg row-span-2 col-start-4 dark:bg-slate-800" />
        <div className="h-4 bg-gray-200 col-span-2 dark:bg-slate-800" />
      </div>
    </li>
  );
};

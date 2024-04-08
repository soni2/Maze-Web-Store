"use client";

import { useCart } from "@/Hooks/useCart";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import { CartIcon } from "../icons";

export function Carousel({ products, session }) {
  const { setCart } = useCart();

  function addToCart(e) {
    setCart((prevState) => [
      ...prevState,
      {
        title: e.title,
        thumbnail: e.thumbnail,
        id: e.id,
        price: e.price,
        quantity: 1,
      },
    ]);
  }

  return (
    <>
      <div className="flex flex-row items-center justify-center space-x-2 w-full max-w-[1800px] ">
        <div className="overflow-hidden">
          {products ? (
            <Swiper spaceBetween={30} slidesPerView={"auto"} pagination={true}>
              {products.map((t) => (
                <SwiperSlide
                  key={t.id}
                  className="px-4 py-5 max-w-52 bg-white dark:bg-slate-900"
                >
                  <div className="flex flex-col justify-between gap-2">
                    <img
                      alt={t.title}
                      className="w-full"
                      height="100"
                      style={{
                        aspectRatio: "10/12",
                        objectFit: "cover",
                      }}
                      width="100"
                      src={t.thumbnail}
                    />
                    <Link href={`/products/${t.id}`} scroll={false}>
                      <h1 className="font-semibold text-lg">
                        {t.title.length > 15
                          ? `${t.title.slice(0, 15)}...`
                          : t.title}
                      </h1>
                    </Link>
                    <div className="grid grid-cols-4">
                      <h1 className="text-gray-300 text-sm capitalize col-span-3 items-stretch">
                        {t.category}
                      </h1>
                      {session ? (
                        <button
                          onClick={() => addToCart(t)}
                          className="row-span-2 flex justify-center items-center w-full rounded-md bg-yellow-400 text-black hover:bg-yellow-300"
                        >
                          <CartIcon width={22} height={22} />
                        </button>
                      ) : (
                        <button
                          className="row-span-2 flex justify-center items-center w-full rounded-md bg-gray-400 text-gray-300"
                          disabled
                        >
                          <CartIcon width={22} height={22} />
                        </button>
                      )}

                      <h1>${t.price}</h1>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <h1>loading</h1>
          )}
        </div>
      </div>
    </>
  );
}

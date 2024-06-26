"use client";

import { useCart } from "@/Hooks/useCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ProductItem from "../ProductItem";

export function Carousel({ products, session, addToCart }) {
  const { productInCart, cart } = useCart();

  return (
    <>
      <div className="flex flex-row items-center justify-center space-x-2 w-minus max-w-[1800px] ">
        <div className="overflow-hidden w-screen md:full ">
          {products ? (
            <Swiper
              spaceBetween={30}
              slidesPerView={"auto"}
              pagination={true}
              className="overflow-hidden"
              style={{ width: "calc(100vw - 20px)" }}
            >
              {products.map((t) => {
                const productIn = productInCart(t.id);

                return (
                  <SwiperSlide key={t.id} className="max-w-52">
                    <ProductItem
                      product={t}
                      addToCart={addToCart}
                      session={session}
                      productIn={productIn}
                      cart={cart}
                    ></ProductItem>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <h1>loading</h1>
          )}
        </div>
      </div>
    </>
  );
}

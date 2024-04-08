"use client";

import { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useQuery } from "@/Hooks/useQuery";

export function FlyoutCart({ delItem, updateItem }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([]);

  const { handleCartToggle, cartOpen } = useQuery();

  const supabase = createClientComponentClient();

  const getCartData = async () => {
    fetch(`http://localhost:3000/shoppingcart`)
      .then((res) => res.json())
      .then((res) => {
        return setCart(res);
      });
  };

  function getTotal() {
    const total = cart.reduce(
      (acc, element) => acc + element.price * element.quantity,
      0
    );
    setTotal(total);
  }

  useEffect(() => {
    getCartData();
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel("realtime cart")
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

  useEffect(() => {
    getTotal();
  }, [cart]);

  return (
    // <div
    //   className={`fixed inset-0 z-10 overflow-hidden backdrop-blur-sm block `}
    // >
    <div
      className={`fixed inset-0 z-10 overflow-hidden backdrop-blur-sm ${
        cartOpen ? "block" : "hidden"
      } `}
    >
      <div
        className="absolute inset-0 bg-black opacity-60"
        onClick={handleCartToggle}
      ></div>
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-lg">
          <div className="bg-white grid grid-rows-12 h-full p-4">
            <div className="flex flex-row justify-between w-full relative">
              <h2 className="text-md text-gray-600 font-light tracking-wider">
                ORDER
              </h2>
              <h2
                className="text-md text-gray-600 font-light tracking-wider cursor-pointer"
                onClick={handleCartToggle}
              >
                X
              </h2>
            </div>
            <div className="overflow-auto row-span-9 relative">
              <ul>
                {cart?.map((item) => (
                  <CartItem
                    key={item.key}
                    item={item}
                    updateItem={updateItem}
                    getCartData={getCartData}
                    delItem={delItem}
                  />
                ))}
              </ul>
            </div>
            <div className="text-black bottom-0 w-full row-span-2 relative flex flex-col justify-end">
              <div className="flex justify-between">
                <span>
                  <h1>Total</h1>
                </span>
                <span>
                  <h1>${total}.00</h1>
                </span>
              </div>
              <div className="flex justify-between">
                <span>
                  <h1>Shipping</h1>
                </span>
                <span>
                  <h1>$10.00</h1>
                </span>
              </div>
              <div className="flex justify-between">
                <span>
                  <h1>Subtotal</h1>
                </span>
                <span>{/* <h1>${total + 10}.00</h1> */}</span>
              </div>
              <button
                // onClick={handleCartToggle}
                className="bg-gray-500 w-full hover:bg-gray-700 text-white py-2 px-4 rounded mt-3"
              >
                Close Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

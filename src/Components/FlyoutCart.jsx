"use client";

import { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useQuery } from "@/Hooks/useQuery";
import CloseIcon from "@mui/icons-material/Close";
import Button from "./ui/Button";

export function FlyoutCart({ delItem, updateItem }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(0);

  const { handleCartToggle, cartOpen } = useQuery();

  const supabase = createClientComponentClient();

  const getCartData = async () => {
    fetch(`${baseUrl}/api/shoppingcart`)
      .then((res) => res.json())
      .then((res) => {
        setCart(res.products);
        setTotal(res.total);
        setShipping(res.shipping);
      });
  };

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

  return (
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
          <div className="bg-white grid grid-rows-12 h-full p-4 dark:bg-blackDark">
            <div className="flex flex-row justify-between w-full relative">
              <h2 className="text-md font-light tracking-wider">ORDER</h2>
              <h2
                className="text-md font-light tracking-wider cursor-pointer"
                onClick={handleCartToggle}
              >
                <CloseIcon />
              </h2>
            </div>
            <div className="overflow-auto row-span-9 relative">
              <ul>
                {cart?.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    updateItem={updateItem}
                    getCartData={getCartData}
                    delItem={delItem}
                  />
                ))}
              </ul>
            </div>
            <div className="bottom-0 w-full row-span-2 relative flex flex-col justify-end">
              <div className="flex justify-between">
                <span>
                  <h1>Subtotal</h1>
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
                  <h1>${shipping}.00</h1>
                </span>
              </div>
              <div className="flex justify-between">
                <span>
                  <h1>Total</h1>
                </span>
                <span>
                  <h1>${total + shipping}.00</h1>
                </span>
              </div>
              <Button
                // onClick={handleCartToggle}
                className="bg-gray-500 w-full hover:bg-gray-700 text-white py-2 px-4 rounded mt-3"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

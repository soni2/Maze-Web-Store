"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState, createContext } from "react";

// import { addCart } from "@/lib";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // #region States
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const supabase = createClientComponentClient();

  // #region Functions
  async function getCartData() {
    const url = `${baseUrl}/api/shoppingcart`;

    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setCart(res.products);
      });
  }

  useEffect(() => {
    getCartData();
  }, []);

  useEffect(() => {
    setLoading(false);
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

  function productInCart(product) {
    return cart.some((item) => item.prod_id === product);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        baseUrl,
        loading,
        setLoading,
        productInCart,
        getCartData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

"use client";

import { createContext, useState } from "react";
// import { addCart } from "@/lib";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function removeFromCart(e) {
    setCart(cart.filter((t) => t.id !== e));
  }

  function addToCart(e) {
    // const { id } = e;
    // const productInCartIndex = cart.findIndex((item) => item.id === id);

    // if (productInCartIndex >= 0) {
    //   const newState = [
    //     ...cart.slice(0, productInCartIndex),
    //     {
    //       ...cart[productInCartIndex],
    //       quantity: cart[productInCartIndex].quantity + 1,
    //     },
    //     ...cart.slice(productInCartIndex + 1),
    //   ];

    //   return setCart(newState);
    // }

    // addCart({
    //   title: e.title,
    //   thumbnail: e.thumbnail,
    //   id: e.id,
    //   price: e.price,
    //   quantity: 1,
    // });

    console.log("adding to cart");
  }

  function removeOneFromCart(e) {
    const { id } = e;
    const productInCartIndex = cart.findIndex((item) => item.id === id);

    if (cart[productInCartIndex].quantity === 1) {
      return setCart(cart.filter((t) => t.id !== e.id));
    }

    if (productInCartIndex >= 0) {
      const newState = [
        ...cart.slice(0, productInCartIndex),
        {
          ...cart[productInCartIndex],
          quantity: cart[productInCartIndex].quantity - 1,
        },
        ...cart.slice(productInCartIndex + 1),
      ];

      return setCart(newState);
    }

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
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, removeOneFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

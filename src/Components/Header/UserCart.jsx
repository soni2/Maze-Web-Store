"use client";

import React from "react";
import { useQuery } from "@/Hooks/useQuery";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useCart } from "@/Hooks/useCart";

export default function UserCart() {
  const { handleCartToggle, handleUserToggle } = useQuery();
  const { cart } = useCart();

  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={handleUserToggle}
        className="hidden sm:flex items-center hover:text-primary text-black dark:text-white font-bold duration-500 py-2 px-2"
      >
        <PersonIcon />
      </button>
      <button
        onClick={handleCartToggle}
        className="flex items-center hover:text-primary text-black dark:text-white font-bold duration-500 py-2 px-2 relative"
      >
        <ShoppingCartIcon />
        {cart.length >= 1 && (
          <span className="w-3 h-3 right-1 bottom-1 bg-red-600 rounded-full block absolute"></span>
        )}
      </button>
    </div>
  );
}

"use client";

import React from "react";
import { useQuery } from "@/Hooks/useQuery";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

export default function UserCart() {
  const { handleCartToggle } = useQuery();

  return (
    <div className="flex justify-center items-center gap-2">
      <button className="flex items-center hover:text-primary text-black dark:text-white font-bold duration-500 py-2 px-2">
        <PersonIcon />
      </button>
      <button
        onClick={handleCartToggle}
        className="flex items-center hover:text-primary text-black dark:text-white font-bold duration-500 py-2 px-2"
      >
        <ShoppingCartIcon />
      </button>
    </div>
  );
}

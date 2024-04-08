"use client";

import React from "react";
import { CartIcon, User } from "../icons";
import { useQuery } from "@/Hooks/useQuery";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";

export default function UserCart() {
  const { handleCartToggle } = useQuery();

  return (
    <div className="flex justify-center items-center gap-2">
      <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
        <User />
      </button>
      <button
        onClick={handleCartToggle}
        className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded-full"
      >
        <CartIcon />
      </button>
      <ThemeSwitch />
    </div>
  );
}

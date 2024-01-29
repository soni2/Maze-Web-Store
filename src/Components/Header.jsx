"use client";

import React from "react";
import SearchBar from "./SearchBar";
import { CartIcon, User } from "./icons";
import { useQuery } from "@/Hooks/useQuery";

export default function Header() {
  const { handleCartToggle } = useQuery();

  return (
    <header className=" w-full text-white flex items-center justify-between p-4">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Your Website</h1>
      </div>
      <SearchBar />
      <div>
        {/* <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md mr-4">
          Login
        </button>
        Register */}
        <div className="flex justify-center items-center">
          <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full mr-4">
            <User />
          </button>
          <button
            onClick={handleCartToggle}
            className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded-full"
          >
            <CartIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

"use client";
import { CartContext } from "@/Context/CartContext";
import { useContext } from "react";

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("Router Provider is misplaced");
  }

  return context;
};

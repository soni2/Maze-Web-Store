"use client";
import { RouterContext } from "@/Context/RouterContext";
import { useContext } from "react";

export const useQuery = () => {
  const context = useContext(RouterContext);

  if (context === undefined) {
    throw new Error("Router Provider is misplaced");
  }

  return context;
};

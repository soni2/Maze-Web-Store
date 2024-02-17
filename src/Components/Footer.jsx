"use client";

import "./footer.css";
import { useCart } from "@/Hooks/useCart";

export const Footer = () => {
  const { cart } = useCart();

  return <div className="footer">{JSON.stringify(cart)}</div>;
};

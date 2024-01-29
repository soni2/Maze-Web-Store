"use client";

import "./footer.css";
import { useQuery } from "@/Hooks/useQuery";

export const Footer = () => {
  const { productsData } = useQuery();

  return <div className="footer">{JSON.stringify(productsData)}</div>;
};

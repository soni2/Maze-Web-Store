"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const params = useSearchParams();

  // const path = usePathname();

  const page = params.get("page");
  const limit = params.get("limit");
  const minPrice = params.get("minPrice");
  const category = params.get("category");
  const search = params.get("search");

  const currentPage = params.get("page") || "1";

  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const [queries, setQueries] = useState({
    page: page || "1",
    limit: limit || "12",
    minPrice: minPrice || "0",
    category: category || "all",
    search: search || "",
  });

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };

  const handleLoginToggle = () => {
    setLoginOpen(!loginOpen);
  };

  // Manejo del buscador

  async function fetchData() {
    try {
      const url = `/items?page=${queries.page}&limit=${
        queries.limit
      }&minPrice=${queries.minPrice}&category=${
        queries.category === undefined ? "all" : queries.category
      }&search=${queries.search}`;

      const res = await fetch(url);
      const data = await res.json();

      setProductsData(data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [queries, search]);

  return (
    <RouterContext.Provider
      value={{
        loading,
        queries,
        setQueries,
        productsData,
        currentPage,
        page,
        limit,
        minPrice,
        category,
        cartOpen,
        setCartOpen,
        handleCartToggle,
        handleLoginToggle,
        loginOpen,
        setLoginOpen,
        fetchData,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

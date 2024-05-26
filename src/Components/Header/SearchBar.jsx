"use client";

import { useQuery } from "@/Hooks/useQuery";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();

  const { setQueries, handleMenuToggle } = useQuery();

  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    setQueries((prevState) => ({
      ...prevState,
      search: search,
      minPrice: 0,
      limit: 12,
      category: "all",
      page: 1,
    }));

    handleMenuToggle();

    await new Promise((resolve) => setTimeout(resolve, 0));

    router.push(`/products?search=${search}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-6/12 max-w-[550px]">
      <div className="">
        {/* <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white duration-500"
        >
          Your Email
        </label> */}

        <div className="relative w-full ">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  rounded-sm  focus:ring-keppel-400 focus:border-primary dark:bg-black dark:placeholder-gray-500 dark:text-white dark:focus:border-keppel-400 duration-500"
            placeholder="Search for our products"
            onChange={handleSearchInput}
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:text-white dark:hover:bg-slate-800 dark:focus:ring-blue-800 duration-300"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;

"use client";

import Link from "next/link";
import LogoComponent from "./logo";
import ThemeSwitch from "@/Components/ThemeSwitch";

export const Footer = () => {
  // const themeSwitch = () => {
  //   if (document.documentElement.classList.contains("dark")) {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.getItem("theme", "light");
  //     return;
  //   }

  //   document.documentElement.classList.add("dark");
  //   localStorage.setItem("theme", "dark");
  // };

  const themeSwitch = () => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.removeItem("theme");

      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    themeSwitch();
  };

  return (
    <footer className="flex items-center justify-center h-[60px] border-t border-keppel-800 text-sm bg-white dark:bg-keppel-950 duration-500 bottom-0">
      <div className="grid gap-4 md:grid-cols-2 w-full max-w-[1200px]">
        <div className="flex items-center gap-2">
          <LogoComponent className="w-14 fill-primary dark:fill-white duration-500" />
          <p className="text-xs text-gray-500 md:text-sm dark:text-gray-400">
            © 2024 Mazed All rights reserved.
          </p>
        </div>
        <nav className="flex items-center justify-end space-x-4 text-sm md:space-x-8 md:order-1 ">
          <Link
            className="text-gray-500 hover:text-primary duration-500 dark:text-gray-400 dark:hover:text-gray-50"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-500 hover:text-primary duration-500 dark:text-gray-400 dark:hover:text-gray-50"
            href="products"
          >
            Products
          </Link>
          <Link
            className="text-gray-500 hover:text-primary duration-500 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Contact
          </Link>
          <Link
            className="text-gray-500 hover:text-primary duration-500 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            About
          </Link>
          <ThemeSwitch />
        </nav>
      </div>
    </footer>
  );
};

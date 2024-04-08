"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
    <footer className="flex items-center justify-center h-[60px] border-t text-sm bg-white dark:bg-slate-900 duration-500">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex items-center gap-2 md:justify-end">
          <img
            alt="Logo"
            className="aspect-w-3 aspect-h-1 rounded"
            height="40"
            width="120"
          />
          <p className="text-xs text-gray-500 md:text-sm dark:text-gray-400">
            © 2024 Acme Inc. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center justify-end space-x-4 text-sm md:space-x-8 md:order-1">
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Products
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Contact
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            About
          </Link>
        </nav>
      </div>
    </footer>
  );
};

"use client";
import SearchBar from "./SearchBar";

import Link from "next/link";
import UserCart from "./UserCart";
import ThemeSwitch from "../ThemeSwitch";
import LogoComponent from "../logo";

export default function Header({ session }) {
  return (
    <header className="bg-white w-full flex items-center justify-between px-4 py-2  mb-4 dark:text-white dark:bg-keppel-950 duration-500">
      <div className="flex items-center gap-3">
        <Link href={"/"}>
          <LogoComponent className="w-28 dark:fill-white hover:fill-keppel-600 duration-500 dark:hover:fill-primary" />
        </Link>{" "}
        /
        <a href={"/products"}>
          <p>products</p>
        </a>
      </div>
      <SearchBar />

      <div>
        {session ? (
          <UserCart />
        ) : (
          <div className="flex gap-2 items-center">
            <Link href="/login">
              <span className="bg-primary hover:bg-gray-600 text-white px-4 py-2 rounded-md">
                Login
              </span>
            </Link>
            |
            <Link href="/register">
              <span>Register</span>
            </Link>
            |
            <ThemeSwitch />
          </div>
        )}
      </div>
    </header>
  );
}

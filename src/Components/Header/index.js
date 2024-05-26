"use client";
import SearchBar from "./SearchBar";

import Link from "next/link";
import UserCart from "./UserCart";
import LogoComponent from "../logo";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useQuery } from "@/Hooks/useQuery";

export default function Header({ session }) {
  const { handleMenuToggle, handleCartToggle } = useQuery();

  return (
    <>
      <header className="bg-white w-full hidden md:flex items-center justify-between px-4 py-2  dark:text-white dark:bg-keppel-950 duration-500 overflow-hidden">
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
                <span className="bg-primary hover:bg-gray-600 text-white px-4 py-2">
                  Login
                </span>
              </Link>
              |
              <Link href="/register">
                <span>Register</span>
              </Link>
            </div>
          )}
        </div>
      </header>
      <header className="bg-white w-full flex md:hidden items-center justify-between px-4 py-2  dark:text-white dark:bg-keppel-950 duration-500 overflow-hidden border-b border-gray-400 dark:border-keppel-800">
        <div className="flex gap-4 items-center">
          <button onClick={() => handleMenuToggle()}>
            <MenuIcon />
          </button>
          <Link href={"/"}>
            <LogoComponent className="w-20  dark:fill-white hover:fill-keppel-600 duration-500 dark:hover:fill-primary" />
          </Link>
        </div>
        {session && (
          <>
            {/*<button onClick={() => handleCartToggle()}>
            <ShoppingCartIcon />
            </button> */}
            <UserCart />
          </>
        )}
      </header>
    </>
  );
}

import SearchBar from "./SearchBar";

import Link from "next/link";
import { getSession } from "@/lib";
import UserCart from "./UserCart";
import ThemeSwitch from "../ThemeSwitch";

export default function Header({ session }) {
  return (
    <header className=" w-full flex items-center justify-between px-4 py-2 bg-white mb-4 dark:text-white dark:bg-slate-900 duration-500">
      <div className="flex items-center gap-3 ">
        <Link href={"/"}>
          <h1 className="text-xl font-bold">Your Website</h1>
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
              <span className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
                Login
              </span>
            </Link>
            <span>Register</span>
            |
            <ThemeSwitch />
          </div>
        )}
      </div>
    </header>
  );
}

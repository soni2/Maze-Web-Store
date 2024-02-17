import Costumers from "@/Components/HomePage/Costumers";
import Featured from "@/Components/HomePage/Featured";
import Hero from "@/Components/HomePage/Hero";
import LoginModal from "@/Components/LoginModal";

import Link from "next/link";

export default async function Home(props) {
  return (
    // <>
    // </>
    //<main className="flex min-h-screen flex-col items-center justify-between p-24">
    // <LoginModal />
    //</main>
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <Featured />
        <Costumers />

        <footer className="flex items-center justify-center h-[60px] border-t text-sm bg-gray-100/40 dark:bg-gray-800/40">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-2 md:justify-end">
              <img
                alt="Logo"
                className="aspect-w-3 aspect-h-1 rounded"
                height="40"
                src="/placeholder.svg"
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
      </main>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

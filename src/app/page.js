import { Cart } from "@/Components/Cart";
import Header from "@/Components/Header";
import Hero from "@/Components/HomePage/Hero";

import { getSession } from "@/lib";
import dynamic from "next/dynamic";

import Link from "next/link";

const Featured = dynamic(() => import("@/Components/HomePage/Featured"));
const Costumers = dynamic(() => import("@/Components/HomePage/Costumers"));

export default async function Home() {
  const session = await getSession();

  return (
    <>
      <Header session={session} />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <Hero />
          <Featured />
          {/* <Carousel /> */}
          <Costumers />
          {/* <CardCarousel /> */}
          <Cart />
        </main>
      </div>
    </>
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

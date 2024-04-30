import { Cart } from "@/Components/Cart";
import Header from "@/Components/Header";
import Hero from "@/Components/HomePage/Hero";
import { Footer } from "@/Components/Footer";

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
          <Footer />
        </main>
      </div>
    </>
  );
}

import { Cart } from "@/Components/Cart";
import { Footer } from "@/Components/Footer";
import Header from "@/Components/Header";
import "@/app/globals.css";

export default function Layout({ children }) {
  return (
    <div className="flex justify-center h-screen">
      <div className="min-w-80 w-[1024px]">
        {/* <Header /> */}
        {children}
        <Footer />
      </div>
    </div>
  );
}
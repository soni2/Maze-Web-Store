import { Inter } from "next/font/google";
import "./globals.css";
import { RouterProvider } from "@/Context/RouterContext";
import { CartProvider } from "@/Context/CartContext";
import { Providers } from "@/Context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Page",
  description: "Generated by create next app",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-witheLight dark:bg-blackDark ${inter.className} duration-500`}
      >
        <div className="flex flex-col  min-h-screen">
          <RouterProvider>
            <CartProvider>
              <Providers>
                {children}
                {modal}
              </Providers>
            </CartProvider>
          </RouterProvider>
        </div>
      </body>
    </html>
  );
}

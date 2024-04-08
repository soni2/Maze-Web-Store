"use client";

import { useRouter } from "next/navigation";

export function Modal({ children }) {
  const router = useRouter();

  const test1 = () => {
    console.log("test");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden block backdrop-blur-md">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="fixed w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

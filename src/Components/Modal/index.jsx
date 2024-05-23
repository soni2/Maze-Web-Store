"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function Modal({ children }) {
  const router = useRouter();

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden backdrop-blur-md flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black opacity-60"
          onClick={() => router.back()}
        ></div>
        <div className="absolute max-w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
}

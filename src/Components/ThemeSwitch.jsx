"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./icons";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
      // <h1>Loading Light/Dark Toggle</h1>
    );

  if (resolvedTheme === "dark") {
    return (
      <button
        className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full"
        onClick={() => setTheme("light")}
      >
        <SunIcon />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full"
        onClick={() => setTheme("dark")}
      >
        <MoonIcon fill="000" />
      </button>
    );
  }
}

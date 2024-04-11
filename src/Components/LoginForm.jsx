"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export const LoginForm = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [email, setEmail] = useState("");
  const supabase = createClientComponentClient();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        redirectTo: `${baseUrl}/auth/callback`,
      },
    });

    console.log(error);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        placeholder="username@site.com"
        onChange={(e) => setEmail(e.target.value)}
        className="text-black px-3 py-2"
      />
      <button
        type="submit"
        className="w-full bg-black p-4 rounded-md hover:bg-gray-500"
      >
        Log in
      </button>
    </form>
  );
};

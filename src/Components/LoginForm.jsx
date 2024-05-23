"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Input from "@/Components/ui/Input";

import { useState } from "react";

export const LoginForm = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient();

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
      options: {
        redirectTo: `${baseUrl}/auth/callback`,
      },
    });

    console.log(error);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <label
        htmlFor="email"
        className="block text-xs font-semibold text-gray-600 uppercase"
      >
        Email
      </label>
      <Input
        type="email"
        name="email"
        placeholder="username@site.com"
        action={handleEmail}
        className="text-black px-3 py-2"
      />
      <label
        htmlFor="password"
        className="block text-xs font-semibold text-gray-600 uppercase"
      >
        Password
      </label>
      <Input
        id="password"
        required
        type="password"
        placeholder="•••••••"
        action={handlePassword}
      />
      <button
        type="submit"
        className="w-full bg-white dark:bg-black p-4 rounded-md hover:bg-gray-500"
      >
        Log in
      </button>
    </form>
  );
};

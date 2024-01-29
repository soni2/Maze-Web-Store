"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const supabase = createClientComponentClient();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await supabase.auth.signInWithOtp({
      email,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="username@site.com"
        onChange={(e) => setEmail(e.target.value)}
        className="text-black"
      />
    </form>
  );
};

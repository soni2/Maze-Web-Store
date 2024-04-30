"use client";

import Input from "@/Components/ui/Input";
import Button from "@/Components/ui/Button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import LogoComponent from "../../Components/logo";
import Sidebar from "@/Components/Sidebar";

export function Form() {
  const supabase = createClientComponentClient();

  const onSubmit = async (formData) => {
    // formData.preventDefault();

    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    // console.log(name, email, password);

    // const { error } = await supabase.auth.signUp({
    //   name,
    //   email,
    //   username,
    //   password,
    //   options: {
    //     emailRedirectTo: window.location.origin,
    //   },
    // });

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          user_name: username,
        },
        emailRedirectTo: "/auth/callback",
      },
    });

    console.log(error);
  };

  return (
    <div className="flex flex-row justify-center bg-slate-50 gab-3 overflow-hidden rounded-lg shadow-md">
      {/* Side bar*/}
      <Sidebar
        title="Create an account and discover exclusives deals waiting for you!"
        subTitle="Do you already have an account?"
        buttonText="Login"
      />
      {/* Login Form */}
      <div className="px-10 py-10">
        <form
          className="mx-auto max-w-sm space-y-6"
          action={onSubmit}
          id="form"
        >
          <div className="space-y-2 text-center">
            {/* <h1 className="text-3xl font-bold text-primary">
              Create an account
            </h1> */}
            <p className="text-3xl font-bold text-keppel-500">
              Enter your information to get started
            </p>
          </div>
          {/* <div className="space-y-2">
        <label htmlFor="name">Name</label>
        <Input id="name" placeholder="John Doe" required />
      </div> */}
          <div className="flex justify-between gap-3">
            <span className="w-1/2">
              <label
                for="firstname"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Firstname
              </label>
              <Input
                id="firstname"
                type="text"
                name="firstname"
                placeholder="John"
                autocomplete="given-name"
                required
              />
            </span>
            <span className="w-1/2">
              <label
                for="lastname"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Lastname
              </label>
              <Input
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Doe"
                autocomplete="family-name"
                required
              />
            </span>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="uppercase text-xs font-semibold text-gray-600"
            >
              Username
            </label>
            <Input id="username" placeholder="johndoe" required />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="uppercase text-xs font-semibold text-gray-600"
            >
              Email
            </label>
            <Input id="email" placeholder="mail@example.com" required />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="uppercase text-xs font-semibold text-gray-600"
            >
              Password
            </label>
            <Input
              id="password"
              placeholder="•••••••"
              required
              type="password"
            />
          </div>
          <Button type="submit">Sign Up</Button>
          {/* <Button className="w-full" onClick={undefined}>
        Log In
      </Button> */}
        </form>
      </div>
    </div>
  );
}

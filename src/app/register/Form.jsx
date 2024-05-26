"use client";

import Input from "@/Components/ui/Input";
import Button from "@/Components/ui/Button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ErrorMessage, SuccessMessage } from "@/Components/ui/StatusMessage";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Sidebar from "@/Components/Sidebar";
import { useError } from "@/Hooks/useError";
import { useEffect, useState } from "react";
import SuccessMark from "@/Components/ui/SuccessMark";

export function Form() {
  //#region States
  const supabase = createClientComponentClient();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [repeat, setRepeat] = useState("");

  //#region function
  function handleError(e) {
    setStatusMsg(e);
    setError(true);

    setTimeout(() => {
      setError(false);
    }, 4000);
  }

  const onSubmit = (formData) => {
    // formData.preventDefault();

    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$");

    setLoading(true);

    async function submitData() {
      if (validPassword !== repeat) {
        handleError("Password most be the same");
        setLoading(false);
      } else if (!pattern.test(password)) {
        handleError("Password most include uppercase and numbers");
        setLoading(false);
      } else {
        const { error, data } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name: `${firstname} ${lastname}`,
              full_name: `${firstname} ${lastname}`,
              user_name: username,
            },
            emailRedirectTo: "/auth/callback",
          },
        });

        if (error) {
          setError(true);
          setStatusMsg(error.message);
          setTimeout(() => {
            setError(false);
          }, 4000);
        } else {
          setSuccess(true);
          // setLoading(false);
        }
      }

      // console.log(data);
    }

    submitData();

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
  };

  return (
    <div className="flex flex-row justify-center bg-slate-50 gab-3 overflow-hidden rounded-lg shadow-md dark:bg-black">
      {error && <ErrorMessage statusMsg={statusMsg} />}
      {/* Side bar*/}
      <Sidebar
        title="Create an account and discover exclusives deals waiting for you!"
        subTitle="Do you already have an account?"
        buttonText="Login"
      />
      {/* Registar Form */}
      <div className="px-10 py-10 relative flex items-center justify-center">
        {success && (
          <div
            className={`absolute col-span-5 w-full h-full bg-white/90 flex flex-col items-center justify-center py-8 duration-300 p-8 dark:bg-black/90 z-30`}
          >
            <SuccessMark className="stroke-primary" />

            <h1 className="text-3xl font-bold">Verify your email address</h1>
            <p className="text-center p-3 text-sm text-gray-500 dark:text-white">
              Thank you for your interest in shopping with us. To get started,
              we&apos;ve sent an email to your inbox. Please take a moment to
              confirm your email address in order to begin shopping with ease.
            </p>
          </div>
        )}

        <form
          className={`mx-auto max-w-sm space-y-6 duration-500 ${
            (loading && "opacity-30", success && "opacity-50")
          }`}
          action={onSubmit}
          id="form"
        >
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-keppel-500">
              Enter your information to get started
            </h1>
          </div>
          <div className="flex justify-between gap-3">
            <span className="w-1/2">
              <label
                htmlFor="firstname"
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
                htmlFor="lastname"
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
              action={(e) => {
                setValidPassword(e.target.value);
              }}
            />
            <p className="uppercase text-xs font-semibold text-gray-300">
              most include uppercase and numbers
            </p>
            <label
              htmlFor="repeat"
              className="uppercase text-xs font-semibold text-gray-600"
            >
              Repeat Password
            </label>
            <Input
              className={`${
                repeat !== validPassword &&
                "bg-red-600/20 border-red-600 border"
              }`}
              id="repeat"
              placeholder="•••••••"
              required
              type="password"
              action={(e) => {
                setRepeat(e.target.value);
              }}
            />
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </div>
  );
}

"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

export function AuthButtonClient({ session }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    location.reload();
  };

  const handleLogin = async (platform) => {
    await supabase.auth.signInWithOAuth({
      provider: platform,
      options: {
        redirectTo: `${baseUrl}/auth/callback`,
      },
    });
  };

  return session ? (
    <button onClick={handleSignOut}>Logout</button>
  ) : (
    <>
      <span className="flex flex-row w-full justify-center items-center">
        <div className="h-px w-full bg-slate-200"></div>
        <p className="block text-xs font-semibold text-gray-600 uppercase mx-3">
          Or
        </p>
        <div className="h-px w-full bg-slate-200"></div>
      </span>
      <div className="flex justify-between gap-2">
        <button
          type="button"
          className="text-white bg-black hover:bg-primary focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-keppel-500 gap-2 duration-500"
          onClick={() => handleLogin("github")}
        >
          <GitHubIcon />
          Github
        </button>
        <button
          type="button"
          className="text-white  bg-black hover:bg-primary focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-keppel-500 gap-2 duration-500"
          onClick={() => handleLogin("google")}
        >
          <GoogleIcon />
          Google
        </button>
      </div>
    </>
  );
}

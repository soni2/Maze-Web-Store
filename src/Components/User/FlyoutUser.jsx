"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useQuery } from "@/Hooks/useQuery";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

export function FlyoutUser() {
  const { handleUserToggle, userOpen } = useQuery();
  const router = useRouter();

  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    location.reload();
  };

  return (
    <div
      className={`fixed inset-0 z-10 overflow-hidden backdrop-blur-md ${
        userOpen ? "block" : "hidden"
      } `}
    >
      <div
        className="absolute inset-0 bg-black opacity-60"
        onClick={handleUserToggle}
      ></div>
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-lg">
          <div className="bg-white flex flex-col h-full p-4 justify-between dark:bg-blackDark">
            <div className="flex flex-row justify-between w-full relative">
              <h2 className="text-md font-light tracking-wider">USER</h2>
              <h2
                className="text-md font-light tracking-wider cursor-pointer"
                onClick={handleUserToggle}
              >
                <CloseIcon />
              </h2>
            </div>
            <Button action={handleSignOut} type="button">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

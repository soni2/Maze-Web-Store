import Link from "next/link";
import LogoComponent from "./logo";

export default function Sidebar({ title, subTitle, buttonText }) {
  return (
    <div class="hidden lg:flex flex-col justify-between bg-primary lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
      <div class="flex items-center justify-start space-x-3">
        {/* <span class="bg-black rounded-full w-8 h-8"></span> */}
        <Link href="/" class="font-medium text-xl">
          <LogoComponent fill={"#fff"} class="w-28" />
        </Link>
      </div>
      <div class="space-y-5">
        <h1 class="lg:text-3xl xl:leading-snug font-extrabold text-black">
          {title}
        </h1>
        <p class="text-lg text-white">{subTitle}</p>
        <button class="inline-block w-full flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
          {buttonText}
        </button>
      </div>
      <p class="font-medium">©Mazed 2024</p>
    </div>
  );
}

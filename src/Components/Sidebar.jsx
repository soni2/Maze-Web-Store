import Link from "next/link";
import LogoComponent from "./logo";

export default function Sidebar({ title, subTitle, buttonText }) {
  return (
    <div className="hidden lg:flex flex-col justify-between bg-primary dark:bg-keppel-950 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
      <div className="flex items-center justify-start space-x-3">
        {/* <span className="bg-black rounded-full w-8 h-8"></span> */}
        <Link href="/" className="font-medium text-xl">
          <LogoComponent fill={"#fff"} className="w-28" />
        </Link>
      </div>
      <div className="space-y-5">
        <h1 className="lg:text-3xl xl:leading-snug font-extrabold text-black dark:text-primary">
          {title}
        </h1>
        <p className="text-lg text-white">{subTitle}</p>
        <button className="inline-block w-full flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white dark:bg-primary dark:text-black hover:text-black hover:bg-white hover:border-white duration-500">
          {buttonText}
        </button>
      </div>
      <p className="font-medium">©Mazed 2024</p>
    </div>
  );
}

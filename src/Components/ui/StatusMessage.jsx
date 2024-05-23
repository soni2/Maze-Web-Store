"use client";

export function ErrorMessage({ statusMsg }) {
  return (
    <div
      className={`fixed rounded-sm col-span-5 border-2 border-red-600 flex top-3 py-3 px-5 bg-red-600/10 duration-300`}
    >
      {statusMsg}
    </div>
  );
}

export function SuccessMessage({ children }) {
  return (
    <div
      className={`absolute col-span-5 w-full h-full bg-white/90 flex flex-col items-center justify-center py-8 duration-300 p-8 dark:bg-black/90`}
    >
      {children}
    </div>
  );
}

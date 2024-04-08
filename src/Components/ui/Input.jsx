import React from "react";

export default function Input({ placeholder, required, id, type }) {
  return (
    <input
      type={type}
      id={id}
      name={id}
      className="block  p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
      placeholder={placeholder}
      required={required}
    />
  );
}

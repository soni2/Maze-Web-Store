import React from "react";

export default function Input({
  placeholder,
  required,
  id,
  type,
  action,
  className,
}) {
  return (
    <input
      onChange={action}
      type={type}
      id={id}
      name={id}
      className={`block  p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-none focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-none ${className}`}
      placeholder={placeholder}
      required={required}
    />
  );
}

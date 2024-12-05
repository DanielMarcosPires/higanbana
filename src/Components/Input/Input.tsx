"use client";
import React, { ComponentProps, useState } from "react";

export default function Input({ children, ...props }: ComponentProps<"input">) {
  const [value, setValue] = useState<string>("");
  console.log(value);
  return (
    <div className="flex flex-col">
      <label className="relative left-1" htmlFor={`${children}`}>
        {children}
      </label>
      <div className="ltr border border-b-4  rounded-lg border-red-800 relative flex items-center h-full">
        <input
          className={`w-full bg-transparent outline-none p-2 `}
          id={`${children}`}
          onChange={(e) => setValue(e.target.value)}
          placeholder={`${children}`}
          {...props}
        />
      </div>
    </div>
  );
}

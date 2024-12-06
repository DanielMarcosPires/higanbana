import React, { ComponentProps } from "react";

export default function Navbar({ children, ...props }: ComponentProps<"nav">) {
  return (
    <nav
      className="flex flex-col md:flex-row justify-center 0 bg-[#222] border-b-4 border-red-800"
      {...props}
    >
      {children}
    </nav>
  );
}

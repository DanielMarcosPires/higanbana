import React, { ComponentProps } from "react";

export default function Navbar({ children, ...props }: ComponentProps<"nav">) {
  return (
    <nav
      className="flex flex-wrap justify-center h-14 0 bg-[#222] border-b-4 border-red-800"
      {...props}
    >
      {children}
    </nav>
  );
}

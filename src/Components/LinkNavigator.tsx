"use client"
import React, { ComponentProps } from "react";

interface LinkNavigatorProps extends ComponentProps<"a"> {
  href: string;
}

export default function LinkNavigator({ href, children, ...props }: LinkNavigatorProps) {
  return (
    <a
      className={`flex items-center justify-center flex-grow`}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}

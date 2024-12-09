"use client";
import Link from "next/link";
import React, { ComponentProps, useEffect, useState } from "react";
import "./css/style.css";

interface LinkNavigatorProps extends ComponentProps<"a"> {
  href: string;
}

export default function LinkNavigator({
  href,
  children,
  ...props
}: LinkNavigatorProps) {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

 

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = href;
    setCurrentHash(href);
  };

  return (
    <Link
      className={`flex items-center justify-center py-4 flex-grow ${
        currentHash === href ? "sombra" : ""
      }`}
      href={href}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}

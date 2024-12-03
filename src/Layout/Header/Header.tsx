/* eslint-disable @next/next/no-img-element */
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex bg-[#222] p-4">
      <div className="flex items-center">
        <img className="w-24" src="logo.png" alt="LogoSite" />
        <p className="text-lg">Red - Flower</p>
      </div>
      <div className="flex justify-end px-8 flex-grow">
        <Link className="flex items-center justify-center w-16" href={"#"}>
          <ShoppingCart size={40}/>
        </Link>
        <Link className="flex items-center justify-center w-16" href={"#"}>
          <User size={40}/>
        </Link>
      </div>
    </header>
  );
}

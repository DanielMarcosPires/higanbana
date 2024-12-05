/* eslint-disable @next/next/no-img-element */
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex bg-[#222] p-4">
      <div className="flex items-center">
        <img className="w-24" src="Profile.png" alt="LogoSite" />
        <p className="text-lg">Red - Flower</p>
      </div>
      <div className="flex items-center gap-4 justify-end px-8 flex-grow font-bold">
        <Link className="flex items-center justify-center w-16" href={"#"}>
          <ShoppingCart size={40} />
        </Link>
        <Link
          className="flex items-center bg-red-800 py-3 px-5 rounded-xl shadow-2xl justify-center "
          href={"login"}
        >
          <p>Login</p>
        </Link>
      </div>
    </header>
  );
}

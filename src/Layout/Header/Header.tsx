"use client";
/* eslint-disable @next/next/no-img-element */
import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [modal, setIsModal] = useState(false);
  return (
    <header className="flex bg-[#222] p-4">
      <div className="flex items-center">
        <img className="w-24" src="Profile.png" alt="LogoSite" />
        <p className="text-lg hidden sm:inline">Red - Flower</p>
      </div>
      <div className="flex items-center gap-4 justify-end px-8 flex-grow font-bold">
        <Link
          className=" items-center justify-center w-16 hidden sm:flex"
          href={"#"}
        >
          <ShoppingCart size={40} />
        </Link>
        <Link
          className=" items-center bg-red-800 py-3 px-5 rounded-xl shadow-2xl justify-center  hidden sm:flex"
          href={"login"}
        >
          <p>Login</p>
        </Link>
        <button
          onClick={() => {
            setIsModal(!modal);
          }}
          className="sm:hidden"
        >
          <Menu size={40} />
        </button>
      </div>
      {modal && (
        <>
          <div className="absolute top-0 right-0 w-[60%] h-screen shadow-2xl bg-[#222] p-4">
            <header className="py-4 flex justify-between items-center">
              <h2 className="text-xl">Modal</h2>
              <button
                onClick={() => {
                  setIsModal(!modal);
                }}
                className="sm:hidden"
              >
                <X size={40} />
              </button>
            </header>
            <main className="flex flex-col gap-4">
              <Link
                className=" items-center bg-red-800 py-3 px-5 rounded-xl shadow-2xl justify-center  flex"
                href={"login"}
              >
                <p>Login</p>
              </Link>
            </main>
          </div>
        </>
      )}
    </header>
  );
}

/* eslint-disable @next/next/no-img-element */
import Input from "@/Components/Input/Input";
import { ArrowLeft, CircleUser } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <ul className="flex justify-between h-screen">
      <li className="flex flex-col items-center justify-evenly flex-grow">
        <main className="flex flex-col w-[350px] gap-4 py-4 bg-gradient-to-t from-red-900/50 rounded-lg border-red-800 p-5">
          <header className="w-full">
            <Link href={"/"}>
              <ArrowLeft color="#fff" />
            </Link>
          </header>
          <section className="flex flex-col  gap-5 items-center ">
            <div className="flex flex-col gap-2 items-center">
              <img width={150} src="profile.svg" alt="" />
              <h2 className="font-bold text-xl">Seja bem vindo!</h2>
            </div>
            <form
              className="flex w-full items-center justify-center gap-3 flex-col py-2"
              action=""
            >
              <Input>Login</Input>
              <Input type="password">Password</Input>
              <button className="bg-red-800 p-4 rounded-xl font-bold w-[220px]">
                Entrar
              </button>
            </form>
          </section>
        </main>
      </li>
      <li>
        <img width={700} src="flor.png" alt="flor" />
      </li>
    </ul>
  );
}

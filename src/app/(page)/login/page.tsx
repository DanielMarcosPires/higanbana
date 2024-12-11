"use server"
/* eslint-disable @next/next/no-img-element */
import Input from "@/Components/Input/Input";
import { Users } from "@/database/mongodb";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import Form from "./Form/Form";
export default async function page() {
  const users = await Users();

  console.log(users[0].password)
  // console.log(await argon2.verify(users[0].password, "Adimin1@#"));
  //Adimin1@#
 
  
  return (
    <ul className="flex justify-between h-screen">
      <li className="flex flex-col items-center justify-evenly flex-grow">
        <div className="absolute xl:relative xl:w-full flex justify-center items-center left-0 top-0 w-screen  h-screen">
          <main className="flex flex-col border w-[350px] gap-4 py-4 bg-gradient-to-t from-red-900/60 rounded-lg border-red-800 p-5 ">
            <header className="w-full">
              <Link href={"/"}>
                <ArrowLeft color="#fff" />
              </Link>
            </header>
            <section className="flex flex-col  gap-5 items-center">
              <div className="flex flex-col gap-2 items-center">
                <img width={150} src="profile.svg" alt="" />
                <h2 className="font-bold text-xl">Seja bem vindo!</h2>
              </div>
              <Form
                className="flex w-full items-center justify-center gap-3 flex-col py-2"
              >
                <Input name="login" type="text" required>
                  Login
                </Input>
                <Input name="password" type="password" required>
                  Password
                </Input>
                <button className="bg-red-800 p-4 rounded-xl font-bold w-[220px]">
                  Entrar
                </button>
              </Form>
            </section>
          </main>
        </div>
      </li>
      <li>
        <img width={700} src="flor.png" alt="flor" />
      </li>
    </ul>
  );
}

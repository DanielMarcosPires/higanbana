import { Search } from "lucide-react";
import React from "react";

export default function Atendimento() {
  return (
    <section>
      <header className="flex justify-center bg-[#222]">
        <h2 className="text-2xl py-4">Atendimento</h2>
      </header>
      <form className="bg-[#555] p-5">
        <fieldset className="flex bg-[#333] rounded-lg items-center gap-4 flex-col py-10">
          <h3 className="text-2xl">Olá, como podemos ajudar!</h3>
          <div className="flex justify-center w-full">
            <input
              className="rounded-l-xl px-4 py-3 w-2/5 text-lg text-black"
              placeholder="Digite aqui!..."
            />
            <button className="flex rounded-r-lg bg-[#444] justify-center items-center border w-16">
              <Search />
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

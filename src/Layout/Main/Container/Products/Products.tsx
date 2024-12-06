/* eslint-disable @next/next/no-img-element */
import React, { ComponentProps } from "react";

export default function Products({children}:ComponentProps<"div">) {
  return (
    <section className="bg-[#555] h-full overflow-auto" >
      <h2 className="font-bold text-2xl bg-black/70 text-center p-4">
        Promoção
      </h2>
      <nav className="font-bold p-4">
        <div>
          <ul className="inline-flex items-start flex-wrap gap-4 bg-black/30 w-full p-4">
           {children}
          </ul>
        </div>
      </nav>
    </section>
  );
}

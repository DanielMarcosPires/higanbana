/* eslint-disable @next/next/no-img-element */
"use client";
import { X } from "lucide-react";
import React, { ComponentProps, ReactNode, useState } from "react";

interface LayoutStructureProps extends ComponentProps<"div"> {
  children: ReactNode;
}
export default function LayoutStructure({ children }: LayoutStructureProps) {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="relative flex justify-between flex-col h-screen">
      {isActive && (
        <div className="flex justify-center items-center absolute bg-black/40 w-full h-full">
          <section className="bg-[#111] w-[406px] p-5 rounded-xl">
            <header className="flex items-center py-2">
              <button
                onClick={() => setIsActive(!isActive)}
                className="border-2 rounded-full"
              >
                <X />
              </button>
              <div className="flex-grow flex justify-center">
                <img className="relative right-5" src="logo.png" alt="logo" />
              </div>
            </header>
            <div className="flex flex-col gap-2">
              <p>
                A Red Flower está sempre em busca de formas de melhorar sua
                experiência de compra e manter você informado(a) sobre nossas
                melhores ofertas e promoções.
              </p>
              <p>
                Gostaríamos de solicitar sua autorização para enviar
                notificações diretamente ao seu dispositivo, informando sobre
                descontos exclusivos, novos produtos e ofertas especiais que
                podem lhe interessar.
              </p>
              <p>
                Com sua permissão, poderemos garantir que você seja um(a)
                dos(as) primeiros(as) a receber nossas promoções, ajudando você
                a aproveitar as melhores oportunidades.
              </p>
              <p>
                Se desejar permitir o envio de notificações, por favor, confirme
                sua autorização clicando no botão abaixo.
              </p>
              <p>
                Agradecemos a sua confiança e esperamos continuar proporcionando
                a você a melhor experiência de compra!
              </p>
              <p>Atenciosamente, Red Flower</p>
              <footer className="flex justify-end">
                <button
                  className="bg-red-800 p-4 rounded-xl"
                  onClick={() => setIsActive(!isActive)}
                >
                  Concordo com os termos...
                </button>
              </footer>
            </div>
          </section>
        </div>
      )}
      {children}
    </div>
  );
}

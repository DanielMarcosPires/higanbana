/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ProductProps {
  price: number;
  title: string;
  src: string;
  tipo: string;
  discount?: number; // Porcentagem de desconto opcional
}

function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function calculateDiscountPrice(price: number, discount: number) {
  return price - price * (discount / 100);
}
function formatName(title: string) {
  const lastLetter = title[0].toLocaleUpperCase();
  const remainingName = title.slice(1);
  const formattedName = lastLetter + remainingName;

  console.log(formattedName);
  return formattedName;
}
export default function Product({
  price,
  src,
  title,
  tipo,
  discount = 0,
}: ProductProps) {
  const formattedOriginalPrice = formatPrice(price);
  const discountedPrice = calculateDiscountPrice(price, discount);
  const formattedDiscountedPrice = formatPrice(discountedPrice);
  const formattedName = formatName(title);
  const formettedTipo = formatName(tipo);
  return (
    <li className="inline-flex flex-grow max-w-[300px] flex-col bg-[#222] rounded-lg">
      <img
        className="object-cover border-4 border-black rounded-t-lg"
        src={src}
        alt="Produto"
      />
      <div className="flex flex-col p-2">
        <h3 className="text-xl">{formattedName}</h3>
        <h4>{formettedTipo}</h4>
        <p className="text-green-500 text-xl">De: {formattedOriginalPrice}</p>
        {discount !== 0 && (
          <p className="text-red-600 text-xl">{discount}% de Desconto</p>
        )}
        <span className="text-red-600 text-2xl">
          Por: {formattedDiscountedPrice} à vista
        </span>
      </div>
    </li>
  );
}

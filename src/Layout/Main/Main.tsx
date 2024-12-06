"use client";
import React, { useEffect, useState } from "react";
import Banner from "./Container/Banner/Banner";
import Navbar from "./Container/Navbar/Navbar";
import LinkNavigator from "@/Components/LinkNavigator";
import Products from "./Container/Products/Products";
import Product from "@/Components/Product/Product";
import Atendimento from "./Container/Atendimento/Atendimento";

interface product {
  id: number;
  name: string;
  price: number;
  promo?: number;
  image: string;
  description: string;
  type: string;
}
export default function Main() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/higanbanaProducts")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  function removeHashFromUrl(url: string) {
    return url.replace(/\/?#/, "");
  }
  console.log();
  return (
    <main
      className="flex-grow overflow-y-auto border"
      style={{
        overflow: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Banner className="h-[350px] md:h-auto object-cover" style={{objectPosition:"46% 0"}} src="banner.png" alt="hero" />
      <Navbar>
        <LinkNavigator href={"#promocao"} extract={setFilter}>
          Promoção
        </LinkNavigator>
        <LinkNavigator href={"#microfone"} extract={setFilter}>
          Microfone
        </LinkNavigator>
        <LinkNavigator href={"#notebook"} extract={setFilter}>
          Notebooks
        </LinkNavigator>
        <LinkNavigator href={"#monitor"} extract={setFilter}>
          Monitores
        </LinkNavigator>
      </Navbar>
      <Products>
        {products
          .filter(
            (product: product) => product.type === removeHashFromUrl(filter)
          )
          .map((_product: product) => (
            <Product
              key={_product.id}
              price={_product.price}
              title={_product.name}
              discount={_product.promo}
              src={_product.image || "default_image.webp"}
              tipo={_product.type}
            />
          ))}
      </Products>
        <Atendimento />
    </main>
  );
}

"use client";
import React from "react";
import Banner from "./Container/Banner/Banner";
import Navbar from "./Container/Navbar/Navbar";
import LinkNavigator from "@/Components/LinkNavigator";
import Products from "./Container/Products/Products";
import { useSearchParams } from "next/navigation";
import Product from "@/Components/Product/Product";

export default function Main() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  return (
    <main
      className="flex-grow border border-blue-500 overflow-y-auto"
      style={{
        overflow: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Banner src="banner.png" alt="hero" />
      <Navbar>
        <LinkNavigator href={"#promocao"}>Promoção</LinkNavigator>
        <LinkNavigator href={"#Hardwere"}>Hardwere</LinkNavigator>
        <LinkNavigator href={"#Notebooks"}>Notebooks</LinkNavigator>
        <LinkNavigator href={"#Monitores"}>Monitores</LinkNavigator>
        <LinkNavigator href={"#Atendimento"}>Atendimento</LinkNavigator>
      </Navbar>
      <Products>
        <Product
          price={190}
          title={
            "Controle Sem Fio Gamesir Nova Lite Para Pc/switch Cor Space Purple"
          }
          src={"controle.webp"}
        />
      </Products>
    </main>
  );
}

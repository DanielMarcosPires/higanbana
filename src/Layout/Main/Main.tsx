import Banner from "./Container/Banner/Banner";
import Navbar from "./Container/Navbar/Navbar";
import LinkNavigator from "@/Components/LinkNavigator";
import Products from "./Container/Products/Products";
import Atendimento from "./Container/Atendimento/Atendimento";
import { MongoProduct } from "./Container/Products/MongoProduct/MongoProduct";
import { Suspense } from "react";
import Loading from "@/Components/Loading/Loading";

export default function Main() {
  return (
    <main
      className="flex-grow overflow-y-auto"
      style={{
        overflow: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Banner
        className="h-[350px] md:h-auto object-cover"
        style={{ objectPosition: "46% 0" }}
        src="banner.png"
        alt="hero"
      />
      <Navbar>
        <LinkNavigator href={"#promocao"}>Promoção</LinkNavigator>
        <LinkNavigator href={"#microfone"}>Microfone</LinkNavigator>
        <LinkNavigator href={"#notebook"}>Notebooks</LinkNavigator>
        <LinkNavigator href={"#monitor"}>Monitores</LinkNavigator>
      </Navbar>
      <Products>
        <Suspense fallback={<Loading/>}>
          <MongoProduct />
        </Suspense>
      </Products>
      <Atendimento />
    </main>
  );
}

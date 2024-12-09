"use server";
import Product from "@/Components/Product/Product";
import { client } from "@/database/mongodb";
import React from "react";

interface ItemProducts {
  name: string;
  price: number;
  promo: number;
  image: string;
  descricao: string;
  type: string;
}

export async function MongoProduct() {
  const response = await client.connect();
  const db = response.db("produtos");
  const collection = await db.collection("product");
  const list = await collection.find({}).toArray();

  return (
    <>
      {list.map((item: ItemProducts) => (
        <Product
          key={item.name}
          price={item.price}
          discount={item.promo}
          title={item.name}
          src={item.image}
          tipo={item.type}
        />
      ))}
    </>
  );
}

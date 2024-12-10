/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";
import Product from "@/Components/Product/Product";
import { client } from "@/database/mongodb";
import { Loader2 } from "lucide-react";
import { WithId, Document } from "mongodb";
import React from "react";

interface ItemProducts {
  name: string;
  price: number;
  promo: number;
  image: string;
  descricao: string;
  type: string;
}

// Função para verificar se um documento segue a interface ItemProducts
function isItemProducts(doc: Document): doc is WithId<ItemProducts> {
  return (
    typeof doc.name === "string" &&
    typeof doc.price === "number" &&
    typeof doc.promo === "number" &&
    typeof doc.image === "string" &&
    typeof doc.descricao === "string" &&
    typeof doc.type === "string"
  );
}

export async function MongoProduct() {
  try {
    const response = await client.connect();
    const db = response.db("produtos");
    const collection = await db.collection("product");
    const docs = await collection.find({}).toArray();

    const list: WithId<ItemProducts>[] = docs.filter(isItemProducts);

    return (
      <>
        {list.map((item) => (
          <Product
            key={item._id.toString()}
            price={item.price}
            discount={item.promo}
            title={item.name}
            src={item.image}
            tipo={item.type}
          />
        ))}
      </>
    );
  } catch (error) {
    return (
      <>
        <div className="flex gap-2 items-center">
          <Loader2 className="animate-spin" />
          <h2 className="text-2xl">Loading...</h2>
        </div>
      </>
    );
  }
}

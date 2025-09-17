// export default async function ProductList( {
//     params,
// }: {
//     params: Promise <{productId: string} >;
// }) {
//     const productId = (await params).productId;
//     return <h1>Details about product {productId} </h1> 
// }
// src/app/products/[productId]/page.tsx

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  return {
    title: `Product ${params.productId}`,
  };
}

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details about product {params.productId}</h1>;
}
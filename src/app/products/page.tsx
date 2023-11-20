import { Metadata } from "next";
import React from "react";
import ProductContainer from "../containers/productContainer";
import StoreProvider from "@/store/Provider";

type Props = {};
export const metadata: Metadata = {
  title: "Acme | Ürünler",
  description: "Producst of Acme Company",
};
const ProductPage = (props: Props) => {
  return (
    <StoreProvider>
      <ProductContainer />
    </StoreProvider>
  );
};

export default ProductPage;

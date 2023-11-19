import { Metadata } from "next";
import React from "react";
import ProductContainer from "../containers/productContainer";
import StoreProvider from "@/store/Provider";

type Props = {};
export const metadata: Metadata = {
  title: "Acme | Products",
  description: "Producst of Acme Company",
};
const ProductPage = (props: Props) => {
  return (
    <StoreProvider>
      <ProductContainer />
      <div className="fixed z-[-1]  bg-gradient-to-b from-[#f0eee8c6] from-10% to-[#ccc6f5e2] to-90% top-0 left-0 right-0 bottom-0"></div>
      <div className="overlay"></div>
    </StoreProvider>
  );
};

export default ProductPage;

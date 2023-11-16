import { Metadata } from "next";
import React from "react";
import ProductContainer from "../containers/productContainer";

type Props = {};
export const metadata: Metadata = {
  title: "Acme | Products",
  description: "Producst of Acme Company",
};
const ProductPage = (props: Props) => {
  return <ProductContainer />;
};

export default ProductPage;

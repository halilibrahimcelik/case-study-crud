import StoreProvider from "@/store/Provider";
import React from "react";

type Props = {};

const ProductContainer = (props: Props) => {
  return (
    <StoreProvider>
      <div>ProductContainer</div>
    </StoreProvider>
  );
};

export default ProductContainer;

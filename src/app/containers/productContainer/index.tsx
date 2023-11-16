"use client";
import Wrapper from "@/app/components/UI/Wrapper";
import {
  fetchProducsList,
  getProductList,
} from "@/store/features/product-slice";
import { useAppDispatch } from "@/store/store";
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import SearchForm from "./searchProduct";
import AddProduct from "./addProduct";

type Props = {};

const ProductContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const productList = useSelector(getProductList);

  // Memoize the fetchProducsList
  const memoizedFetchProductsList = useMemo(() => {
    return () => dispatch(fetchProducsList());
  }, [dispatch]);

  useEffect(() => {
    memoizedFetchProductsList();
    return () => {};
  }, [memoizedFetchProductsList]);

  console.log(productList);
  return (
    <Wrapper component="section">
      <div className="grid grid-col-1 md:grid-col-2">
        <AddProduct />
        <SearchForm />
      </div>
    </Wrapper>
  );
};

export default ProductContainer;

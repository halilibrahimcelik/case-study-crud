"use client";
import {
  fetchProducsList,
  getProductList,
} from "@/store/features/product-slice";
import { useAppDispatch } from "@/store/store";
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

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
    <>
      <div>ProductContainer</div>
    </>
  );
};

export default ProductContainer;

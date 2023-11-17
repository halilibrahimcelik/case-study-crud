"use client";
import Wrapper from "@/app/components/UI/Wrapper";
import {
  fetchProducsList,
  getLoading,
  getProductList,
} from "@/store/features/product-slice";
import { useAppDispatch } from "@/store/store";
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import SearchForm from "./searchProduct";
import AddProduct from "./addProduct";
import ProductCard from "./productCard";
import Spinner from "@/app/components/spinner";
import { Products } from "@/lib/types";
import { Pagination } from "@mui/material";
type Props = {};

const ProductContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const loadingStatus = useSelector(getLoading);
  const productList: Products[] = useSelector(getProductList);
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 6;

  // Memoize the fetchProducsList
  const memoizedFetchProductsList = useMemo(() => {
    return () => dispatch(fetchProducsList());
  }, [dispatch]);

  useEffect(() => {
    memoizedFetchProductsList();
    return () => {};
  }, [memoizedFetchProductsList]);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = productList.slice(startIndex, endIndex);
  console.log(productList);
  console.log(displayedProducts);
  const handlePageChange = (event: React.ChangeEvent<any>, newPage: number) => {
    setPage(newPage);
  };
  return (
    <Wrapper component="section">
      <div className="py-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        <AddProduct />
        <SearchForm />
      </div>
      <div className="py-5">
        {loadingStatus ? (
          <Spinner />
        ) : (
          <>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {productList.length === 0 && loadingStatus ? (
                <p>Şu an gösterilecek bir ürün bulunmamaktadır</p>
              ) : (
                displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              )}
            </ul>
            {productList.length > 6 && (
              <div className="flex py-5 justify-center w-full">
                <Pagination
                  variant="text"
                  size="large"
                  siblingCount={1}
                  onChange={handlePageChange}
                  className="w-fit"
                  page={page}
                  count={Math.ceil(productList.length / 6)}
                  color="secondary"
                />
              </div>
            )}
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default ProductContainer;

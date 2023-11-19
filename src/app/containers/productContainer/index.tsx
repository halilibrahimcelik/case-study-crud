"use client";
import Wrapper from "@/app/components/UI/Wrapper";
import {
  fetchProducsList,
  getLoading,
  getProductList,
  updateProduct,
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
import ProductTheme from "./customTheme";
import { LayoutGroup, motion } from "framer-motion";
import FormModal from "./formModal";
type Props = {};

const ProductContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const loadingStatus = useSelector(getLoading);
  const productList: Products[] = useSelector(getProductList);
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState<number | null>(null);
  const handleClose = () => setOpen(false);
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
  const handlePageChange = (event: React.ChangeEvent<any>, newPage: number) => {
    setPage(newPage);
  };
  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(id);
    dispatch(updateProduct({ id: id!, ...data }));
    setOpen(false);
  };
  const handleId = (id: number) => {
    setId(id);
  };
  return (
    <Wrapper component="section">
      <ProductTheme>
        <div className="py-5 grid grid-cols-1 md:grid-cols-2 gap-10">
          <AddProduct />
          <SearchForm />
        </div>
        <div className="py-5">
          {loadingStatus ? (
            <Spinner />
          ) : (
            <>
              <LayoutGroup>
                {!loadingStatus && (
                  <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {productList.length === 0 && loadingStatus ? (
                      <li>
                        <p>Şu an gösterilecek bir ürün bulunmamaktadır</p>
                      </li>
                    ) : (
                      displayedProducts.map((product, index) => (
                        <ProductCard
                          index={index}
                          key={product.id}
                          product={product}
                          handleId={handleId}
                          setOpen={setOpen}
                        />
                      ))
                    )}
                  </motion.ul>
                )}
              </LayoutGroup>
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
                    color="primary"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </ProductTheme>
      <FormModal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleUpdate}
        id={id!}
      />
    </Wrapper>
  );
};

export default ProductContainer;

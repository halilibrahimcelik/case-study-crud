"use client";
import CustomButon from "@/app/components/UI/button";
import { useAppDispatch } from "@/store/store";
import React from "react";

import FormModal from "../formModal";
import { addProduct } from "@/store/features/product-slice";

type Props = {};

const AddProduct = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const dispatch = useAppDispatch();
  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    dispatch(addProduct({ productInfo: data }));
    setOpen(false);
    event.currentTarget.reset();
  };
  return (
    <div className="flex  items-end">
      <CustomButon
        onClick={() => setOpen(true)}
        color="secondary"
        text="Ürün Ekleme"
        variant="contained"
        customClass="w-[20rem]"
      />
      <FormModal
        handleSubmit={handleAddProduct}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default AddProduct;

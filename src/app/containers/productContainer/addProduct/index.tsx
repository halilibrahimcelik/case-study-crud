"use client";
import CustomButon from "@/app/components/UI/button";
import { useAppDispatch } from "@/store/store";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FormModal from "../formModal";
import { addProduct } from "@/store/features/product-slice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

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
  };
  return (
    <>
      <CustomButon
        onClick={() => setOpen(true)}
        color="secondary"
        text="Ürün Ekleme"
        variant="contained"
      />
      <Modal
        keepMounted
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <FormModal handleSubmit={handleAddProduct} />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default AddProduct;

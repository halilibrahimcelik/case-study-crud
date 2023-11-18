"use client";
import { Box, TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";

import SubtitlesIcon from "@mui/icons-material/Subtitles";
import DescriptionIcon from "@mui/icons-material/Description";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import StarRateIcon from "@mui/icons-material/StarRate";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CategoryIcon from "@mui/icons-material/Category";
import CustomButon from "@/app/components/UI/button";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useSelector } from "react-redux";
import { get } from "http";
import { getProductbyId } from "@/store/features/product-slice";
import { ProductState } from "@/store/features/product-slice";
type Props = {
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    n?: React.MouseEventHandler<HTMLButtonElement> | number
  ) => void;
  handleClose: () => void;
  open: boolean;
  id?: number;
};
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

const FormModal = ({ handleSubmit, open, handleClose, id }: Props) => {
  const selectedProduct = useSelector((state: { products: ProductState }) =>
    getProductbyId(state, id as number)
  );
  return (
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
          <Box
            onSubmit={handleSubmit}
            component={"form"}
            className="w-full flex flex-col gap-3"
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <SubtitlesIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                className="w-full"
                required
                name="title"
                id="input-title"
                label="Ürün Adı"
                variant="standard"
                defaultValue={selectedProduct?.title}
                focused={id ? true : false}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <DescriptionIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <Textarea
                className="w-full"
                required
                name="description"
                id="input-description"
                placeholder="Ürün Açıklaması"
                color="neutral"
                minRows={1}
                size="lg"
                variant="outlined"
                defaultValue={selectedProduct?.description}
                autoFocus={id ? true : false}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <CurrencyLiraIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                required
                className="w-full"
                name="price"
                id="input-price"
                label="Fiyat"
                type="number"
                variant="standard"
                defaultValue={selectedProduct?.price}
                focused={id ? true : false}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <StarRateIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                className="w-full"
                required
                name="rating"
                type="number"
                id="input-rating"
                label="Puan"
                variant="standard"
                defaultValue={selectedProduct?.rating}
                focused={id ? true : false}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <BusinessCenterIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                required
                className="w-full"
                name="brand"
                id="input-brand"
                label="Marka Adı"
                variant="standard"
                defaultValue={selectedProduct?.brand}
                focused={id ? true : false}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <CategoryIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                required
                name="category"
                className="w-full"
                id="input-category"
                label="Kategori"
                variant="standard"
                defaultValue={selectedProduct?.category}
                focused={id ? true : false}
              />
            </Box>
            <CustomButon
              type="submit"
              text="Ekle"
              color="inherit"
              variant="outlined"
            />
          </Box>{" "}
        </Box>
      </Fade>
    </Modal>
  );
};

export default FormModal;

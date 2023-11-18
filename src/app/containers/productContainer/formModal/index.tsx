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
type Props = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleClose: () => void;
  open: boolean;
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

const FormModal = ({ handleSubmit, open, handleClose }: Props) => {
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

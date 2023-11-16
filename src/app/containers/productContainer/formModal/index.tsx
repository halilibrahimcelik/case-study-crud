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
type Props = {};

const FormModal = (props: Props) => {
  return (
    <Box component={"form"} className="w-full flex flex-col gap-3">
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
        <DescriptionIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <Textarea
          className="w-full"
          required
          contentEditable="true"
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
        <CurrencyLiraIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
        <BusinessCenterIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
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
    </Box>
  );
};

export default FormModal;

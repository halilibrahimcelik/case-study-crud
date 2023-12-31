import { Products } from "@/lib/types";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip, IconButton } from "@mui/material";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import StarRateIcon from "@mui/icons-material/StarRate";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CategoryIcon from "@mui/icons-material/Category";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Alert from "@mui/material/Alert";
import Grow from "@mui/material/Grow";
import CloseIcon from "@mui/icons-material/Close";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/store/store";
import { deleteProduct } from "@/store/features/product-slice";
type Props = {
  product: Products;
  index: number;
  handleId: (n: number) => void;
  setOpen: (n: boolean) => void;
};

const ProductCard = ({ product, index, handleId, setOpen }: Props) => {
  const { title, brand, description, thumbnail, category, price, rating } =
    product;
  const [toggle, setToggle] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    setToggle(true);
    if (toggle) {
      dispatch(deleteProduct({ id: product.id }));
    }
  };
  useEffect(() => {
    if (toggle) {
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setToggle(false);
      }, 3000);
      return () => {
        clearTimeout(timeId);
      };
    }
  }, [toggle]);

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 * index, ease: "backIn" },
      }}
      exit={{ opacity: 0, y: -100 }}
      className="group flex justify-center "
    >
      <Grow in={toggle}>
        <Alert
          severity="warning"
          sx={{ position: "fixed", left: 10, zIndex: 100, top: 100 }}
          action={
            <>
              <IconButton
                aria-label="close"
                color="inherit"
                title=""
                size="small"
                onClick={() => {
                  setToggle(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                aria-label="close"
                title="Evet"
                color="inherit"
                size="small"
                onClick={() => {
                  handleDelete();
                }}
              >
                <DoneAllIcon fontSize="inherit" />
              </IconButton>
            </>
          }
        >
          {product.title} adlı ürünü silmek istediğinden emin misin?
        </Alert>
      </Grow>

      <Card className="w-full h-full sm:max-w-[32rem]">
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "start",
            gap: "1rem",
            position: "relative",
            paddingBottom: "2rem",
          }}
        >
          <div className="relative w-full h-[250px] lg:h-[300px]">
            <Image
              src={thumbnail}
              alt="green iguana"
              fill
              blurDataURL={thumbnail}
              placeholder="blur"
              loading="lazy"
              className="w-full h-[250px] object-cover "
            />
          </div>
          <CardContent
            sx={{ paddingTop: 0 }}
            className="flex flex-col w-full gap-2"
          >
            <div className="flex gap-2 justify-between">
              <h4 className="text-2xl lg:text-3xl"> {title}</h4>
              <Chip
                title="Ürün Puanı"
                variant="outlined"
                color="primary"
                sx={{ borderRadius: "8px" }}
                icon={<StarRateIcon />}
                label={rating}
              />
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <Chip
                title="Fiyat"
                variant="outlined"
                color="primary"
                sx={{ borderRadius: "8px" }}
                icon={<CurrencyLiraIcon />}
                label={price}
              />
              <Chip
                title="Marka"
                variant="outlined"
                color="primary"
                sx={{ borderRadius: "8px" }}
                icon={<BusinessCenterIcon />}
                label={brand}
              />
              <Chip
                title="Kategori"
                variant="outlined"
                color="primary"
                sx={{ borderRadius: "8px" }}
                icon={<CategoryIcon />}
                label={category}
              />
            </div>

            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <div className="self-end flex gap absolute bottom-0 right-2">
            <div className=" p-[10px]   opacity-0 group-hover:opacity-100 transition  delay-200 duration-200 ease-in">
              <Chip
                onClick={() => (handleId(product.id), setOpen(true))}
                variant="outlined"
                color="primary"
                sx={{ borderRadius: "8px" }}
                icon={<DesignServicesIcon />}
                label="Düzenle"
              />
            </div>
            <div className=" p-[10px]   opacity-0 group-hover:opacity-100 transition  delay-200 duration-200 ease-in">
              <Chip
                onClick={handleDelete}
                variant="outlined"
                color="primary"
                sx={{ borderRadius: "8px" }}
                icon={<DeleteForeverIcon />}
                label="Ürünü sil"
              />
            </div>
          </div>
        </CardActionArea>
      </Card>
    </motion.li>
  );
};

export default ProductCard;

import { Products } from "@/lib/types";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip } from "@mui/material";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import StarRateIcon from "@mui/icons-material/StarRate";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CategoryIcon from "@mui/icons-material/Category";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/store/store";
type Props = {
  product: Products;
  index: number;
};

const ProductCard = ({ product, index }: Props) => {
  const { title, brand, description, thumbnail, category, price, rating } =
    product;
  const dispatch = useAppDispatch();

  const handleUpdate = (
    e: React.MouseEventHandler<HTMLButtonElement> | number
  ) => {
    console.log(e);
  };
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1 * index, ease: "backIn" },
      }}
      className=""
    >
      <Card className="w-full h-full sm:max-w-[32rem] ">
        <CardActionArea
          onClick={() => handleUpdate(product.id)}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "start",
            gap: "1rem",
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
              className="w-full h-[250px] object-cover p-2"
            />
          </div>
          <CardContent className="flex flex-col w-full gap-2">
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
        </CardActionArea>
      </Card>
    </motion.li>
  );
};

export default ProductCard;

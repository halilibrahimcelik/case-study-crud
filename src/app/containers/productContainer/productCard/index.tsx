import { Products } from "@/lib/types";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip } from "@mui/material";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import DescriptionIcon from "@mui/icons-material/Description";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import StarRateIcon from "@mui/icons-material/StarRate";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CategoryIcon from "@mui/icons-material/Category";
import Image from "next/image";

type Props = {
  product: Products;
};

const ProductCard = ({ product }: Props) => {
  const { title, brand, description, thumbnail, category, price, rating } =
    product;
  return (
    <li className="flex justify-center">
      <Card className="w-full sm:max-w-[32rem] ">
        <CardActionArea>
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
          <CardContent className="flex flex-col gap-2">
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
    </li>
  );
};

export default ProductCard;

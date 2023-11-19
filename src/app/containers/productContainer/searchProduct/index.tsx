import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputBase, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { useAppDispatch } from "@/store/store";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import Chip from "@mui/material/Chip";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import {
  getAllProducts,
  resetProduct,
  searchProducts,
} from "@/store/features/product-slice";
import { useSelector } from "react-redux";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.25),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: "25ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));
type Props = {};

const SearchForm = (props: Props) => {
  const [searchCategory, setSearchCategory] = React.useState<
    "title" | "brand" | "category"
  >("title");
  const dispatch = useAppDispatch();
  const defaultProducts = useSelector(getAllProducts);
  const handleCategory = (event: SelectChangeEvent) => {
    event.target.value as string;
    setSearchCategory(event.target.value as "title" | "brand" | "category");
  };
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search") as string;
    const filteredProducts = defaultProducts.filter((product) =>
      product[searchCategory]!.toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
        ? product
        : null
    );

    dispatch(searchProducts({ filteredProducts }));
  };
  const handleReset = () => {
    dispatch(searchProducts({ filteredProducts: defaultProducts }));
  };
  return (
    <div className="col-span-2  flex flex-col gap-4">
      <div>
        <Tooltip title="Kategori seçimize göre arama yapabilrisiniz" arrow>
          <NewReleasesIcon
            className="cursor-pointer"
            color="primary"
            fontSize="small"
          />
        </Tooltip>
      </div>
      <div className="gap-2  flex items-center">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {searchCategory === "title"
                ? "Ürün Adı"
                : searchCategory === "category"
                ? "Kategori"
                : "Marka"}
            </InputLabel>
            <Select
              color="primary"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={searchCategory}
              label={
                searchCategory === "title"
                  ? "Ürün Adı"
                  : searchCategory === "category"
                  ? "Kategori"
                  : "Marka"
              }
              onChange={handleCategory}
            >
              <MenuItem value={"title"}>Ürün Adı</MenuItem>
              <MenuItem value={"category"}>Kategori</MenuItem>
              <MenuItem value={"brand"}>Marka</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box onSubmit={handleSearch} component={"form"}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              name="search"
              placeholder="Ürün Ara..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
        <Chip
          sx={{ borderRadius: "4px" }}
          clickable
          icon={<RestartAltIcon />}
          onClick={handleReset}
          label="Sıfırla"
          color="primary"
        />
      </div>
    </div>
  );
};

export default SearchForm;

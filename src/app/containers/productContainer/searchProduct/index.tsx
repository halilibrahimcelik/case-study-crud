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
  height: "100%",
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

    [theme.breakpoints.up("lg")]: {
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
  const formRef = React.useRef<HTMLFormElement>(null);
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
    formRef.current!.reset();
    console.log(defaultProducts);
    dispatch(searchProducts({ filteredProducts: defaultProducts }));
  };
  return (
    <div className="md:col-span-2  flex flex-col gap-4 relative">
      <div className="absolute md:relative top-[-30px] md:top-0 left-0">
        <Tooltip
          title="Arama yapmak istediğiniz ürünlerin kategorisini seçerek arama yapabilirsiniz."
          arrow
        >
          <NewReleasesIcon
            className="cursor-pointer"
            color="primary"
            fontSize="small"
          />
        </Tooltip>
      </div>
      <div className="gap-4 md:gap-2  flex flex-wrap md:flex-nowrap items-center justify-between">
        <Box className="w-full sm:w-[120px]">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {searchCategory === "title"
                ? "Ürün Adı"
                : searchCategory === "category"
                ? "Kategori"
                : "Marka"}
            </InputLabel>
            <Select
              SelectDisplayProps={{ style: { padding: "8px 14px" } }}
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
        <Box
          className="w-full sm:w-[unset]"
          ref={formRef}
          onSubmit={handleSearch}
          component={"form"}
        >
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
          className="w-full  mx-auto sm:m-0   sm:w-fit self-end"
          sx={{ borderRadius: "4px" }}
          clickable
          title="Filtreyi sıfırla "
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

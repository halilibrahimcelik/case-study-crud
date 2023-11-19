import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
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
  const [searchCategory, setSearchCategory] = React.useState("title");
  const handleChange = (event: SelectChangeEvent) => {
    event.target.value as string;
    setSearchCategory(event.target.value as string);
  };
  return (
    <div className="col-span-2 gap-2 flex items-center">
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
            onChange={handleChange}
          >
            <MenuItem value={"title"}>Ürün Adı</MenuItem>
            <MenuItem value={"category"}>Kategori</MenuItem>
            <MenuItem value={"brand"}>Marka</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Ara..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
    </div>
  );
};

export default SearchForm;

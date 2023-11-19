import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
type Props = {};

const SearchForm = (props: Props) => {
  const [searchCategory, setSearchCategory] = React.useState("title");
  const handleChange = (event: SelectChangeEvent) => {
    event.target.value as string;
    setSearchCategory(event.target.value as string);
  };
  console.log(searchCategory);
  return (
    <div>
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
    </div>
  );
};

export default SearchForm;

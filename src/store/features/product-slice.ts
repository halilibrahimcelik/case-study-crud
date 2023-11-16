import { createSlice } from "@reduxjs/toolkit";
import { Products } from "@/lib/types";
interface ProductState {
  products: Products[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;

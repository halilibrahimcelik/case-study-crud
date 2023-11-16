import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "@/lib/types";
import placeholderImage from "@/assets/default-product-image.png";
interface ProductState {
  products: Products[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};
const URL = `https://dummyjson.com/products`;
export const fetchProducsList = createAsyncThunk(
  "products/fetchProductsList",
  async () => {
    const response = await fetch(URL, { method: "GET", cache: "default" });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    if (response.ok) return data?.products;
  }
);
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProduct: (state, action) => {
      const { id, ...updatedProduct }: Products = action.payload;
      const updatedProducts = state.products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      );

      return { ...state, products: updatedProducts };
    },
    deleteProduct: (state, action) => {
      const { id } = action.payload;
      const updatedProducts = state.products.filter(
        (product) => product.id !== id
      );
      state.products = updatedProducts;
    },
    addProduct: (state, action) => {
      const { productInfo } = action.payload;
      const randomId = Math.floor(Math.random() * 1000) + 1;
      const newProduct = {
        id: randomId,
        thumbnail: placeholderImage.src,
        ...productInfo,
      };
      console.log(newProduct);
      state.products.unshift(newProduct);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducsList.pending, (state, action: PayloadAction) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducsList.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      });
  },
});
export const { updateProduct, deleteProduct, addProduct } =
  productSlice.actions;

export const getProductList = (state: ProductState) => state.products;
export const getLoading = (state: ProductState) => state.loading;
export const getError = (state: ProductState) => state.error;

export default productSlice.reducer;

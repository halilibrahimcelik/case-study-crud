import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "@/lib/types";
import placeholderImage from "@/assets/default-product-image.png";
export interface ProductState {
  products: Products[];
  loading: boolean;
  error: string | null;
  allProducts: Products[];
  notFound: boolean;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  allProducts: [],
  notFound: false,
};

const URL = `https://dummyjson.com/products`;
export const fetchProductList = createAsyncThunk(
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
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async ({ productInfo }: any, thunkAPI) => {
    const randomId = Math.floor(Math.random() * 1234) + 1;
    const newProduct = {
      id: randomId,
      thumbnail: placeholderImage.src,
      ...productInfo,
    };

    // Simulate loading
    thunkAPI.dispatch(productSlice.actions.setLoading(true));

    // Simulate asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 700));

    // Update the state with the new product
    thunkAPI.dispatch(productSlice.actions.addProductSuccess(newProduct));

    // Set loading to false
    thunkAPI.dispatch(productSlice.actions.setLoading(false));
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
    addProductSuccess: (state, action) => {
      state.products.unshift(action.payload);
      state.allProducts.unshift(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    resetProduct: (state, action) => {
      state.products = action.payload.allProducts;
    },
    searchProducts: (state, action) => {
      const { filteredProducts } = action.payload;
      if (filteredProducts.length === 0) {
        state.notFound = true;
      } else {
        state.notFound = false;
      }
      state.products = filteredProducts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state, action: PayloadAction) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.allProducts = action.payload;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      });
  },
});
export const {
  updateProduct,
  deleteProduct,
  addProductSuccess,
  searchProducts,
  resetProduct,
} = productSlice.actions;

export const getProductList = (state: { products: ProductState }) =>
  state.products.products;
export const getAllProducts = (state: { products: ProductState }) =>
  state.products.allProducts;
export const getLoading = (state: { products: ProductState }) =>
  state.products.loading;
export const getError = (state: { products: ProductState }) =>
  state.products.error;
export const getProductbyId = (
  state: { products: ProductState },
  id: number
) => {
  return state.products.products.find((product) => product.id === id);
};
export const getNotFound = (state: { products: ProductState }) =>
  state.products.notFound;

export default productSlice.reducer;

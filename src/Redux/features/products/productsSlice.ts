import { RootState } from "@/Redux/store";
import { ProductsState } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductsState = {
  products: [],
  searchQuery: "",
  value: 0,
  selectedProduct: null,
  card: 0,
  cardPrduct: [],
  cardInrement: [],
  singleProduct: undefined,
};
const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    getSingleProduct: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const singleProduct = state.products.find((p) => p._id === productId);
      state.singleProduct = singleProduct;
    },

    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((p) => p._id !== productId);
    },
  },
});

export const {
  setProducts,
  deleteProduct,
  setSearchQuery,
  increment,
  decrement,
  getSingleProduct,
} = productsSlice.actions;

export const selectCount = (state: RootState) => state.products.value;
export const seletetProducts = (state: RootState) => state.products.products;
export const seleteSearchQueray = (state: RootState) =>
  state.products.searchQuery;
export const singleProductFromState = (state: RootState) =>
  state.products.singleProduct;
export default productsSlice.reducer;

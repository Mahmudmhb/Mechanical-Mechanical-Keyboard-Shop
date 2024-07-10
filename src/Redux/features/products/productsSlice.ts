import { RootState } from "@/Redux/store";
import { TProductProps } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductsState = {
  products: TProductProps[];
  searchQuery: string;
  value: number;
  selectedProduct: TProductProps | null;
};

const initialState: ProductsState = {
  products: [],
  searchQuery: "",
  value: 0,
  selectedProduct: null,
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
    setSingleID(state, action) {
      state.products == action.payload;
    },
    singleProduct(state, action: PayloadAction<string>) {
      const foundProduct = state.products.find(
        (product) => product._id === action.payload
      );
      state.selectedProduct = foundProduct || null;
    },
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
});

export const {
  setProducts,
  setSearchQuery,
  increment,
  decrement,
  singleProduct,
  setSingleID,
} = productsSlice.actions;
// search implement
export const selectCount = (state: RootState) => state.products.value;
export const seleteProducts = (state: RootState) => state.products.products;
export const getSigleProduct = (state: RootState) =>
  state.products.selectedProduct;
export const seleteSearchQueray = (state: RootState) =>
  state.products.searchQuery;
export default productsSlice.reducer;

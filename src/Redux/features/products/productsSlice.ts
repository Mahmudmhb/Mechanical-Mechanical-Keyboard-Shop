import { RootState } from "@/Redux/store";
import { ProductsState } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductsState = {
  products: [],
  searchQuery: "",
  value: 0,
  selectedProduct: null,
  card: 0,
  cardPrduct: [],
  cardInrement: [],
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

    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    addToCard(state, action) {
      state.card += action.payload;
    },
    handleCardProduct(state, action) {
      state.cardPrduct.push(action.payload);
    },
  },
});

export const {
  setProducts,
  setSearchQuery,
  increment,
  decrement,
  addToCard,
  handleCardProduct,
} = productsSlice.actions;
// search implement
export const selectCount = (state: RootState) => state.products.value;
export const seleteProducts = (state: RootState) => state.products.products;

export const TotalCard = (state: RootState) => state.products.card;
export const handleAddToCardItem = (state: RootState) =>
  state.products.cardPrduct;
export const seleteSearchQueray = (state: RootState) =>
  state.products.searchQuery;
export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAction";

const initialState = {
  products: [], // Stores all products
  filteredProducts: [], // Stores the filtered list
  status: "idle",
  error: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      console.log("action", action);
      const filteredData = action.payload.products.filter((elem) => {
        return elem.category_id === action.payload.selectedCategory.id;
      });

      state.products = filteredData;
    },

    filterByPrice: (state, action) => {
      const filteredData = action.payload.products.filter((elem) => {
        return (
          elem.price >= action.payload.minPriceLimit &&
          elem.price <= action.payload.maxPriceLimit
        );
      });
      state.products = filteredData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "Success.";
        state.products = action.payload;
        state.filteredProducts = action.payload; // Initialize filteredProducts with all products
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "Rejected!";
        state.error = action.error.message;
      });
  },
});

export const { filterProducts, filterByPrice } = productSlice.actions;
export default productSlice.reducer;

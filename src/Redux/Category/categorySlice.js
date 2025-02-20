import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./action";

const initialState = {
  categories: [],
  status: "idle",
  error: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {}, // No synchronous reducers

  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "Success";
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;

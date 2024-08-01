import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
};

export const categoryIdSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    ADD_CATEGORY_ID: (state, action) => {
        state.categoryId = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { ADD_CATEGORY_ID } = categoryIdSlice.actions;

export default categoryIdSlice.reducer;

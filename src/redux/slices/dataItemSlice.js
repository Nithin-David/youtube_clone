import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataItems: null,
};

export const dataItemSlice = createSlice({
  name: "dataItems",
  initialState,
  reducers: {
    ADD_DATA_ITEM: (state, action) => {
    const item = action.payload
     return {...state, dataItems: item}
    },
  },
});

// Action creators are generated for each case reducer function
export const { ADD_DATA_ITEM } = dataItemSlice.actions;

export default dataItemSlice.reducer;

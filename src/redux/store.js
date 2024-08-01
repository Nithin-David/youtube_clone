import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import dataItemReducer from "./slices/dataItemSlice";

export const store = configureStore({
  reducer: {
    categoryId: categoryReducer,
    dataItems: dataItemReducer,
  },
});

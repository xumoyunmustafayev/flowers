import { configureStore } from "@reduxjs/toolkit";
import PaginationSlice from "./PaginationSlice";

export const store = configureStore({
  reducer: {
    pagination: PaginationSlice,
  },
});

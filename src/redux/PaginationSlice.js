import { createSlice } from "@reduxjs/toolkit";

const PaginationSlice = createSlice({
  name: "pagination",
  initialState: {
    text: 1,
    pagination: true,
  },
  reducers: {
    TogglePagination: (state) => {
      state.pagination = !state.pagination;
    },
    SetText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { TogglePagination, SetText } = PaginationSlice.actions;
export default PaginationSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const PaginationSlice = createSlice({
  name: "pagination",
  initialState: {
    modal: false,
  },
  reducers: {
    ToggleModal: (state) => {
      state.modal = !state.modal;
    },
    SetText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { ToggleModal, SetText } = PaginationSlice.actions;
export default PaginationSlice.reducer;

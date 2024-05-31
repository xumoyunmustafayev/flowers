import { createSlice } from "@reduxjs/toolkit"

const PaginationSlice = createSlice({
  name: 'pagination',
  initialState:{
    id:1,
    pagination:true,
  },
  reducers: {
    TogglePagination: (state) => {
      state.pagination = !state.pagination

    }
  }
})

export default PaginationSlice
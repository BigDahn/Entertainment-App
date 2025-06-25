import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditModal: false,
  isDeleteModal: false,
};

const EntertainmentSlice = createSlice({
  name: "Entertainment",
  initialState,
  reducers: {
    openEditModal: (state, action) => {},
  },
});

export const { openEditModal } = EntertainmentSlice.actions;

export default EntertainmentSlice.reducer;

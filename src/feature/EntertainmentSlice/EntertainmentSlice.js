import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdit: false,
  isDeleteModal: false,
  optionsModal: false,
  optionsId: "",
};

const EntertainmentSlice = createSlice({
  name: "Entertainment",
  initialState,
  reducers: {
    openMiniModal: (state, action) => {
      state.optionsId = action.payload.id;
      state.optionsModal = true;
      state.isEdit = false;
    },
    openEditBox: (state) => {
      state.isEdit = true;
      state.optionsModal = false;
    },
    closeMiniModal: (state, action) => {
      state.optionsModal = false;
      state.isEdit = false;
    },
  },
});

export const { openMiniModal, openEditBox, closeMiniModal } =
  EntertainmentSlice.actions;

export default EntertainmentSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdit: false,
  isDeleteModal: {
    isOpen: false,
    name: "",
  },
  optionsModal: false,
  optionsId: "",
  newMovie: false,
};

const EntertainmentSlice = createSlice({
  name: "Entertainment",
  initialState,
  reducers: {
    openMiniModal: (state, action) => {
      state.optionsId = action.payload.id;
      state.optionsModal = !state.optionsModal;
      state.isEdit = false;
    },
    openEditBox: (state) => {
      state.isEdit = true;
      state.optionsModal = false;
    },
    closeMiniModal: (state) => {
      state.optionsModal = false;
      state.isEdit = false;
      state.newMovie = false;
    },
    openDeleteModal: (state, payload) => {
      console.log(payload);
      state.optionsModal = false;
      state.isEdit = false;
      state.isDeleteModal = {
        isOpen: true,
        name: payload.payload,
      };
    },
    closeDeleteModal: (state) => {
      state.optionsModal = false;
      state.isEdit = false;
      state.isDeleteModal = {
        isOpen: false,
        name: "",
      };
    },
    openNewMovie: (state) => {
      state.newMovie = true;
    },
  },
});

export const {
  openMiniModal,
  openEditBox,
  closeMiniModal,
  openDeleteModal,
  closeDeleteModal,
  openNewMovie,
} = EntertainmentSlice.actions;

export default EntertainmentSlice.reducer;

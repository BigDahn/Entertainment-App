import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdit: false,
  isDeleteModal: {
    isOpen: false,
    name: "",
  },
  optionsModal: false,
  options: {
    id: "",
    name: "",
  },
  addNew: {
    isOpen: false,
    name: "",
  },
};

const EntertainmentSlice = createSlice({
  name: "Entertainment",
  initialState,
  reducers: {
    openMiniModal: (state, action) => {
      state.options = {
        id: action.payload.id,
        name: action.payload.path,
      };
      state.optionsModal = !state.optionsModal;
      state.isEdit = false;
    },
    openEditBox: (state) => {
      state.isEdit = true;
      state.optionsModal = false;
      state.addNew = {
        isOpen: false,
        name: "",
      };
    },
    closeMiniModal: (state) => {
      state.optionsModal = false;
      state.isEdit = false;
      state.addNew = {
        isOpen: false,
        name: "",
      };
    },
    openDeleteModal: (state, action) => {
      state.optionsModal = false;
      state.isEdit = false;
      state.isDeleteModal = {
        isOpen: true,
        name: action.payload,
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
    openCreateForm: (state, action) => {
      state.addNew = {
        isOpen: true,
        name: action.payload,
      };
    },
  },
});

export const {
  openMiniModal,
  openEditBox,
  closeMiniModal,
  openDeleteModal,
  closeDeleteModal,
  openCreateForm,
} = EntertainmentSlice.actions;

export default EntertainmentSlice.reducer;

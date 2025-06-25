import { configureStore } from "@reduxjs/toolkit";
import EntertainmentReducer from "./feature/EntertainmentSlice/EntertainmentSlice";
const store = configureStore({
  reducer: {
    Entertainment: EntertainmentReducer,
  },
});

export default store;

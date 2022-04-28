import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header: "",
  message: "",
  button: "OK",
  isOn: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState: initialState,
  reducers: {
    alert(state, action) {
      state.header = action.payload.header;
      state.message = action.payload.message;
      state.button = action.payload.button;
      state.isOn = true;
    },

    clear(state) {
      state.isOn = false;
      state.header = "";
      state.message = "";
      state.button = "";
    },
  },
});

export const alertActions = alertSlice.actions;
export default alertSlice;

import { configureStore } from "@reduxjs/toolkit";
import createMapSlice from "./CreateMapSlice";

const store = configureStore({
  reducer: { createMap: createMapSlice.reducer },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import createMapSlice from "./CreateMapSlice";
import chooseMathSlice from "./ChooseMathSlice";

const store = configureStore({
  reducer: {
    createMap: createMapSlice.reducer,
    chooseMath: chooseMathSlice.reducer,
  },
});

export default store;

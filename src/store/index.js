import { configureStore } from "@reduxjs/toolkit";
import createMapSlice from "./CreateMapSlice";
import chooseMathSlice from "./ChooseMathSlice";
import playSlice from "./PlaySlice";
import alertSlice from "./AlertSlice";

const store = configureStore({
  reducer: {
    createMap: createMapSlice.reducer,
    chooseMath: chooseMathSlice.reducer,
    play: playSlice.reducer,
    alert: alertSlice.reducer,
  },
});

export default store;

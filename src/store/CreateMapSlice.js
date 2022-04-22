import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mapData:
    JSON.parse(localStorage.getItem("createdMap")) ||
    Array.from(Array(11), () => new Array(11).fill(1)),
  unitPosition: JSON.parse(localStorage.getItem("createdPosition")) || null,
  selected: +localStorage.getItem("selected") || 0,
};

const createMapSlice = createSlice({
  name: "createMap",
  initialState: initialState,
  reducers: {
    select(state, action) {
      state.selected = action.payload;
      localStorage.setItem("selected", action.payload);
    },

    changeTile(state, action) {
      if (state.selected === 2) {
        const position = { row: action.payload.row, col: action.payload.col };
        state.mapData[action.payload.row][action.payload.col] = 0;
        state.unitPosition = position;
        localStorage.setItem("createdPosition", JSON.stringify(position));
      } else {
        if (
          state.unitPosition?.row === action.payload.row &&
          state.unitPosition?.col === action.payload.col
        ) {
          state.unitPosition = null;
          localStorage.removeItem("createdPosition");
        }
        state.mapData[action.payload.row][action.payload.col] = state.selected;
      }
      localStorage.setItem("createdMap", JSON.stringify(state.mapData));
    },

    clearTile(state, action) {
      if (
        state.unitPosition?.row === action.payload.row &&
        state.unitPosition?.col === action.payload.col
      ) {
        state.unitPosition = null;
        localStorage.removeItem("createdPosition");
      }
      state.mapData[action.payload.row][action.payload.col] = 0;
      localStorage.setItem("createdMap", JSON.stringify(state.mapData));
    },

    clearData(state) {
      localStorage.removeItem("createdMap");
      localStorage.removeItem("createdPosition");
      state.unitPosition = null;
      state.mapData = Array.from(Array(11), () => new Array(11).fill(1));
    },
  },
});

export const createMapActions = createMapSlice.actions;
export default createMapSlice;

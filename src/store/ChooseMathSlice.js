import { createSlice } from "@reduxjs/toolkit";

const initializeMathGrid = () => {
  if (localStorage.getItem("mathGrid")) {
    return JSON.parse(localStorage.getItem("mathGrid"));
  } else {
    let mathGrid = Array.from(Array(11), () => new Array(11));
    for (let r = 0; r < 11; r++) {
      for (let c = 0; c < 11; c++) {
        mathGrid[r][c] = {
          value: (r || 1) * (c || 1),
          isOn: true,
          action: r === 0 ? "col" : c === 0 ? "row" : "one",
        };
      }
    }
    mathGrid[0][0] = {
      value: "x",
      isOn: true,
      action: "all",
    };
    return mathGrid;
  }
};

const initialState = {
  mathGrid: initializeMathGrid(),
  // chosenMath: initializeChosenMath(),
};

const chooseMathSlice = createSlice({
  name: "chooseMath",
  initialState: initialState,
  reducers: {
    select(state, action) {
      if (action.payload.action === "one") {
        state.mathGrid[action.payload.row][action.payload.col].isOn =
          !action.payload.isOn;
      } else if (action.payload.action === "row") {
        state.mathGrid[action.payload.row].map(
          (cell) => (cell.isOn = !action.payload.isOn)
        );
      } else if (action.payload.action === "col") {
        state.mathGrid.map(
          (row) => (row[action.payload.col].isOn = !action.payload.isOn)
        );
      } else if (action.payload.action === "all") {
        state.mathGrid.map((row) =>
          row.map((cell) => (cell.isOn = !action.payload.isOn))
        );
      }
    },

    confirm(state) {
      localStorage.setItem("mathGrid", JSON.stringify(state.mathGrid));
    },

    cancel(state) {
      state.mathGrid = initializeMathGrid();
    },
  },
});

export const chooseMathActions = chooseMathSlice.actions;
export default chooseMathSlice;

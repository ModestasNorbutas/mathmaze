import { createSlice } from "@reduxjs/toolkit";

const initializeChosenMath = () => {
  let chosenMath = [];
  if (localStorage.getItem("mathGrid")) {
    let mathGrid = JSON.parse(localStorage.getItem("mathGrid"));
    for (let r = 1; r < mathGrid.length; r++) {
      for (let c = 1; c < mathGrid[0].length; c++) {
        if (mathGrid[r][c].isOn) {
          let problem = `${r} x ${c}`;
          let solution = r * c;
          chosenMath.push(problem, solution);
        }
      }
    }
    return chosenMath;
  } else {
    for (let r = 1; r < 11; r++) {
      for (let c = 1; c < 11; c++) {
        let problem = `${r} x ${c}`;
        let solution = r * c;
        chosenMath.push(problem, solution);
      }
    }
    return chosenMath;
  }
};

const revealMap = (mapData, unitPosition) => {
  const { row: r, col: c } = unitPosition;
  let activeMap = Array.from(Array(mapData.length), () =>
    new Array(mapData[0].length).fill(2)
  );
  if (activeMap?.[r - 1]?.[c - 1]) {
    activeMap[r - 1][c - 1] = mapData[r - 1][c - 1];
  }
  if (activeMap?.[r - 1]?.[c]) {
    activeMap[r - 1][c] = mapData[r - 1][c];
  }
  if (activeMap?.[r - 1]?.[c + 1]) {
    activeMap[r - 1][c + 1] = mapData[r - 1][c + 1];
  }
  if (activeMap?.[r]?.[c - 1]) {
    activeMap[r][c - 1] = mapData[r][c - 1];
  }
  if (activeMap?.[r]?.[c]) {
    activeMap[r][c] = mapData[r][c];
  }
  if (activeMap?.[r]?.[c + 1]) {
    activeMap[r][c + 1] = mapData[r][c + 1];
  }
  if (activeMap?.[r + 1]?.[c - 1]) {
    activeMap[r + 1][c - 1] = mapData[r + 1][c - 1];
  }
  if (activeMap?.[r + 1]?.[c]) {
    activeMap[r + 1][c] = mapData[r + 1][c];
  }
  if (activeMap?.[r + 1]?.[c + 1]) {
    activeMap[r + 1][c + 1] = mapData[r + 1][c + 1];
  }
  return activeMap;
};

const initialMapData = JSON.parse(localStorage.getItem("mapData")) || [];

const initialUnitPosition =
  JSON.parse(localStorage.getItem("unitPosition")) || {};

const initialState = {
  isPlay: localStorage.getItem("isPlay") || false,
  action: localStorage.getItem("action") || "move",
  initialMathCount: localStorage.getItem("initialMathCount") || 0,
  mathCount: localStorage.getItem("mathCount") || 0,
  mapData: initialMapData,
  activeMap: revealMap(initialMapData, initialUnitPosition),
  unitPosition: initialUnitPosition,
  chosenMath: initializeChosenMath(),
};

const playSlice = createSlice({
  name: "play",
  initialState: initialState,
  reducers: {
    start(state, action) {
      state.isPlay = true;
      state.action = "move";
      state.initialMathCount = action.payload.mathCount;
      state.mathCount = action.payload.mathCount;
      state.unitPosition = action.payload.unitPosition;
      state.mapData = action.payload.mapData;
      state.activeMap = revealMap(
        action.payload.mapData,
        action.payload.unitPosition
      );
      localStorage.setItem("isPlay", true);
      localStorage.setItem("action", "move");
      localStorage.setItem("initialMathCount", action.payload.mathCount);
      localStorage.setItem("mathCount", action.payload.mathCount);
      localStorage.setItem("mapData", JSON.stringify(action.payload.mapData));
      localStorage.setItem(
        "unitPosition",
        JSON.stringify(action.payload.unitPosition)
      );
    },

    move(state, action) {
      if (state.action === "move") {
        const r = state.unitPosition.row;
        const c = state.unitPosition.col;
        if (action.payload === 37) {
          // Move left
          if (
            state.mapData[r]?.[c - 1] !== undefined &&
            state.mapData[r]?.[c - 1] !== 1
          ) {
            state.unitPosition.col--;
          }
        } else if (action.payload === 38) {
          // Move up
          if (
            state.mapData?.[r - 1]?.[c] !== undefined &&
            state.mapData?.[r - 1]?.[c] !== 1
          ) {
            state.unitPosition.row--;
          }
        } else if (action.payload === 39) {
          // Move right
          if (
            state.mapData[r]?.[c + 1] !== undefined &&
            state.mapData[r]?.[c + 1] !== 1
          ) {
            state.unitPosition.col++;
          }
        } else if (action.payload === 40) {
          // Move down
          if (
            state.mapData?.[r + 1]?.[c] !== undefined &&
            state.mapData?.[r + 1]?.[c] !== 1
          ) {
            state.unitPosition.row++;
          }
        }
        state.activeMap = revealMap(state.mapData, state.unitPosition);
        localStorage.setItem(
          "unitPosition",
          JSON.stringify(state.unitPosition)
        );
      }
    },

    type(state, action) {
      console.log(action.payload);
    },

    enter(state, action) {
      console.log("enter");
    },

    delete(state, action) {
      console.log("delete");
    },
  },
});

export const playActions = playSlice.actions;
export default playSlice;

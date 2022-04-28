import { useDispatch } from "react-redux";
import { playActions } from "../../store/PlaySlice";
import { alertActions } from "../../store/AlertSlice";
import { useNavigate } from "react-router-dom";

export default function useRandomMap() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const playRandom = () => {
    // USE LOADING
    fetch(
      "https://math-maze-a939f-default-rtdb.europe-west1.firebasedatabase.app/maps.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const dataArray = Object.values(data);
        const randomIndex = Math.floor(Math.random() * dataArray.length);
        const randomMap = dataArray[randomIndex];
        dispatch(
          playActions.start({
            mathCount: randomMap.mathCount,
            unitPosition: randomMap.unitPosition,
            mapData: randomMap.mapData,
          })
        );
      })
      .then(() => {
        navigate("/play");
      })
      .catch((error) =>
        dispatch(
          alertActions.alert({
            header: "Error",
            message: error?.message,
            button: "OK",
          })
        )
      );
  };

  return playRandom;
}

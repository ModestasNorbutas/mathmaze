import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import MapGrid from "./MapGrid";
import { playActions } from "../../store/PlaySlice";

export default function PlayMap() {
  const dispatch = useDispatch();

  const handleKeypress = useCallback(
    (e) => {
      if (e.keyCode >= 37 && e.keyCode <= 40) {
        e.preventDefault();
        dispatch(playActions.move(e.keyCode));
      } else if (e.keyCode >= 96 && e.keyCode <= 105) {
        dispatch(playActions.type({ number: e.keyCode - 96, event: e }));
      } else if (e.keyCode >= 48 && e.keyCode <= 57) {
        dispatch(playActions.type({ number: e.keyCode - 48, event: e }));
      } else if (e.keyCode === 13) {
        dispatch(playActions.enter(e));
      } else if (e.keyCode === 8 || e.keyCode === 46 || e.keyCode === 109) {
        dispatch(playActions.delete(e));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeypress);
    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, [handleKeypress]);

  return (
    <Card>
      <MapGrid />
    </Card>
  );
}

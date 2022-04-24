import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playActions } from "../../store/PlaySlice";
import styles from "./PlayMap.module.scss";
import Card from "../UI/Card";
import Grid from "../UI/Grid";
import Math from "./Math";
import Exit from "./Exit";

export default function PlayMap() {
  const dispatch = useDispatch();
  const activeMap = useSelector((state) => state.play.activeMap);
  const action = useSelector((state) => state.play.action);

  const handleKeypress = useCallback(
    (e) => {
      if (action === "move") {
        if (e.keyCode >= 37 && e.keyCode <= 40) {
          e.preventDefault();
          dispatch(playActions.move(e.keyCode));
        }
      } else if (action === "math") {
        if (e.keyCode >= 96 && e.keyCode <= 105) {
          e.preventDefault();
          dispatch(playActions.type(e.keyCode - 96));
        } else if (e.keyCode >= 48 && e.keyCode <= 57) {
          e.preventDefault();
          dispatch(playActions.type(e.keyCode - 48));
        } else if (e.keyCode === 13) {
          e.preventDefault();
          dispatch(playActions.enter());
        } else if (e.keyCode === 8 || e.keyCode === 46 || e.keyCode === 109) {
          e.preventDefault();
          dispatch(playActions.delete());
        }
      }
    },
    [dispatch, action]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeypress);
    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, [handleKeypress]);

  return (
    <Card>
      <Grid data={activeMap} type="play">
        <div className={styles.popup}>
          {action === "math" && <Math />}
          {action === "exit" && <Exit />}
        </div>
      </Grid>
    </Card>
  );
}

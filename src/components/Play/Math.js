import Card from "../UI/Card";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Math.module.scss";
import { useEffect } from "react";
import { playActions } from "../../store/PlaySlice";

export default function Math() {
  const dispatch = useDispatch();
  const mathProblem = useSelector((state) => state.play.mathProblem);
  const chosenAnswer = useSelector((state) => state.play.chosenAnswer);
  const isIncorrect = useSelector((state) => state.play.isIncorrect);
  const red = isIncorrect ? styles.red : "";

  useEffect(() => {
    let timeout = setTimeout(() => {
      dispatch(playActions.setCorrect());
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, [isIncorrect, dispatch]);

  return (
    <Card>
      <h3 className={styles.problem + " " + red}>{mathProblem}</h3>
      <h3 className={styles.answer + " " + red}>{chosenAnswer}</h3>
    </Card>
  );
}

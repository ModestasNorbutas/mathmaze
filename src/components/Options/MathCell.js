import styles from "./MathCell.module.scss";
import { useDispatch } from "react-redux";
import { chooseMathActions } from "../../store/ChooseMathSlice";

export default function MathCell(props) {
  const dispatch = useDispatch();
  const bold = props.action !== "one" ? styles.bold : "";
  const selected = props.isOn ? styles.selected : "";

  const handleClick = () => {
    dispatch(
      chooseMathActions.select({
        action: props.action,
        isOn: props.isOn,
        row: props.row,
        col: props.col,
      })
    );
  };

  return (
    <div className={styles["math-cell"]} onClick={handleClick}>
      <div className={styles.value + " " + bold + " " + selected}>
        {props.value}
      </div>
      <div className={styles.hover}></div>
    </div>
  );
}

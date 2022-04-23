import styles from "./MathGrid.module.scss";
import MathCell from "./MathCell";
import { useSelector } from "react-redux";

export default function MathGrid() {
  const mathGrid = useSelector((state) => state.chooseMath.mathGrid);

  return (
    <div className={styles["math-grid"]}>
      {mathGrid.map((row, rowIndex) => (
        <div className={styles.row} key={rowIndex}>
          {row.map((col, colIndex) => (
            <MathCell
              key={colIndex}
              row={rowIndex}
              col={colIndex}
              value={col.value}
              isOn={col.isOn}
              action={col.action}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

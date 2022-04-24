import styles from "./MathGrid.module.scss";
import MathCell from "./MathCell";
import { useSelector } from "react-redux";
import Grid from "../UI/Grid";

export default function MathGrid() {
  const mathGrid = useSelector((state) => state.chooseMath.mathGrid);

  return (
    <Grid>
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
    </Grid>
  );
}

import styles from "./Grid.module.scss";
import CreateCell from "../CreateMap/CreateCell";
import MathCell from "../Options/MathCell";
import PlayCell from "../Play/PlayCell";

export default function Grid(props) {
  let Cell;
  switch (props.type) {
    case "create":
      Cell = CreateCell;
      break;
    case "math":
      Cell = MathCell;
      break;
    case "play":
      Cell = PlayCell;
      break;
    default:
      Cell = <div>Error</div>;
  }

  return (
    <div className={styles.outer + " " + props.className}>
      <div className={styles.inner}>
        {props.data.map((row, rowIndex) => (
          <div className={styles.row} key={rowIndex}>
            {row.map((col, colIndex) => (
              <Cell key={colIndex} row={rowIndex} col={colIndex} value={col} />
            ))}
          </div>
        ))}
        {props.children}
      </div>
      ;
    </div>
  );
}

import styles from "./MapGrid.module.scss";
import MapCell from "./MapCell";
import { useSelector } from "react-redux";

export default function MapGrid(props) {
  const activeMap = useSelector((state) => state.play.activeMap);

  return (
    <div className={styles["map-grid"] + " " + props.className}>
      {activeMap.map((row, rowIndex) => (
        <div className={styles.row} key={rowIndex}>
          {row.map((col, colIndex) => (
            <MapCell key={colIndex} row={rowIndex} col={colIndex} value={col} />
          ))}
        </div>
      ))}
    </div>
  );
}

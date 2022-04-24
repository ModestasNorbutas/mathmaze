import styles from "./MapGrid.module.scss";
import MapCell from "./MapCell";
import { useSelector } from "react-redux";
import Math from "./Math";
import Exit from "./Exit";

export default function MapGrid(props) {
  const activeMap = useSelector((state) => state.play.activeMap);
  const action = useSelector((state) => state.play.action);

  return (
    <div className={styles["map-grid"] + " " + props.className}>
      {activeMap.map((row, rowIndex) => (
        <div className={styles.row} key={rowIndex}>
          {row.map((col, colIndex) => (
            <MapCell key={colIndex} row={rowIndex} col={colIndex} value={col} />
          ))}
        </div>
      ))}
      <div className={styles.popup}>
        {action === "math" && <Math />}
        {action === "exit" && <Exit />}
      </div>
    </div>
  );
}

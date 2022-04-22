import MapGrid from "./MapGrid";
import MapTools from "./MapTools";
import styles from "./MapCreator.module.css";

export default function MapCreator(props) {
  return (
    <div className={styles["map-creator"] + " " + props.className}>
      <MapGrid className="me-2" />
      <MapTools />
    </div>
  );
}

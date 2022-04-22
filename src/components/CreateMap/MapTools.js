import styles from "./MapTools.module.scss";
import unit from "../../images/woman.png";
import wall from "../../images/wall.png";
import math from "../../images/math.png";
import exit from "../../images/exit.png";
import { useDispatch, useSelector } from "react-redux";
import { createMapActions } from "../../store/CreateMapSlice";

export default function MapTools() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.createMap.selected);

  const handleSelect = (value) => {
    dispatch(createMapActions.select(value));
  };

  return (
    <div className={styles["map-tools"]}>
      <div
        className={selected === 2 ? styles.selected : ""}
        onClick={() => handleSelect(2)}
      >
        <img src={unit} alt="unit" />
      </div>
      <div
        className={selected === 1 ? styles.selected : ""}
        onClick={() => handleSelect(1)}
      >
        <img src={wall} alt="wall" />
      </div>
      <div
        className={selected === 3 ? styles.selected : ""}
        onClick={() => handleSelect(3)}
      >
        <img src={math} alt="math" />
      </div>
      <div
        className={selected === 4 ? styles.selected : ""}
        onClick={() => handleSelect(4)}
      >
        <img src={exit} alt="exit" />
      </div>
      <div
        className={selected === 0 ? styles.selected : ""}
        onClick={() => handleSelect(0)}
      >
        <div className={styles.path}></div>
      </div>
    </div>
  );
}

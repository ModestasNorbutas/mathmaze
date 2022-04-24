import React from "react";
import styles from "./PlayCell.module.scss";
import unit from "../../images/woman.png";
import wall from "../../images/wall.png";
import math from "../../images/math.png";
import exit from "../../images/exit.png";
import { useSelector } from "react-redux";

export default function PlayCell(props) {
  let cellContent;
  switch (props.value) {
    case 0:
      cellContent = <div className={styles.path}></div>;
      break;
    case 1:
      cellContent = <img src={wall} alt="wall" />;
      break;
    case 2:
      cellContent = <div className={styles.black}></div>;
      break;
    case 3:
      cellContent = <img src={math} alt="math" />;
      break;
    case 4:
      cellContent = <img src={exit} alt="exit" />;
      break;
    default:
      cellContent = <div className={styles.path}>ERROR</div>;
  }

  const unitPosition = useSelector((state) => state.play.unitPosition);

  const isUnit =
    props.row === unitPosition?.row && props.col === unitPosition?.col;

  return (
    <div className={styles["map-cell"]}>
      {cellContent}
      {isUnit && <img className={styles.unit} src={unit} alt="unit" />}
    </div>
  );
}

import React from "react";
import styles from "./MapCell.module.scss";
import unit from "../../images/woman.png";
import wall from "../../images/wall.png";
import math from "../../images/math.png";
import exit from "../../images/exit.png";
import { useDispatch, useSelector } from "react-redux";
import { createMapActions } from "../../store/CreateMapSlice";

export default function MapCell(props) {
  const dispatch = useDispatch();

  let cellContent;
  switch (props.value) {
    case 0:
      cellContent = <div className={styles.path}></div>;
      break;
    case 1:
      cellContent = <img src={wall} alt="wall" />;
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

  const handleClick = () => {
    dispatch(createMapActions.changeTile({ row: props.row, col: props.col }));
  };

  const handleClear = (event) => {
    event.preventDefault();
    dispatch(createMapActions.clearTile({ row: props.row, col: props.col }));
  };

  const unitPosition = useSelector((state) => state.createMap.unitPosition);

  const isUnit =
    props.row === unitPosition?.row && props.col === unitPosition?.col;

  return (
    <div
      className={styles["map-cell"]}
      onClick={handleClick}
      onContextMenu={handleClear}
    >
      {cellContent}
      {isUnit && <img className={styles.unit} src={unit} alt="unit" />}
      <div className={styles.hover}></div>
    </div>
  );
}

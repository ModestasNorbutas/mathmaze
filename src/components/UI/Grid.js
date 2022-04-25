import styles from "./Grid.module.scss";

export default function Grid(props) {
  const Cell = props.cell;

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
    </div>
  );
}

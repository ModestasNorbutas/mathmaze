import styles from "./Grid.module.scss";

export default function Grid(props) {
  return (
    <div className={styles.outer + " " + props.className}>
      <div className={styles.inner}>{props.children}</div>;
    </div>
  );
}

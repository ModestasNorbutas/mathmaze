import Card from "../components/UI/Card";
import styles from "./Play.module.scss";

export default function Play() {
  return (
    <Card>
      <div className={styles.play}>
        <button className="btn btn-primary m-2">Continue</button>
        <button className="btn btn-primary m-2">Random map</button>
        <button className="btn btn-primary m-2">Choose map</button>
      </div>
    </Card>
  );
}

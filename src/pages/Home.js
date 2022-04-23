import { useNavigate } from "react-router-dom";
import Card from "../components/UI/Card";
import styles from "./Home.module.scss";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Card>
      <div className={styles.home}>
        <button className="btn btn-primary m-2">Continue play</button>
        <button className="btn btn-primary m-2">Play random map</button>
        <button className="btn btn-primary m-2">Choose map</button>
        <button className="btn btn-primary m-2" onClick={navigate("/options")}>
          Options
        </button>
        <button className="btn btn-primary m-2" onClick={navigate("/create")}>
          Create map
        </button>
      </div>
    </Card>
  );
}

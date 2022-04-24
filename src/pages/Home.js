import { useNavigate } from "react-router-dom";
import Card from "../components/UI/Card";
import styles from "./Home.module.scss";
import { useSelector } from "react-redux";
import useRandomMap from "../components/Services/useRandomMap";

export default function Home() {
  const navigate = useNavigate();
  const playRandom = useRandomMap();
  const isPlay = useSelector((state) => state.play.isPlay);

  return (
    <Card>
      <div className={styles.home}>
        {isPlay && (
          <button
            className="btn btn-primary m-2"
            onClick={() => navigate("/play")}
          >
            Continue play
          </button>
        )}
        <button className="btn btn-primary m-2" onClick={() => playRandom()}>
          Play random map
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => navigate("/maplist")}
        >
          Choose map
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => navigate("/options")}
        >
          Options
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => navigate("/create")}
        >
          Create map
        </button>
      </div>
    </Card>
  );
}

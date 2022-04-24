import { useNavigate } from "react-router-dom";
import Card from "../components/UI/Card";
import PlayMap from "../components/Play/PlayMap";
import styles from "./Play.module.scss";
import useRandomMap from "../components/Services/useRandomMap";
import { useSelector } from "react-redux";

export default function Play() {
  const navigate = useNavigate();
  const playRandom = useRandomMap();
  const isPlay = useSelector((state) => state.play.isPlay);

  return (
    <>
      {isPlay && <PlayMap />}
      {!isPlay && (
        <Card>
          <div className={styles.play}>
            <button
              className="btn btn-primary m-2"
              onClick={() => playRandom()}
            >
              Play random map
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={() => navigate("/maplist")}
            >
              Choose map
            </button>
          </div>
        </Card>
      )}
    </>
  );
}

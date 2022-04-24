import { useNavigate } from "react-router-dom";
import Card from "../components/UI/Card";
import PlayMap from "../components/Play/PlayMap";
import styles from "./Play.module.scss";

export default function Play() {
  const navigate = useNavigate();
  const isPlay = localStorage.getItem("isPlay");

  return (
    <>
      {isPlay && <PlayMap />}
      {!isPlay && (
        <Card>
          <div className={styles.play}>
            <button className="btn btn-primary m-2">Random map</button>
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

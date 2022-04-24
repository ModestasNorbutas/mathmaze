import Card from "../UI/Card";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Exit.module.scss";
import { useNavigate } from "react-router-dom";
import { playActions } from "../../store/PlaySlice";
import useRandomMap from "../Services/useRandomMap";

export default function Exit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const playRandom = useRandomMap();
  const initialMathCount = useSelector((state) => state.play.initialMathCount);
  const mathCount = useSelector((state) => state.play.mathCount);

  const handleContinue = () => {
    dispatch(playActions.continue());
  };

  return (
    <Card>
      {mathCount === 0 && (
        <div className={styles.exit}>
          <h2>Victory!</h2>
          <button
            className="btn btn-primary w-100 my-2"
            onClick={() => {
              playRandom();
            }}
            autoFocus
          >
            Play random
          </button>
          <button
            className="btn btn-primary w-100 my-2"
            onClick={() => {
              navigate("/maplist");
            }}
          >
            Choose map
          </button>
          <button
            className="btn btn-primary w-100 my-2"
            onClick={handleContinue}
          >
            Continue...
          </button>
        </div>
      )}
      {mathCount !== 0 && (
        <div className={styles.exit}>
          <h4>
            Math left: {mathCount}/{initialMathCount}
          </h4>
          <button
            className="btn btn-primary w-100 my-2"
            onClick={handleContinue}
            autoFocus
          >
            OK
          </button>
        </div>
      )}
    </Card>
  );
}

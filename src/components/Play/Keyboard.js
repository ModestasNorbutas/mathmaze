import styles from "./Keyboard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { playActions } from "../../store/PlaySlice";

export default function Keyboard() {
  const dispatch = useDispatch();
  const action = useSelector((state) => state.play.action);

  const handleNumber = (number) => {
    if (action === "math") {
      dispatch(playActions.type(number));
    }
  };

  const handleDelete = () => {
    if (action === "math") {
      dispatch(playActions.delete());
    }
  };

  const handleEnter = () => {
    if (action === "math") {
      dispatch(playActions.enter());
    }
  };

  const handleMove = (code) => {
    if (action === "move") {
      dispatch(playActions.move(code));
    }
  };

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.numpad}>
          <div className={styles.row}>
            <div className={styles.col1}>
              <button
                className="btn btn-primary"
                onClick={() => handleNumber(7)}
              >
                7
              </button>
            </div>
            <div className={styles.col1}>
              <button
                className="btn btn-primary"
                onClick={() => handleNumber(8)}
              >
                8
              </button>
            </div>
            <div className={styles.col1}>
              <button
                className="btn btn-primary"
                onClick={() => handleNumber(9)}
              >
                9
              </button>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col1}>
              <button
                className="btn btn-primary"
                onClick={() => handleNumber(4)}
              >
                4
              </button>
            </div>
            <div className={styles.col1}>
              <button
                className="btn btn-primary"
                onClick={() => handleNumber(5)}
              >
                5
              </button>
            </div>
            <div className={styles.col1}>
              <button
                className="btn btn-primary"
                onClick={() => handleNumber(6)}
              >
                6
              </button>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col1}>
              <button
                className="btn btn-primary"
                onClick={() => handleNumber(1)}
              >
                1
              </button>
            </div>
            <div className={styles.col1}>
              <button
                className="btn btn-primary"
                onClick={() => handleNumber(2)}
              >
                2
              </button>
            </div>
            <div className={styles.col1}>
              <button
                className="btn btn-primary"
                onClick={() => handleNumber(3)}
              >
                3
              </button>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col1}>
              <button className="btn btn-primary" onClick={handleDelete}>
                x
              </button>
            </div>
            <div className={styles.col1}>
              <button
                className="btn btn-primary"
                onClick={() => handleNumber(0)}
              >
                0
              </button>
            </div>
            <div className={styles.col1}>
              <button className="btn btn-primary" onClick={handleEnter}>
                v
              </button>
            </div>
          </div>
        </div>
        <div className={styles.arrows}>
          <div className={styles.row}>
            <div className={styles.col1}></div>
            <div className={styles.col2}>
              <button
                className="btn btn-primary"
                onClick={() => handleMove(38)}
              >
                &#8593;
              </button>
            </div>
            <div className={styles.col1}></div>
          </div>
          <div className={styles.row}>
            <div className={styles.col2}>
              <button
                className="btn btn-primary"
                onClick={() => handleMove(37)}
              >
                &#8592;
              </button>
            </div>
            <div className={styles.col2}>
              <button
                className="btn btn-primary"
                onClick={() => handleMove(39)}
              >
                &#8594;
              </button>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col1}></div>
            <div className={styles.col2}>
              <button
                className="btn btn-primary"
                onClick={() => handleMove(40)}
              >
                &#8595;
              </button>
            </div>
            <div className={styles.col1}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

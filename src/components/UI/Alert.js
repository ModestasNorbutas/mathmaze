import styles from "./Alert.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { alertActions } from "../../store/AlertSlice";
import Card from "./Card";

export default function useAlert() {
  const dispatch = useDispatch();
  const { header, message, button, isOn } = useSelector((state) => state.alert);

  const handleClear = () => {
    dispatch(alertActions.clear());
  };

  if (isOn) {
    return (
      <div className={styles.container}>
        <Card>
          <div className={styles.alert}>
            <h3>{header}</h3>
            <p>{message}</p>
            <button className="btn btn-primary w-100" onClick={handleClear}>
              {button}
            </button>
          </div>
        </Card>
      </div>
    );
  }
}

import Card from "../UI/Card";
import styles from "./MapListItem.module.scss";
import { useDispatch } from "react-redux";
import { playActions } from "../../store/PlaySlice";
import { useNavigate } from "react-router-dom";

export default function MapListItem(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlay = () => {
    dispatch(
      playActions.start({
        mathCount: props.item.mathCount,
        mapData: props.item.mapData,
        unitPosition: props.item.unitPosition,
      })
    );
    navigate("/play");
  };

  return (
    <Card>
      <div className={styles.item}>
        <h4>{props.item.name}</h4>
        <h6>
          Size: {props.item.size[0]} x {props.item.size[1]}
        </h6>
        <h6>Math count: {props.item.mathCount}</h6>
        <h6>{props.item.description}</h6>
        <button className="btn btn-primary mt-2 w-100" onClick={handlePlay}>
          Play
        </button>
      </div>
    </Card>
  );
}

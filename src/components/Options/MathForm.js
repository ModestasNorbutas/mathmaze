import { useDispatch } from "react-redux";
import { chooseMathActions } from "../../store/ChooseMathSlice";
import { playActions } from "../../store/PlaySlice";

export default function MathForm() {
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(chooseMathActions.confirm());
    dispatch(playActions.changeChosenMath());
    alert("Math choices saved!"); // CREATE AND USE MODAL
  };

  const handleCancel = () => {
    dispatch(chooseMathActions.cancel());
    alert("Restored previous choices"); // CREATE AND USE MODAL
  };

  return (
    <div className="d-flex mt-3">
      <button className="btn btn-primary me-2 flex-fill" onClick={handleSave}>
        Save
      </button>
      <button className="btn btn-danger flex-fill" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}

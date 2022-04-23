import { useDispatch } from "react-redux";
import { chooseMathActions } from "../../store/ChooseMathSlice";

export default function MathForm() {
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(chooseMathActions.confirm());
  };

  const handleCancel = () => {
    dispatch(chooseMathActions.cancel());
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

import { useSelector } from "react-redux";
import Grid from "../UI/Grid";
import MathForm from "./MathForm";
import Card from "../UI/Card";
import MathCell from "./MathCell";

export default function ChooseMath() {
  const mathGrid = useSelector((state) => state.chooseMath.mathGrid);

  return (
    <Card>
      <div className="text-center mb-3">
        <h3>Choose math</h3>
      </div>
      <Grid data={mathGrid} cell={MathCell} />
      <MathForm />
    </Card>
  );
}

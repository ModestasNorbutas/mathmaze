import MathGrid from "./MathGrid";
import MathForm from "./MathForm";
import Card from "../UI/Card";

export default function ChooseMath() {
  return (
    <Card>
      <div className="text-center mb-3">
        <h3>Choose math</h3>
      </div>
      <MathGrid />
      <MathForm />
    </Card>
  );
}

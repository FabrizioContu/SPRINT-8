import { useProvider } from "../../context/Context";

function DailyVariation() {
  const { percentageVariation, sign } = useProvider();

  return (
    <div>
      <div className="text-end place-self-end">
        <p className="font-bold text-xl text-">
          {sign}
          {percentageVariation}%
        </p>
        <h3 className="font-sans font-bold">from yesterday</h3>
      </div>
    </div>
  );
}

export default DailyVariation;

import { useProvider } from "../../context/Context";

function DailyExpenses() {
  const { todayExpenses } = useProvider();

  return (
    <div>
      <div className="">
        <h2 className="font-sans text-gray-400">Today's expenses</h2>
        <p className="font-bold text-6xl text-">{todayExpenses}€</p>
      </div>
    </div>
  );
}

export default DailyExpenses;

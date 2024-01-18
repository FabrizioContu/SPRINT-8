import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useProvider } from "../../context/Context";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

//Options
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

//Graphics
function GraphicData() {
  const { daysData, expensesDayData } = useProvider();

  const backgroundColors = daysData.map((day) =>
    day === "sunday" ? "#fd5c63" : "#018749"
  );

  const data = {
    labels: daysData,
    datasets: [
      {
        label: "Expenses (€) ",
        data: expensesDayData,
        backgroundColor: backgroundColors,
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="mx-96 m-10 pb-20">
      <div className=" bg-white rounded-3xl p-10 font-sans">
        <h2 className="flex justify-start text-2xl font-bold mb-10">
          Expenses: Last Week
        </h2>
        <p className="text-3xl font-bold  text-black pb-5"></p>
        <Bar options={options} data={data} />
        <div className="my-5 "></div>
        <div className="flex justify-between mt-3"></div>
        <hr className="border-2" />
      </div>
    </div>
  );
}
export default GraphicData;

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
import DailyExpenses from "../dailyExpenses/DailyExpenses";
import DailyVariation from "../dailyVariation/DailyVariation";
import { useTranslation } from "react-i18next";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
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
      max: 600, // Set the maximum value for the y-axis
      grid: {
        display: true, // Display grid lines
        drawOnChartArea: false, // Draw grid lines only on the chart area
      },
    },
  },
};

function GraphicData() {
  const { daysData, expensesDayData } = useProvider();
  const { t } = useTranslation();

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
    <div className="mx-96 pb-20 sm:flex-col">
      <div className=" bg-yellow-200  rounded-3xl p-10 font-sans">
        <h2 className="flex justify-start sm:text-sm md:text-xl font-bold mb-10">
          {t("ExpensesLastWeek")}
        </h2>
        <p className="text-3xl font-bold  text-black pb-5"></p>
        <Bar options={options} data={data} />
        <div className="my-5 "></div>
        <div className="flex justify-between mt-3"></div>

        <hr className="border-2" />
        <div className="rounded-xl py-5 flex sm:flex-col md:flex-row sm:items-center md:justify-between">
          <div>
            <DailyExpenses />
          </div>
          <div className="lg:text-end">
            <DailyVariation />
          </div>
        </div>
      </div>
    </div>
  );
}
export default GraphicData;

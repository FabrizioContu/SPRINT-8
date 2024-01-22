import React from "react";
import { useProvider } from "../../context/Context";
import { useTranslation } from "react-i18next";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Languages from "../Languages";

const TotalBalance: React.FC = () => {
  const { totalWeekBalance, currentWeek, weeksList, changeWeek } =
    useProvider();
  const { t } = useTranslation();

  return (
    <div className="mx-96 my-5 pt-20">
      <Languages />
      <div className="bg-green-700 text-white rounded-xl p-5 flex sm:flex-col lg:flex-row sm:items-center lg: items-stretch lg:justify-between">
        <div className="ms-5">
          <h2 className="font-sans">{t("TotalBalance")}</h2>
          <p className="font-sans font-bold text-3xl">{totalWeekBalance}€</p>
        </div>
        <div className="flex justify-center items-center gap-3 me-5 text-2xl">
          {currentWeek > 0 && (
            <button
              className="cursor-pointer"
              onClick={() => changeWeek("prev")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  changeWeek("prev");
                }
              }}
              tabIndex={0}
              role="button"
              aria-label="Previous Week"
            >
              <FaArrowLeftLong />
            </button>
          )}
          {currentWeek < weeksList.length - 1 && (
            <button
              className="cursor-pointer"
              onClick={() => changeWeek("next")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  changeWeek("next");
                }
              }}
              tabIndex={0}
              role="button"
              aria-label="Next Week"
            >
              <FaArrowRightLong />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalBalance;

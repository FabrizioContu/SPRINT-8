import React from "react";
import { useProvider } from "../../context/Context";
import { useTranslation } from "react-i18next";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Languages from "../Languages";

const TotalBalance: React.FC = () => {
  const { totalWeekBalance } = useProvider();
  const { t } = useTranslation();

  return (
    <div className="mx-96 my-5 pt-20">
      <Languages />
      <div className="bg-green-700 text-white rounded-xl p-5 flex justify-between">
        <div className="ms-5">
          <h2 className="font-sans">{t("TotalBalance")}</h2>
          <p className="font-sans font-bold text-3xl">{totalWeekBalance}€</p>
        </div>
        <div className="flex justify-center items-center gap-3 me-5 text-2xl">
          <FaArrowLeftLong />
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default TotalBalance;

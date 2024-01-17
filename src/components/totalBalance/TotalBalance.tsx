import React from "react";
import { useProvider } from "../../context/Context";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const TotalBalance: React.FC = () => {
  const { totalWeekBalance } = useProvider();

  return (
    <div className="mx-96 m-10">
      <div className="bg-green-700 text-white rounded-xl p-5 flex justify-between">
        <div className="ms-5">
          <h2 className="font-sans">Total Balance</h2>
          <p className="font-sans font-bold text-3xl">{totalWeekBalance} €</p>
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

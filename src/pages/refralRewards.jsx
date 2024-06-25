import React from "react";
import { RankSelector } from "../selector/globalSelector";
import { useSelector } from "react-redux";

function RefralRewards() {
  const rank = useSelector(RankSelector);
  return (
    <div className="w-full h-full max-h-minus-60 flex px-4 flex-col items-center justify-center">
      <span className=" font-bold w-full text-center text-2xl ">
        Friends Level <br /> Up Bonus
      </span>
      <div className="w-full gap-2 mt-6   text-white px-4 rounded-lg flex justify-between items-center">
        <span className="mr-auto text-gray-400">Level Up</span>
        <span className="mr-2 text-gray-400 font-semibold"> Regular</span>
        <span className=" text-gray-400 font-semibold"> Premium</span>
      </div>
      <div className="w-full   overflow-auto   my-2">
        <div className=" w-full grid gap-3">
          {rank?.map((data, index) => (
            <div
              key={index}
              className="w-full gap-2   text-white px-4 rounded-lg flex justify-between items-center"
            >
              <img
                src={data?.imageUrl}
                className="w-8 h-8   rounded-full  bg-gray-800 "
                alt="Diamond"
              />
              <span className="mr-auto">{data?.tittle}</span>
              <span className="mr-4 text-yellow-400 font-semibold">
                +{data?.RefralAmount}
              </span>
              <span className=" text-yellow-400 font-semibold">
                +{data?.premiumReferalAmount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RefralRewards;

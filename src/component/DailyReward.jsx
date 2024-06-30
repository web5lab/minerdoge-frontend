import React, { useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { DailyLoginApi, getDailyReward } from "../App/features/gameAction";
import {
  dailyRewardDataSelector,
  dailyRewardSelector,
  tgDataSelector,
} from "../selector/globalSelector";
import { formatNumber } from "../utils";
import { closeBottomSheet } from "../App/features/gameSlice";

function DailyReward() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDailyReward());
  }, []);
  const data = useSelector(dailyRewardSelector);
  const userData = useSelector(dailyRewardDataSelector);
  const tg = useSelector(tgDataSelector);
  const closeSheet = () => {
    dispatch(closeBottomSheet());
  };
  const collectReward = () => {
    const obj = {
      tgData: tg,
    };
    dispatch(DailyLoginApi());
  };
  return (
    <div className="w-full h-full max-h-minus-60 flex  flex-col items-center justify-center">
      <div className="w-full flex justify-end ">
        <button onClick={closeSheet}>
          <IoCloseCircle className="bg-white rounded-full text-black text-2xl" />
        </button>
      </div>
      <div className="w-full h-full  overflow-auto   my-2">
        <div className=" w-full grid gap-2">
          <div className="w-full flex flex-col  justify-center items-center">
            <img className="bg-black mt-4 h-36" src="calender.png"></img>
            <h1 className=" font-bold text-3xl my-2">Daily Rewards</h1>
          </div>
          <div className="grid gap-2 grid-cols-4">
            {data.map((data, index) => (
              <button
                key={index}
                className={`w-full h-14  ${
                  index < userData?.compltedDay
                    ? " bg-green-500"
                    : "bg-gray-700"
                }  ${
                  index + 1 === userData?.rewardStreak
                    ? " border-green-500 border-2"
                    : ""
                }  text-white  rounded-lg flex flex-col justify-center items-center`}
              >
                <span className="cs-text-2">Day {data?.day}</span>
                <img
                  src="hashcoin.jpeg"
                  className="w-6 h-6  rounded-full "
                  alt="Diamond"
                />
                <span className="cs-text-2">
                  {formatNumber(data?.rewardAmount)}
                </span>
              </button>
            ))}
          </div>
          <button
            className={` ${
              userData?.claimed
                ? "text-white bg-black border-2"
                : "bg-white text-black"
            } mt-4 rounded-full font-semibold  p-4`}
            disabled={userData?.claimed}
            onClick={collectReward}
          >
            {userData?.claimed ? "Come back tommorow" : "Collect"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DailyReward;

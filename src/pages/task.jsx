import React, { useEffect } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { taskSelector } from "../selector/globalSelector";
import { getTask } from "../App/features/gameAction";

const networks = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

function Task() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTask());
  }, []);

  const task = useSelector(taskSelector);
  return (
    <div className="w-full h-full max-h-minus-60 flex px-4 flex-col items-center justify-center">
      <div className="w-full h-full  overflow-auto   my-2">
        <div className=" w-full grid gap-2">
          <div className="w-full flex flex-col opacity-[0.8] justify-center items-center">
            <img className="bg-black mt-4 h-36" src="t-logo.png"></img>
            <h1 className=" font-bold text-3xl mt-0">Earn</h1>
          </div>
          <div>
          <button
                className="w-full gap-4 py-2 my-2 bg-gray-700 text-white px-4 rounded-lg flex justify-between items-center"
                onClick={() => {
                  // window.open(`${data?.Url}`, "_blank");
                }}
              >
                <img
                  src="task/handshake.png"
                  className="w-10 h-10  rounded-md  bg-black "
                  alt="Diamond"
                />
                <div className="flex mr-auto flex-col">
                  <h1 className=" text-left w-full text-yellow-400 font-semibold">Invite Bonus</h1>
                  <div className="flex gap-2 justify-start items-center">
                    <img
                      src="hashcoin.jpeg"
                      className="w-6 h-6  rounded-full "
                      alt="Diamond"
                    />
                    <span className=" text-xs text-left font-extrabold text-white">
                     up to 10,000 for you & friend
                    </span>
                  </div>
                </div>
                <FaAnglesRight />
              </button>
          </div>
          <div>
            <span classname=" text-xl font-extrabold">Daily Tasks</span>
            <button
                className="w-full gap-4 py-2 my-2 bg-gray-700 text-white px-4 rounded-lg flex justify-between items-center"
                onClick={() => {
                  // window.open(`${data?.Url}`, "_blank");
                }}
              >
                <img
                  src="calender.png"
                  className="w-10 h-10  rounded-md  bg-black "
                  alt="Diamond"
                />
                <div className="flex mr-auto flex-col">
                  <h1 className=" text-left w-full text-yellow-400 font-semibold">Daily Reward</h1>
                  <div className="flex gap-2 justify-start items-center">
                    <img
                      src="hashcoin.jpeg"
                      className="w-6 h-6  rounded-full "
                      alt="Diamond"
                    />
                    <span className=" text-xs font-extrabold text-white">
                     Come back tomorrow
                    </span>
                  </div>
                </div>
                <FaAnglesRight />
              </button>
          </div>
          <div>
            <h1>Specials</h1>
            {task?.map((data, index) => (
              <button
                key={index}
                className="w-full gap-4 py-2 my-2 bg-gray-700 text-white px-4 rounded-lg flex justify-between items-center"
                onClick={() => {
                  window.open(`${data?.Url}`, "_blank");
                }}
              >
                <img
                  src={data?.imgUrl}
                  className="w-10 h-10  rounded-md  bg-black "
                  alt="Diamond"
                />
                <div className="flex mr-auto flex-col">
                  <h1 className=" text-left w-full text-yellow-400 font-semibold">{data?.tittle}</h1>
                  <div className="flex gap-2 justify-start items-center">
                    <img
                      src="hashcoin.jpeg"
                      className="w-6 h-6  rounded-full "
                      alt="Diamond"
                    />
                    <span className=" text-xs font-extrabold">
                      +{Number(data?.rewardAmount).toLocaleString()}
                    </span>
                  </div>
                </div>
                <FaAnglesRight />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;

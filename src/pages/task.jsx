import React, { useEffect } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  dailyRewardDataSelector,
  friendsSelector,
  taskSelector,
  tgDataSelector,
  userSelector,
} from "../selector/globalSelector";
import {
  completeTaskApi,
  getFriends,
  getTask,
} from "../App/features/gameAction";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import DailyReward from "../component/DailyReward";
import { openBottomSheet } from "../App/features/gameSlice";
import SecretCode from "../component/SecretCode";

function Task() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const task = useSelector(taskSelector);
  const user = useSelector(userSelector);
  const friends = useSelector(friendsSelector);
  const userData = useSelector(dailyRewardDataSelector);
  const tg = useSelector(tgDataSelector);
  useEffect(() => {
    dispatch(getTask());
  }, [user]);

  useEffect(() => {
    const obj = {
      tgData: tg,
    };
    dispatch(getFriends(obj));
  }, []);

  const openDailyLogin = () => {
    dispatch(openBottomSheet(<DailyReward />));
  };

  const completeTask = (url, id, type, requiremnet) => {
    if (type === "refral") {
      if (friends?.referralCount < requiremnet ) {
        toast.error(
          `need ${requiremnet - friends?.referralCount} more refrals`
        );
      } else {
        const obj = {
          tgData: tg,
          taskId: id,
        };
        dispatch(completeTaskApi(obj));
      }
      return;
    }
    window.open(`${url}`, "_blank");
    const obj = {
      tgData: tg,
      taskId: id,
    };
    dispatch(completeTaskApi(obj));
  };

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
                navigation("/friends");
              }}
            >
              <img
                src="task/handshake.png"
                className="w-10 h-10  rounded-md  bg-black "
                alt="Diamond"
              />
              <div className="flex mr-auto flex-col">
                <h1 className=" text-left w-full text-yellow-400 font-semibold">
                  Invite Bonus
                </h1>
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
                dispatch(openBottomSheet(<SecretCode/>))
              }}
            >
              <img
                src="secret.jpeg"
                className="w-10 h-10  rounded-md  bg-black "
                alt="Diamond"
              />
              <div className="flex mr-auto flex-col">
                <h1 className=" text-left w-full text-yellow-400 font-semibold">
                  Secret code
                </h1>
                <div className="flex gap-2 justify-start items-center">
                  <img
                    src="hashcoin.jpeg"
                    className="w-6 h-6  rounded-full "
                    alt="Diamond"
                  />
                  <span className=" text-xs font-extrabold text-white">
                    1,000,000
                  </span>
                </div>
              </div>
              <FaAnglesRight />
            </button>
            <button
              className="w-full gap-4 py-2 my-2 bg-gray-700 text-white px-4 rounded-lg flex justify-between items-center"
              onClick={openDailyLogin}
            >
              <img
                src="calender.png"
                className="w-10 h-10  rounded-md  bg-black "
                alt="Diamond"
              />
              <div className="flex mr-auto flex-col">
                <h1 className=" text-left w-full text-yellow-400 font-semibold">
                  Daily Reward
                </h1>
                <div className="flex gap-2 justify-start items-center">
                  <img
                    src="hashcoin.jpeg"
                    className="w-6 h-6  rounded-full "
                    alt="Diamond"
                  />
                  <span className=" text-xs font-extrabold text-white">
                    {userData?.claimed ? "Come back tommorow" : "Collect Now"}
                  </span>
                </div>
              </div>
              <FaAnglesRight />
            </button>
          </div>
          {task[0]?.tasks?.length != 0 && (
            <div>
              <h1>Specials</h1>
              {task[0]?.tasks?.map((data, index) => (
                <button
                  key={index}
                  className={`w-full bg-gray-700 gap-4 py-2 my-2 px-4 rounded-lg flex justify-between items-center ${
                    user.completedTask.includes(data?.id)
                      ? " cursor-not-allowed"
                      : " text-white"
                  }`}
                  onClick={() => {
                    completeTask(data?.Url, data?.id);
                  }}
                  disabled={user.completedTask.includes(data?.id)}
                >
                  <img
                    src={data?.imgUrl}
                    className="w-10 h-10  rounded-md  bg-black "
                    alt="Diamond"
                  />
                  <div className="flex mr-auto flex-col">
                    <h1 className=" text-left w-full text-yellow-400 font-semibold">
                      {data?.tittle}
                    </h1>
                    <div className="flex gap-2 justify-start items-center">
                      <img
                        src="hashcoin.jpeg"
                        className="w-6 h-6  rounded-full "
                        alt="Diamond"
                      />
                      <span className="text-xs font-extrabold">
                        {user.completedTask.includes(data?.id)
                          ? "Completed"
                          : Number(data?.rewardAmount).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <FaAnglesRight />
                </button>
              ))}
            </div>
          )}
          {task?.[1]?.tasks?.length != 0 && (
            <div>
              <h1>Bonuses</h1>
              {task?.[1]?.tasks?.map((data, index) => (
                <button
                  key={index}
                  className={`w-full gap-4 py-2 my-2 px-4 bg-gray-700 rounded-lg flex justify-between items-center ${
                    user.completedTask.includes(data?.id)
                      ? " cursor-not-allowed"
                      : " text-white"
                  }`}
                  onClick={() => {
                    completeTask(
                      data?.Url,
                      data?.id,
                      "refral",
                      data?.requirment
                    );
                  }}
                  disabled={user.completedTask.includes(data?.id)}
                >
                  <img
                    src={data?.imgUrl}
                    className="w-10 h-10  rounded-md  bg-black "
                    alt="Diamond"
                  />
                  <div className="flex mr-auto flex-col">
                    <h1 className=" text-left w-full text-yellow-400 font-semibold">
                      {data?.tittle}
                    </h1>
                    <div className="flex gap-2 justify-start items-center">
                      <img
                        src="hashcoin.jpeg"
                        className="w-6 h-6  rounded-full "
                        alt="Diamond"
                      />
                      <span className=" text-xs font-extrabold">
                        {user.completedTask.includes(data?.id)
                          ? "Completed"
                          : Number(data?.rewardAmount).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <FaAnglesRight />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;

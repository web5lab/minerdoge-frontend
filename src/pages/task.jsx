import React, { useEffect } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  friendsSelector,
  taskSelector,
  userSelector,
} from "../selector/globalSelector";
import {
  completeTaskApi,
  getFriends,
  getTask,
} from "../App/features/gameAction";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Task() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const task = useSelector(taskSelector);
  const user = useSelector(userSelector);
  const friends = useSelector(friendsSelector);
  useEffect(() => {
    dispatch(getTask());
  }, [user]);

  useEffect(() => {
    const obj = {
      tgData:
        "user=%7B%22id%22%3A5281683183%2C%22first_name%22%3A%22OtGalaxy%20Dev%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22OtGalaxy_Dev%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-4195278687679847124&chat_type=supergroup&auth_date=1719115920&hash=788f8150e3f54b36d6218c32723011811d8213efb63b5ce375a77ce1ebde17a7",
    };
    dispatch(getFriends(obj));
  }, []);

  const completeTask = (url, id, type, requiremnet) => {
    if (type === "refral") {
      if (friends?.referralCount < requiremnet + 1) {
        toast.error(`need ${requiremnet - friends?.referralCount} more refrals`);
      } else {
        const obj = {
          tgData:
            "user=%7B%22id%22%3A5281683183%2C%22first_name%22%3A%22OtGalaxy%20Dev%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22OtGalaxy_Dev%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-4195278687679847124&chat_type=supergroup&auth_date=1719115920&hash=788f8150e3f54b36d6218c32723011811d8213efb63b5ce375a77ce1ebde17a7",
          taskId: id,
        };
        dispatch(completeTaskApi(obj));
      }
      return;
    }
    window.open(`${url}`, "_blank");
    const obj = {
      tgData:
        "user=%7B%22id%22%3A5281683183%2C%22first_name%22%3A%22OtGalaxy%20Dev%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22OtGalaxy_Dev%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-4195278687679847124&chat_type=supergroup&auth_date=1719115920&hash=788f8150e3f54b36d6218c32723011811d8213efb63b5ce375a77ce1ebde17a7",
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
                // window.open(`${data?.Url}`, "_blank");
              }}
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
                    Come back tomorrow
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

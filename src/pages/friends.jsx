import React, { useEffect } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import toast from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa";
import {
  friendsSelector,
  RankSelector,
  userSelector,
} from "../selector/globalSelector";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "../App/features/gameAction";
import { formatNumber } from "../utils";
import { useNavigate } from "react-router-dom";

const networks = [1, 2, 3];

function Friends() {
  const friends = useSelector(friendsSelector);
  const rank = useSelector(RankSelector);
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  useEffect(() => {
    const obj = {
      tgData:
        "user=%7B%22id%22%3A5281683183%2C%22first_name%22%3A%22OtGalaxy%20Dev%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22OtGalaxy_Dev%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-4195278687679847124&chat_type=supergroup&auth_date=1719115920&hash=788f8150e3f54b36d6218c32723011811d8213efb63b5ce375a77ce1ebde17a7",
    };
    dispatch(getFriends(obj));
  }, []);
  const handleButtonClick = () => {
    const message =
      "https://t.me/hamster_Kombat_bot/start?startapp=kentId5281683183\n\nPlay with me, become cryptoexchange CEO and get a token airdrop!\n💸  2k Coins as a first-time gift\n🔥  25k Coins if you have Telegram Premium";
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
      message
    )}`;

    window.open(telegramShareUrl, "_blank");

  };
  const handleCopy = () => {
    toast.success("Copied Succesfully");
    navigator.clipboard.writeText(
      `https://t.me/hamster_Kombat_bot/start?startapp=R_${user?.id}`
    );
  };

  return (
    <div className="w-full h-full max-h-minus-60 flex px-4 flex-col items-center justify-center">
      <h1 className=" font-bold text-3xl mt-8">
        {friends?.friends?.length} Friends
      </h1>
      <h1 className=" font-bold text-xl my-4">
        Invite friends and get bonuses
      </h1>
      <div className="w-full bg-gray-700 rounded-lg flex flex-col my-4 gap-3 justify-center items-center p-2">
        <div className="flex w-full justify-start gap-3 items-center">
          <img className=" h-12 rounded-full" src="task/handshake.png" />
          <div>
            <span className=" font-semibold">Invite Friend</span>
            <div className="flex justify-center items-center gap-2">
              <img className=" h-6 rounded-full" src="hashcoin.jpeg" />
              <span>5,000 for you & your friend</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-500 rounded-full"></div>
        <div className="flex w-full justify-start gap-3 items-center">
          <img className=" h-12 rounded-full" src="tgpremium.webp" />
          <div>
            <span className=" font-semibold">Invite With Telegram Premium</span>
            <div className="flex justify-center items-center gap-2">
              <img className=" h-6 rounded-full" src="hashcoin.jpeg" />
              <span>50,000 for you & your friend</span>
            </div>
          </div>
        </div>
        <h1
          onClick={() => {
            navigation("/refralrewards");
          }}
          className=" font-bold text-xl"
        >
          Open Details
        </h1>
      </div>
      <div className="flex my-4 justify-center items-center gap-2 w-full">
        <button
          onClick={handleButtonClick}
          className="w-full bg-white rounded-full flex text-black font-extrabold justify-center items-center  h-12"
        >
          Invite Friend
        </button>
        <button onClick={handleCopy} className="bg-white rounded-full flex justify-center items-center w-14 h-12">
          <FaRegCopy className="text-black text-xl font-bold" />
        </button>
      </div>
      <div className="w-full h-full  overflow-auto   my-2">
        <div className=" w-full grid gap-3">
          {friends?.friends?.map((data, index) => (
            <div
              key={index}
              className="flex w-full justify-start gap-3 items-center"
            >
              <img className=" h-12 rounded-full" src="userlogo.png" />
              <div>
                <span className=" font-semibold">{data?.name}</span>
                <div className="flex justify-center items-center gap-2">
                  <img
                    className=" h-6 rounded-full"
                    src={rank[Number(data?.rank - 1)]?.imageUrl}
                  />
                  <span>{rank[Number(data?.rank - 1)]?.tittle}</span>
                  <div className=" rounded-full h-5 w-[1px] bg-gray-300"></div>
                  <span className=" text-yellow-400 font-bold text-base">
                    + {rank[Number(data?.rank - 1)]?.RefralAmount}
                  </span>
                </div>
              </div>
              <div className="flex ml-auto justify-center items-center gap-2">
                <span>{formatNumber(Number(data?.Balance))}</span>
                <img className=" h-6 w-6 rounded-full" src="hashcoin.jpeg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Friends;

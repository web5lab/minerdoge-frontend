import React, { useEffect } from "react";

import toast from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa";
import {
  friendsSelector,
  RankSelector,
  tgDataSelector,
  userSelector,
} from "../selector/globalSelector";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "../App/features/gameAction";
import { formatNumber } from "../utils";
import { useNavigate } from "react-router-dom";



function Friends() {
  const friends = useSelector(friendsSelector);
  const rank = useSelector(RankSelector);
  const user = useSelector(userSelector);
  const tg = useSelector(tgDataSelector);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  useEffect(() => {
    const obj = {
      tgData: tg,
    };
    dispatch(getFriends(obj));
  }, []);
  const handleButtonClick = () => {
    const message =
      `https://t.me/minerdogcoin_bot/earn?startapp=${user?.id}\n\nPlay with me get a token airdrop!\n💸  5k Coins as a first-time gift\n🔥  10k Coins if you have Telegram Premium`;
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
      message
    )}`;

    window.open(telegramShareUrl, "_blank");
  };
  const handleCopy = () => {
    toast.success("Copied Succesfully");
    navigator.clipboard.writeText(
      `https://t.me/minerdogcoin_bot/earn?startapp=${user?.id}`
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
        <button
          onClick={handleCopy}
          className="bg-white rounded-full flex justify-center items-center w-14 h-12"
        >
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

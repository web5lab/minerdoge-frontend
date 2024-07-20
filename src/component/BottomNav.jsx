import React from "react";
import { useNavigate } from "react-router-dom";
import { PiGameControllerFill } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { GiMining } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";

function BottomNav() {
  const navigation = useNavigate();
  return (
    <div className=" z-50 w-full mt-auto">
      <div className="grid grid-cols-5 gap-2 px-2 w-full bg-gray-800 py-2">
        <button
          className=" hover:bg-gray-700 flex-col justify-center items-center rounded-md"
          onClick={() => {
            navigation("/");
          }}
        >
          <PiGameControllerFill className="mx-auto text-xl" />
          <span className="  text-xs">Play</span>
        </button>
        <button
          className="hover:bg-gray-700  flex-col justify-center items-center rounded-md"
          onClick={() => {
            navigation("mine");
          }}
        >
          <GiMining className="mx-auto text-xl" />
          <span className="  text-xs">Mine</span>
        </button>
        <button
          className="hover:bg-gray-700  flex-col justify-center items-center rounded-md"
          onClick={() => {
            navigation("earn");
          }}
        >
          <GiTwoCoins className="mx-auto text-xl" />
          <span className="  text-xs">Task</span>
        </button>
        <button
          className="hover:bg-gray-700  flex-col justify-center items-center rounded-md"
          onClick={() => {
            navigation("/friends");
          }}
        >
          <FaUserFriends className="mx-auto text-xl" />
          <span className="  text-xs">Friend</span>
        </button>
        <button
          className="hover:bg-gray-700  flex-col justify-center items-center rounded-md"
          onClick={() => {
            navigation("/wallet");
          }}
        >
          <FaWallet className="mx-auto text-xl" />
          <span className="  text-xs">Wallet</span>
        </button>
      </div>
    </div>
  );
}

export default BottomNav;

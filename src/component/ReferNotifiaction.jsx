import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";

import {
  changeCurrentNotifiaction,
  closeBottomSheet,
} from "../App/features/gameSlice";
import { useNavigate } from "react-router-dom";

function ReferNotifiaction() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const referaFriend = () => {
    dispatch(closeBottomSheet());
    dispatch(changeCurrentNotifiaction("referal"));
    navigation("/friends");
  };

  const closeSheet = () => {
    dispatch(closeBottomSheet());
    dispatch(changeCurrentNotifiaction("referal"));
  };

  return (
    <div className="w-full h-full max-h-minus-60 flex flex-col items-center justify-center bg-black text-white">
      <div className="w-full flex justify-end">
        <button onClick={closeSheet}>
          <IoCloseCircle className="bg-black rounded-full text-white text-3xl hover:text-red-500" />
        </button>
      </div>
      <div className="w-full h-full overflow-auto my-2">
        <div className="w-full grid gap-4">
          <div className="w-full flex flex-col justify-center items-center">
            <img className="bg-black mt-4 h-44" src="refer.jpeg" alt="refer" />
            <div className="font-bold text-lg inline-block  max-w-[80%] text-center my-2">
              Refer and Earn 1 Million Coins on Each Referral and Also
              Participate in a 100,000 Matic (Polygon) Token Airdrop
            </div>
          </div>

          <button
            className="bg-gray-700 text-white w-full font-bold py-2 px-4 rounded-md hover:bg-neon-blue-light"
            onClick={referaFriend}
          >
            Refer Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReferNotifiaction;

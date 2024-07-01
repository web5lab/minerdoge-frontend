import React from "react";
import { IoCloseCircle } from "react-icons/io5";

import {

  loaderSelector,
  tgDataSelector,
} from "../selector/globalSelector";
import { closeBottomSheet } from "../App/features/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import { buyBoosterApi } from "../App/features/gameAction";

function BuyBooster({
  logo,
  tittle,
  subtitle,
  amount,
  bufDetail,
  id,
}) {
  const loading = useSelector(loaderSelector);
  const tg = useSelector(tgDataSelector);
  const dispatch = useDispatch();
  const closeSheet = () => {
    dispatch(closeBottomSheet());
  };

  const buyBoosterFn = () => {
    const obj = {
      tgData: tg,
      boosterId: id,
    };
    dispatch(buyBoosterApi(obj));
  };
  return (
    <div className="w-full h-full max-h-minus-60 flex  flex-col items-center justify-center">
      <div className="w-full flex justify-end ">
        <button onClick={closeSheet}>
          <IoCloseCircle className="bg-white rounded-full text-black text-2xl" />
        </button>
      </div>
      <div className="w-full h-full  overflow-auto   my-2">
        <div className=" w-full justify-center flex flex-col items-center gap-2">
          <img
            src={logo}
            className=" w-36   rounded-md  bg-gray-800 "
            alt="Diamond"
          />
          <span className=" my-2 text-2xl font-bold">{tittle}</span>
          <span className="text-base text-gray-500">{subtitle}</span>
          <span className="text-base text-gray-500">{bufDetail}</span>
          <div className="flex justify-center mt-2 gap-2  items-center">
            <img
              src="tcoin.png"
              className="w-12 my-2 h-12 bg-white  rounded-full "
              alt="Diamond"
            />
            <div className=" cs-text font-bold">
              {Number(amount).toLocaleString()}
            </div>
          </div>
          <button
            disabled={loading}
            onClick={buyBoosterFn}
            className={`w-full rounded-full font-semibold p-4 flex items-center justify-center ${
              loading ? "bg-gray-400" : "bg-white text-black"
            }`}
          >
            {loading ? (
              <div className="flex justify-center items-center gap-4">
                Please wait ..
                <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
              </div>
            ) : (
              "Buy Booster"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyBooster;

import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { closeBottomSheet } from "../App/features/gameSlice";
import {  buyMinerApi } from "../App/features/gameAction";
import { loaderSelector, tgDataSelector } from "../selector/globalSelector";

function BuyMiner({ logo, tittle, miningRate, amount, btnTxt,  id }) {
  const dispatch = useDispatch();
  const tg = useSelector(tgDataSelector);
  const loading = useSelector(loaderSelector);

  const closeSheet = () => {
    dispatch(closeBottomSheet());
  };
  const buyMinerFn = () => {
    const obj = {
      tgData: tg,
      minerId: id,
    };
    dispatch(buyMinerApi(obj));
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
            className="w-36   rounded-md  bg-gray-800 "
            alt="Diamond"
          />
          <span className=" my-2 text-2xl font-bold">{tittle}</span>
          <div className="flex justify-center items-center gap-1">
            <span className="text-base font-bold text-gray-300">Earn/Hr</span>
            <img
              src="hashcoin.jpeg"
              className="w-4 h-4  rounded-full "
              alt="Diamond"
            />
            <span className=" text-base font-extrabold text-yellow-400">
              +{miningRate}
            </span>
          </div>
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
            onClick={buyMinerFn}
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
              { btnTxt }
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyMiner;

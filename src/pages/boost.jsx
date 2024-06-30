import React, { useEffect } from "react";
import {
  boosterSelector,
  coinSelector,
  userSelector,
} from "../selector/globalSelector";
import { useDispatch, useSelector } from "react-redux";
import { getBoosters } from "../App/features/gameAction";
import { FaChevronRight } from "react-icons/fa";
import { formatNumber } from "../utils";
import BuyBooster from "../component/buyBooster";
import { openBottomSheet } from "../App/features/gameSlice";

function Boost() {
  const dispatch = useDispatch();
  const coin = useSelector(coinSelector);
  const booster = useSelector(boosterSelector);
  const user = useSelector(userSelector);

  useEffect(() => {
    dispatch(getBoosters());
  }, []);

  const openBuySection = (
    logo,
    tittle,
    subtitle,
    amount,
    btnTxt,
    enabled,

    id
  ) => {
    console.log("id", id);
    dispatch(
      openBottomSheet(
        <BuyBooster
          logo={logo}
          tittle={tittle}
          amount={amount}
          btnTxt={btnTxt}
          enabled={enabled}
          id={id}
        />
      )
    );
  };

  const getCardInfo = (cardId, cardData) => {
    let userBooster = user.boosterCrads.find((b) => b.id === cardId) || {
      id: cardId,
      level: 0,
    };
    const nextLevel = userBooster.level + 1;
    const levelDetails = cardData.levelAmount.find(
      (l) => l.level === nextLevel
    );
    let maxed = false;
    if (!maxed) {
      maxed = true;
    }
    return {
      nextRank: userBooster.level + 1,
      nextAmount: levelDetails?.buyingPrice,
      maxed: false,
    };
  };

  return (
    <div className="w-full h-full max-h-minus-60 flex px-4 flex-col items-center justify-center">
      <div className="w-full h-full  overflow-auto   my-2">
        <div className=" w-full grid gap-2">
          <div className="flex my-2 justify-center px-4 gap-4 items-center">
            <img
              src="hashcoin.jpeg"
              className="w-14 h-14  rounded-full "
              alt="Diamond"
            />
            <span className=" text-4xl font-extrabold">
              {Math.floor(Number(coin)).toLocaleString()}
            </span>
          </div>

          <h1 className=" text-center text-2xl font-bold">Free Daily Boosts</h1>
          <div className="grid grid-cols-2 gap-2">
            <button className="p-1 bg-gray-700 flex justify-center items-center gap-2 rounded-lg">
              <img src="rocket.png" className="w-8" alt="" />
              <div className="flex flex-col items-start gap-[1px]">
                <span>Booster</span>
                <span className="text-gray-400 font-semibold">Coming Soon</span>
              </div>
            </button>
            <button className="p-1 bg-gray-700 flex justify-center items-center gap-2 rounded-lg">
              <img src="booster/battery.png" className="w-8" alt="" />
              <div className="flex flex-col items-start gap-[1px]">
                <span className="text-yellow-400 font-medium ">
                  Full Energy
                </span>
                <span className="text-gray-400 font-semibold">Coming Soon</span>
              </div>
            </button>
          </div>
          <h1 className=" text-center text-xl mt-2 font-bold">Boosters</h1>
          <div className="grid grid-cols-1 gap-2">
            {booster?.map((data, index) => (
              <button
                key={index}
                className="p-1 bg-gray-700 flex justify-between items-center gap-2 rounded-lg"
                onClick={() => {
                  openBuySection(
                    data?.imgUrl,
                    data?.name,
                    "ssd",
                    getCardInfo(data?.id, data).nextAmount,
                    "Get",
                    true,
                    data?.id
                  );
                }}
              >
                <img src={data?.imgUrl} className="w-8" alt="" />
                <div className="flex flex-col mr-auto items-start gap-[1px]">
                  <span>{data?.name}</span>
                  <div className="flex justify-start gap-2 items-center">
                    <img
                      className=" h-6 w-6 rounded-full"
                      src="hashcoin.jpeg"
                    />
                    <span className=" font-bold">
                      {Number(
                        getCardInfo(data?.id, data).nextAmount
                      ).toLocaleString()}
                    </span>
                    <span className=" text-gray-400">
                      {getCardInfo(data?.id, data).nextRank} Lvl
                    </span>
                  </div>
                </div>
                <FaChevronRight className=" text-2xl text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boost;

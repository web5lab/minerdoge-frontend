import React, { useEffect } from "react";

import { getMiningCards } from "../App/features/gameAction";
import { useDispatch, useSelector } from "react-redux";
import {
  coinSelector,
  miningCardSelector,
  miningRateSelector,
  userSelector,
} from "../selector/globalSelector";
import { formatNumber } from "../utils";
import { openBottomSheet } from "../App/features/gameSlice";
import BuyMiner from "../component/buyMiner";

function Mine() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMiningCards());
  }, []);

  const card = useSelector(miningCardSelector);
  const coin = useSelector(coinSelector);
  const miningRate = useSelector(miningRateSelector);
  const user = useSelector(userSelector);

  const openBuySection = (
    logo,
    tittle,
    miningRate,
    amount,

    enabled,
    id
  ) => {
    dispatch(
      openBottomSheet(
        <BuyMiner
          logo={logo}
          tittle={tittle}
          miningRate={miningRate}
          amount={amount}
          enabled={enabled}
          id={id}
        />
      )
    );
  };

  const getCardInfo = (cardId, cardData) => {
    let userBooster = user.miningCards.find((b) => b.id === cardId) || {
      id: cardId,
      level: 0,
    };
    const nextLevel = userBooster.level + 1;
    const levelDetails = cardData.levelAmount.find(
      (l) => l.level === nextLevel
    );
    let maxed = false;
    let nextRank = userBooster.level;
    if (!levelDetails) {
      nextRank -= 1;
      maxed = true;
    }

    let hashAdded;

    if (nextLevel != 1) {
      const previousLevelDetails = cardData.levelAmount.find(
        (l) => l.level === nextLevel - 1
      );

      hashAdded = levelDetails.miningRate - previousLevelDetails.miningRate;
    }
    if (nextLevel === 1) {
      hashAdded = levelDetails.miningRate;
    }
    return {
      nextRank: nextRank,
      hash:hashAdded,
      nextAmount: levelDetails?.buyingPrice,
      maxed: maxed,
    };
  };

  return (
    <div className="w-full h-full max-h-minus-60 flex px-4 flex-col items-center justify-center">
      <div className="flex my-6 justify-center px-4 gap-4 items-center">
        <img
          src="hashcoin.jpeg"
          className="w-14 h-14  rounded-full "
          alt="Diamond"
        />
        <span className=" text-4xl font-extrabold">
          {Math.floor(Number(coin)).toLocaleString()}
        </span>
      </div>
      <div className="flex mt-1 mb-6 justify-center px-4 gap-1 items-center">
        <span className="text-xs">Earning per hour</span>
        <img
          src="hashcoin.jpeg"
          className="w-4 h-4  rounded-full "
          alt="Diamond"
        />
        <span className=" text-xs font-extrabold text-green-400">
          +{formatNumber(miningRate)}
        </span>
      </div>
      <div className=" text-xs bg-gray-700  rounded-md p-2 w-full grid grid-cols-1">
        <button className=" hover:bg-gray-800 p-1 font-bold rounded-md">
          Mining Cards
        </button>
      </div>
      <div className="w-full h-full  overflow-auto   my-2">
        <div className=" w-full grid grid-cols-2 gap-2">
          {card?.map((data, index) => (
            <button
              key={index}
              className="w-full gap-2  bg-gray-700 text-white p-2 rounded-lg flex flex-col justify-center items-center"
              disabled={getCardInfo(data?.id, data).maxed}
              onClick={() => {
                openBuySection(
                  data?.imgUrl,
                  data?.name,
                  getCardInfo(data?.id, data).hash,
                  getCardInfo(data?.id, data).nextAmount,
                  true,
                  data?.id
                );
              }}
            >
              <img
                src={data?.imgUrl}
                className=" w-16   rounded-md  bg-gray-800 "
                alt="Diamond"
              />
              <span className=" my-2">{data?.name}</span>
              <div className="flex justify-center items-center gap-1">
                <span className="text-xs text-gray-300">Earn/Hr</span>
                <img
                  src="hashcoin.jpeg"
                  className="w-4 h-4  rounded-full "
                  alt="Diamond"
                />

                <span className=" text-xs font-extrabold text-yellow-400">
                  +
                  {
                    data?.levelAmount[getCardInfo(data?.id, data).nextRank]
                      ?.miningRate
                  }
                </span>
              </div>
              <div className="w-full h-[2px] my-[1px] bg-gray-600 rounded-full"></div>
              {getCardInfo(data?.id, data).maxed ? (
                <span>Maxed Out</span>
              ) : (
                <div className="flex justify-between w-full px-2 min-h-12 items-center">
                  <span>Lvl {getCardInfo(data?.id, data).nextRank}</span>

                  <div className="h-full w-[2px]  bg-gray-600"></div>
                  <div className="flex gap-2">
                    <img
                      src="hashcoin.jpeg"
                      className="w-4 h-4  rounded-full "
                      alt="Diamond"
                    />

                    <span className=" text-xs font-extrabold text-yellow-400">
                      {formatNumber(getCardInfo(data?.id, data).nextAmount)}
                    </span>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mine;

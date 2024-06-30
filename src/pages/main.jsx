import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiElectric } from "react-icons/gi";
import { RxRocket } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { formatNumber, getCoinPercentage } from "../utils";
import DailyReward from "../component/DailyReward";
import MinersNotification from "../component/MinersNotification";
import { useDispatch, useSelector } from "react-redux";
import { addClicks, loginApi } from "../App/features/gameAction";
import { FaChevronRight } from "react-icons/fa";
import {
  coinSelector,
  miningNotificationSelector,
  miningRateSelector,
  networkSelector,
  RankSelector,
  rechargeSelector,
  tgDataSelector,
  userSelector,
} from "../selector/globalSelector";
import {
  changeCoin,
  changeRecharge,
  openBottomSheet,
} from "../App/features/gameSlice";
import toast from "react-hot-toast";

function Main() {
  const [points, setPoints] = useState([]);
  const [ripples, setRipples] = useState([]);
  const [isPushed, setIsPushed] = useState(false);
  const [count, setCount] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const coin = useSelector(coinSelector);
  const miningRate = useSelector(miningRateSelector);
  const rank = useSelector(RankSelector);
  const network = useSelector(networkSelector);
  const recharge = useSelector(rechargeSelector);
  const tg = useSelector(tgDataSelector);
  const miningNotification = useSelector(miningNotificationSelector)

  const openBottom = () => {
    dispatch(openBottomSheet(<DailyReward />));
  };

  useEffect(() => {
   if(miningNotification){
dispatch(openBottomSheet(<MinersNotification amount={miningNotification?.amount}/>))
   }
  }, [])
  

  useEffect(() => {
    if (recharge < user?.rechargeLimit) {
      const interval = setInterval(() => {
        dispatch(changeRecharge(user?.rechargeRate || 1)); // Default to 1 if rechargeRate is not defined
      }, 1000);

      return () => clearInterval(interval); // Clean up the interval on component unmount or when recharge changes
    }
  }, [recharge, user?.rechargeRate]);

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const clickApiCaller = () => {
    setCount(count + 1);

    // Clear the previous timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout
    const newTimeoutId = setTimeout(() => {
      console.log("total clicks", count);
      const obj = {
        tgData: tg,
        clicks: count + 1,
      };
      dispatch(addClicks(obj));
      setCount(0);
      console.log("No clicks for 1 seconds");
    }, 1500);

    setTimeoutId(newTimeoutId);
  };

  const handleClick = (e) => {
    if (recharge === 0) {
      toast.error("insufficient recharge point");
    }
    clickApiCaller();
    dispatch(changeRecharge(-1));
    setIsPushed(true);
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    dispatch(changeCoin(user?.earnPerclicks));
    const newRipple = {
      id: Date.now(),
      x: centerX,
      y: centerY,
      maxSize: rect.width * 2,
    };

    const newPoint = {
      id: Date.now(),
      x: e.clientX - Math.random(1, 20) * 100,
      y: e.clientY + Math.random(1, 20) * 40,
      startY: e.clientY,
    };

    setPoints((prevPoints) => [...prevPoints, newPoint]);

    setRipples((prevRipples) => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((ripple) => ripple.id !== newRipple.id)
      );
    }, 600);

    // Remove the point after 1 second
    setTimeout(() => {
      setPoints((prevPoints) =>
        prevPoints.filter((point) => point.id !== newPoint.id)
      );
    }, 1000);

    setTimeout(() => {
      setIsPushed(false);
    }, 100);
  };

  return (
    <div className="flex flex-col  h-full shadow-inner  justify-between items-center flex-grow">
      <div className="flex items-center z-50 w-full justify-between px-6 space-x-2 mt-4">
        <div className="flex justify-center items-center gap-2">
          <img
            className="bg-black rounded-full  w-10  h-10"
            src="userlogo.png"
          ></img>
          <div>
            <div className=" text-base font-semibold">{user?.name}</div>
          </div>
        </div>
        <button
          className=" rounded-lg border border-gray-600 flex gap-2 p-1"
          onClick={() => {
            navigation("/choosenetwork");
          }}
        >
          <img
            src={network[Number(user?.currentNetwork - 1)]?.logo}
            className="w-6 h-6  rounded-full  bg-gray-800 "
            alt="Diamond"
          />
          <span>{network[Number(user?.currentNetwork - 1)]?.tittle}</span>
        </button>
      </div>
      <div className="px-auto mb-auto mt-3 h-full border-t-2 border-[#f3b15b] cs-shadow flex-col flex justify-between  rounded-2xl w-full">
        <div className="grid mt-4 grid-cols-3 gap-2 px-2">
          <button className=" rounded-lg bg-gray-700">
            <span className=" text-xs text-[#f3b15b]">Earn Per Tap</span>
            <div className="flex gap-1 justify-center items-center">
              <img
                src="hashcoin.jpeg"
                className="w-4 h-4  rounded-full "
                alt="Diamond"
              />
              <span className="font-bold text-yellow-400">
                +{user?.earnPerclicks}
              </span>
            </div>
          </button>
          <button className=" rounded-lg bg-gray-700">
            <span className=" text-xs text-[#6af35b]">For Level Up</span>
            <div className="flex gap-1 justify-center items-center">
              <img
                src="hashcoin.jpeg"
                className="w-4 h-4  rounded-full "
                alt="Diamond"
              />

              <span className="font-bold text-yellow-400">
                +{formatNumber(rank[user?.currentRank]?.requiredAmount)}
              </span>
            </div>
          </button>
          <button className=" rounded-lg bg-gray-700" onClick={openBottom}>
            <span className=" text-xs text-[#5b72f3]">Mining per hour</span>
            <div className="flex gap-1 justify-center items-center">
              <img
                src="hashcoin.jpeg"
                className="w-4 h-4  rounded-full "
                alt="Diamond"
              />
              <span className="font-bold text-yellow-400">
                +{formatNumber(miningRate)}
              </span>
            </div>
          </button>
        </div>

        <div className="flex justify-center  gap-2  items-center">
          <img
            src="tcoin.png"
            className="w-12 h-12 bg-white  rounded-full "
            alt="Diamond"
          />
          <div className=" cs-text font-bold">
            {Math.floor(Number(coin)).toLocaleString()}
          </div>
        </div>
        <div
          onClick={() => {
            navigation("/leaderboard");
          }}
        >
          <div className="mx-4 flex justify-between text-xs items-center">
            <span className="text-yellow-400">
              {rank[user?.currentRank - 1]?.tittle}
            </span>
            <FaChevronRight className="mr-auto ml-2" />
            <div>
              <span className="text-gray-300 mr-1">Rank</span>
              <span>{user?.currentRank}/9</span>
            </div>
          </div>
          <div className="mt-1 mx-4 bg-gray-500 rounded-full h-3 overflow-hidden">
            <div
              className="cs-loader h-full"
              style={{
                width: `${getCoinPercentage(
                  Math.floor(Number(coin)),
                  rank[user?.currentRank]?.requiredAmount
                )}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="mb-6">
          <div className=" flex justify-center items-center mt-4">
            <button
              className="relative w-[72vw] max-w-80 max-h-80 h-[72vw]  rounded-full flex items-center justify-center"
              onClick={handleClick}
            >
              <AnimatePresence>
                {ripples.map((ripple) => (
                  <motion.div
                    key={ripple.id}
                    className="absolute bg-blue-200 z-10 rounded-full pointer-events-none"
                    style={{
                      top: `-50%`,
                      left: `-50%`,
                      width: ripple.maxSize,
                      height: ripple.maxSize,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 1, scale: 0 }}
                    animate={{ opacity: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                ))}
              </AnimatePresence>

              <motion.button
                className="relative w-full z-20  rounded-full flex items-center justify-center"
                animate={{ scale: isPushed ? 0.9 : 1 }}
                transition={{ duration: 0.1 }}
              >
                <img
                  src="t-logo.png"
                  className="w-full z-20 h-full rounded-full shadow-white shadow-inner bg-[#f3b15b] border-[#52748f] border-8"
                  alt="Diamond"
                />
              </motion.button>
            </button>
          </div>

          <AnimatePresence>
            {points.map((point) => (
              <motion.div
                key={point.id}
                className="absolute z-30  rounded-full w-6 h-6 flex items-center text-xl font-extrabold justify-center text-white"
                style={{ top: point.y - 24, left: point.x - 12 }}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -point.startY + 100 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                +{user?.earnPerclicks}
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="mx-4 flex items-center justify-between mt-4">
            <div className="flex">
              <GiElectric className="text-yellow-400 text-2xl" />
              <span className=" font-bold">
                {recharge} / {user?.rechargeLimit}
              </span>
            </div>
            <button
              onClick={() => {
                navigation("boost");
              }}
              className="flex rounded-md bg-gray-700 p-2"
            >
              <RxRocket className="text-yellow-400 text-2xl" />
              <span className=" font-bold">Boost</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

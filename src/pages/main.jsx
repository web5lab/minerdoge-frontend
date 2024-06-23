import React, { useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiGameControllerFill } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { GiMining } from "react-icons/gi";
import { GiElectric } from "react-icons/gi";
import { RxRocket } from "react-icons/rx";
import BottomSheet from "../component/BottomSheet";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../utils";
import DailyReward from "../component/DailyReward";
import MinersNotification from "../component/MinersNotification";


function Main() {
  const [points, setPoints] = useState([]);
  const [ripples, setRipples] = useState([]);
  const [isPushed, setIsPushed] = useState(false);
  const [currency, setcurrency] = useState(9999);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const navigation = useNavigate();

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const handleClick = (e) => {
    setIsPushed(true);
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setcurrency(currency + 2);
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

    console.log("n", newPoint);
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

  useLayoutEffect(() => {
    let token = window?.Telegram?.WebApp?.initDataUnsafe?.start_param;
    console.log("data from telegram", window?.Telegram);
  }, []);

  let tokenData = "abd";

  if (tokenData === "abc") {
    return (
      <div
        className={`w-full h-screen flex justify-center items-center `}
        style={{ backgroundColor: `#1f2937` }}
      >
        <div className={`bg-[#1f2937] text-white p-8 rounded-lg`}>
          <div className=" animate-bounce rounded-full h-32 w-32 border-2 border-[#dc7000 ">
            <img src="userlogo.png" className="rounded-full" alt="" />
          </div>
          <div className=" text-white animate-pulse mt-4 text-2xl font-semibold">
            <span> Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col  h-full shadow-inner  justify-between items-center flex-grow">
      <div className="flex items-center z-50 w-full justify-between px-6 space-x-2 mt-4">
        <div className="flex justify-center items-center gap-2">
          <img
            className="bg-black rounded-full  w-10  h-10"
            src="userlogo.png"
          ></img>
          <div>
            <div className=" text-base font-semibold">OtGalaxy_Dev</div>
          </div>
        </div>
        <button
          className=" rounded-lg border border-gray-600 flex gap-2 p-1"
          onClick={() => {
            navigation("/choosenetwork");
          }}
        >
          <img
            src="bnb.svg"
            className="w-6 h-6  rounded-full  bg-gray-800 "
            alt="Diamond"
          />
          <span>BSC</span>
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
              <span>+2</span>
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
              <span>+2</span>
            </div>
          </button>
          <button className=" rounded-lg bg-gray-700" onClick={openBottomSheet}>
            <span className=" text-xs text-[#5b72f3]">Mining per hour</span>
            <div className="flex gap-1 justify-center items-center">
            <img
                src="hashcoin.jpeg"
                className="w-4 h-4  rounded-full "
                alt="Diamond"
              />
              <span>+2</span>
            </div>
          </button>
        </div>

        <div className="flex justify-center mt-2 gap-2  items-center">
        <img
                src="tcoin.png"
                className="w-12 h-12 bg-white  rounded-full "
                alt="Diamond"
              />
          <div className=" cs-text font-bold">{formatNumber(currency)}</div>
        </div>
        <div>
          <div className="mx-4 flex justify-between text-xs items-center">
            <span className="text-yellow-400">Gold</span>
            <div>
              <span className="text-gray-300 mr-1">Rank</span>
              <span>1/10</span>
            </div>
          </div>
          <div className="mt-1 mx-4 bg-gray-500 rounded-full h-3 overflow-hidden">
            <div className="cs-loader h-full" style={{ width: "78.4%" }}></div>
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
                +2
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="mx-4 flex items-center justify-between mt-4">
            <div className="flex">
              <GiElectric className="text-yellow-400 text-2xl" />
              <span className=" font-bold">1456 / 1500</span>
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
      <BottomSheet isOpen={isBottomSheetOpen} onClose={closeBottomSheet}>
        {/* <DailyReward/> */}
        <MinersNotification/>
      </BottomSheet>
    </div>
  );
}

export default Main;

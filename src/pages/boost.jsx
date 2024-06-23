import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

const networks = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

function Boost() {
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
            <span className=" text-4xl font-extrabold">10,120</span>
          </div>

          <h1 className=" text-center text-2xl font-bold">Free Daily Boosts</h1>
          <div className="grid grid-cols-2 gap-2">
            <button className="p-2 bg-gray-700 flex justify-center items-center gap-2 rounded-lg">
              <img src="rocket.png" className="w-8" alt="" />
              <div className="flex flex-col items-start gap-[1px]">
                <span>Booster</span>
                <span>3/3</span>
              </div>
            </button>
            <button className="p-2 bg-gray-700 flex justify-center items-center gap-2 rounded-lg">
              <img src="rocket.png" className="w-8" alt="" />
              <div className="flex flex-col items-start gap-[1px]">
                <span>Booster</span>
                <span>3/3</span>
              </div>
            </button>
          </div>
          <h1 className=" text-center text-xl mt-2 font-bold">Boosters</h1>
          <div className="grid grid-cols-1 gap-2">
            <button className="p-2 bg-gray-700 flex justify-start items-center gap-2 rounded-lg">
              <img src="rocket.png" className="w-8" alt="" />
              <div className="flex flex-col items-start gap-[1px]">
                <span>Booster</span>
                <span>3/3</span>
              </div>
            </button>
            <button className="p-2 bg-gray-700 flex justify-start items-center gap-2 rounded-lg">
              <img src="rocket.png" className="w-8" alt="" />
              <div className="flex flex-col items-start gap-[1px]">
                <span>Booster</span>
                <span>3/3</span>
              </div>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Boost;

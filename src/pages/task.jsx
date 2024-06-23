import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

const networks = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

function Task() {
  return (
    <div className="w-full h-full max-h-minus-60 flex px-4 flex-col items-center justify-center">
      <div className="w-full h-full  overflow-auto   my-2">
        <div className=" w-full grid gap-2">
          <div className="w-full flex flex-col opacity-[0.8] justify-center items-center">
          <img className="bg-black mt-4 h-36" src="t-logo.png"></img>
          <h1 className=" font-bold text-3xl mt-0">Earn</h1>
          </div>
          <div>
            <button className="w-full gap-2 h-14 bg-gray-700 text-white px-4 rounded-lg flex justify-between items-center">
              <img
                src="bnb.svg"
                className="w-8   rounded-full  bg-gray-800 "
                alt="Diamond"
              />
              <span className="mr-auto">BSC </span>
              <FaAnglesRight />
            </button>
          </div>
          <div>
            <span classname=" text-xl font-extrabold">Daily Tasks</span>
            <button className="w-full mt-2 gap-2 h-14 bg-gray-700 text-white px-4 rounded-lg flex justify-between items-center">
              <img
                src="bnb.svg"
                className="w-8   rounded-full  bg-gray-800 "
                alt="Diamond"
              />
              <span className="mr-auto">BSC </span>
              <FaAnglesRight />
            </button>
          </div>
          <div>
            <h1>Specials</h1>
            {networks.map((index) => (
              <button
                key={index}
                className="w-full gap-2 h-14 my-2 bg-gray-700 text-white px-4 rounded-lg flex justify-between items-center"
              >
                <img
                  src="bnb.svg"
                  className="w-8   rounded-full  bg-gray-800 "
                  alt="Diamond"
                />
                <span className="mr-auto">BSC {index}</span>
                <FaAnglesRight />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;

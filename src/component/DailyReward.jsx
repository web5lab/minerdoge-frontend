import React from 'react'
import { IoCloseCircle } from "react-icons/io5";
import { FaAnglesRight } from "react-icons/fa6";

const networks = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];


function DailyReward() {
  return (
    <div className="w-full h-full max-h-minus-60 flex  flex-col items-center justify-center">
      <div className='w-full flex justify-end '>
        <button>
        <IoCloseCircle className='bg-white rounded-full text-black text-2xl' />
        </button>
      </div>
    <div className="w-full h-full  overflow-auto   my-2">
        <div className=" w-full grid gap-2">
          <div className="w-full flex flex-col  justify-center items-center">
          <img className="bg-black mt-4 h-36" src="calender.png"></img>
          <h1 className=" font-bold text-3xl my-2">Daily Rewards</h1>
          </div>
         <div className='grid gap-2 grid-cols-4'>
         {networks.map((index) => (
            <button
              key={index}
              className="w-full h-14 border-2 bg-green-600 border-green-400  text-white  rounded-lg flex flex-col justify-center items-center"
            >
              <span className='cs-text-2'>Day 1</span>
              <img
                src="hashcoin.jpeg"
                className="w-6 h-6  rounded-full "
                alt="Diamond"
              />
              <span className='cs-text-2'>500</span>

            </button>
          ))}
         </div>
        </div>
      </div>
  </div>
  )
}

export default DailyReward
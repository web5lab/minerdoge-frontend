import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";

const networks = [1, 2, 3];

function Friends() {
  return (
    <div className="w-full h-full max-h-minus-60 flex px-4 flex-col items-center justify-center">
      <h1 className=" font-bold text-3xl mt-8">0 Friends</h1>
      <h1 className=" font-bold text-xl my-4">
        Invite friends and get bonuses
      </h1>
      <div className="w-full bg-gray-700 rounded-lg flex flex-col my-4 gap-3 justify-center items-center p-2">
        <div className="flex w-full justify-start gap-3 items-center">
          <img className=" h-12 rounded-full" src="hashcoin.jpeg" />
          <div>
            <span className=" font-semibold">Invite Friend</span>
            <div className="flex justify-center items-center gap-2">
              <img className=" h-6 rounded-full" src="hashcoin.jpeg" />
              <span>5,000 for you & your friend</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-500 rounded-full"></div>
        <div className="flex w-full justify-start gap-3 items-center">
          <img className=" h-12 rounded-full" src="hashcoin.jpeg" />
          <div>
            <span className=" font-semibold">Invite With Telegram Premium</span>
            <div className="flex justify-center items-center gap-2">
              <img className=" h-6 rounded-full" src="hashcoin.jpeg" />
              <span>50,000 for you & your friend</span>
            </div>
          </div>
        </div>
        <h1 className=" font-bold text-xl">Open Details</h1>
      </div>
      <div className="flex my-4 justify-center items-center gap-2 w-full">
        <button className="w-full bg-white rounded-full flex text-black font-extrabold justify-center items-center  h-12">
          Invite Friend
        </button>
        <button className="bg-white rounded-full flex justify-center items-center w-14 h-12">
          <FaRegCopy className="text-black text-xl font-bold" />
        </button>
      </div>
      <div className="w-full h-full  overflow-auto   my-2">
        <div className=" w-full grid gap-3">
          {networks.map((index) => (
           <div className="flex w-full justify-start gap-3 items-center">
           <img className=" h-12 rounded-full" src="hashcoin.jpeg" />
           <div>
             <span className=" font-semibold">Invite Friend</span>
             <div className="flex justify-center items-center gap-2">
               <img className=" h-6 rounded-full" src="hashcoin.jpeg" />
               <span>5,000 for you & your friend</span>
             </div>
           </div>
         </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Friends;

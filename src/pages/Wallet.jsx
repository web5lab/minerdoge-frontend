import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../selector/globalSelector";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Wallet() {
    const navigation = useNavigate();
    const user = useSelector(userSelector);
  return (
    <div className="w-full h-full max-h-minus-60 flex flex-col items-center justify-start px-4  ">
      <h1 className="font-bold text-2xl mt-8 mb-4">Your Crypto Wallet</h1>
      <div className="w-full mt-6 text-center rounded-md border border-yellow-500 shadow-lg">
        <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center justify-center text-center">
          <p className="text-sm ">Referral Prize Pool</p>
          <p className="text-xl font-extrabold ">1,00,000 Matic (Polygon)</p>
          <button className="bg-black w-full mt-6  py-2 px-6 rounded-md " onClick={() => {
            navigation("/friends")
          }}>
            Refer Now
          </button>
        </div>
      </div>

      <div className="w-full mt-8">
        <h2 className="font-bold text-xl mb-4">Your Balance</h2>
        <div className="bg-gray-700 p-6 rounded-lg flex flex-col space-y-6 border border-yellow-500 shadow-lg">
        <div className="flex justify-between items-center">
            <div className="flex  items-center">
              <img
                className="w-10 h-10 mr-3 rounded-full"
                src="networks/polygon.png"
                alt="minerdoge"
              />
              <div>
                <p className="text-lg ">Matic</p>

                <p className="text-base">{user?.polgonBalance} MATIC</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-black opacity-80  py-1 px-6 ml-4 rounded-md  "onClick={() => {
                toast.error("Withdrawl not started")
              }}>
                Withdraw
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex  items-center">
              <img
                className="w-10 h-10 mr-3 rounded-full"
                src="hashcoin.jpeg"
                alt="minerdoge"
              />
              <div>
                <p className="text-lg ">MinerDoge</p>

                <p className="text-base">0.00 MDOGE</p>
              </div>
            </div>
            <div className="flex items-center">
            <button className="bg-black opacity-80  py-1 px-6 ml-4 rounded-md  " onClick={() => {
                toast.error("Withdrawl not started")
              }}>
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="w-full flex rounded-md border font-bold justify-center mt-auto mb-4 items-center p-2 bg-gray-800 opacity-80" onClick={() => {
                toast.error("Withdrawl not started")
              }}>
        Connect Wallet (Soon)
      </button>
    </div>
  );
}

export default Wallet;

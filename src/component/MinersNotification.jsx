import React from "react";
import { IoCloseCircle } from "react-icons/io5";

function MinersNotification({amount}) {
  
  return (
    <div className="w-full h-full max-h-minus-60 flex  flex-col items-center justify-center">
      <div className="w-full flex justify-end ">
        <button>
          <IoCloseCircle className="bg-white rounded-full text-black text-2xl" />
        </button>
      </div>
      <div className="w-full h-full  overflow-auto   my-2">
        <div className=" w-full grid gap-2">
          <h1 className=" text-center text-2xl font-bold">Your Miners</h1>
          <h1 className=" text-center text-lg ">have been working for you</h1>
          <div className="flex justify-center mt-2 gap-2  items-center">
            <img
              src="tcoin.png"
              className="w-12 my-2 h-12 bg-white  rounded-full "
              alt="Diamond"
            />
            <div className=" cs-text font-bold">{Number(amount).toLocaleString}</div>
          </div>
          <h4 className=" text-center my-2">collect your earnings !</h4>
          <button className=" rounded-full font-semibold bg-white text-black p-4">
            Collect
          </button>
        </div>
      </div>
    </div>
  );
}

export default MinersNotification;

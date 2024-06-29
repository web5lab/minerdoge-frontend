import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { networkSelector, tgDataSelector } from "../selector/globalSelector";
import { changeNetworkApi } from "../App/features/gameAction";
import { useNavigate } from "react-router-dom";

function ChooseNetwork() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const networkData = useSelector(networkSelector);
  const tg = useSelector(tgDataSelector);
  const networkChanger = (id) => {
    const obj = {
      tgData: tg,
      network: id,
    };
    dispatch(changeNetworkApi(obj));
    navigation("/");
  };
  return (
    <div className="w-full h-full max-h-minus-60 flex px-4 flex-col items-center justify-center">
      <h1 className=" font-bold text-3xl mt-6">Change Network</h1>
      <div className="w-full h-full  overflow-auto   my-2">
        <div className=" w-full grid gap-2">
          {networkData?.map((data, index) => (
            <button
              key={index}
              className="w-full gap-2 h-14 bg-gray-700 text-white px-4 rounded-lg flex justify-between items-center"
              onClick={() => networkChanger(data.id)}
            >
              <img
                src={data?.logo}
                className="w-8 h-8   rounded-full  bg-gray-800 "
                alt="Diamond"
              />
              <span className="mr-auto">{data?.tittle}</span>
              <FaAnglesRight />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseNetwork;

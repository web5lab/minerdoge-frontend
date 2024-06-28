import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { networkSelector } from "../selector/globalSelector";
import { changeNetworkApi } from "../App/features/gameAction";
import { useNavigate } from "react-router-dom";

function ChooseNetwork() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const networkData = useSelector(networkSelector);
  const networkChanger = (id) => {
    const obj = {
      tgData:
        "user=%7B%22id%22%3A5281683183%2C%22first_name%22%3A%22OtGalaxy%20Dev%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22OtGalaxy_Dev%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-4195278687679847124&chat_type=supergroup&auth_date=1719115920&hash=788f8150e3f54b36d6218c32723011811d8213efb63b5ce375a77ce1ebde17a7",
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

import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getNetwork, rankLeaderBoardApi } from "../App/features/gameAction";
import { leaderBoardSelector, RankSelector } from "../selector/globalSelector";
import { formatNumber } from "../utils";
function RanksPage() {
    const [currentRank, setcurrentRank] = useState(0)
  const rank = useSelector(RankSelector);
  const data = useSelector(leaderBoardSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rankLeaderBoardApi({id:currentRank+1}));
  }, []);

  const nextRank = () => {
    if(currentRank!= rank?.length-1){
      dispatch(rankLeaderBoardApi({id:currentRank+2}));
        setcurrentRank(currentRank+1)
       
    }
  }

  const prevRank = () => {
    if(currentRank!= 0){
      dispatch(rankLeaderBoardApi({id:currentRank}));
        setcurrentRank(currentRank-1)
        
    }
  }

  return (
    <div className="w-full h-full max-h-minus-60 flex px-4 flex-col items-center justify-start">
      <div className="w-full my-4 flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <div className="h-full w-12 flex justify-center items-center" onClick={prevRank}>
            <FaChevronLeft />
          </div>
          <div className="h-full justify-center items-center">
            <img src={rank[currentRank]?.imageUrl} className="w-[52vw]" />
          </div>
          <div className="h-full w-12 flex items-center justify-center" onClick={nextRank}>
            <FaChevronRight />
          </div>
        </div>
        <h1 className=" font-extrabold my-3 text-3xl">{rank[currentRank]?.tittle}</h1>
        <div className="w-full flex gap-2  justify-center items-center">
          <span className=" text-yellow-400 font-bold">from {formatNumber(rank[currentRank]?.requiredAmount)}+</span>{" "}
          <img className=" h-4 rounded-full" src="hashcoin.jpeg" />
        </div>
      </div>
      <div className="w-full h-full  overflow-auto   my-2">
        <div className=" w-full grid gap-2">
          {data?.map((l, index) => (
            <button
              key={index}
              className="w-full gap-2  bg-gray-700 text-white px-4 py-1 rounded-lg flex justify-between items-center"
            >
              <img
                src="userlogo.png"
                className="w-10   rounded-md  bg-black "
                alt="Diamond"
              />
              <div className="mr-auto flex flex-col">
                <span className="mr-auto">{l?.userName}</span>
                <div className="flex gap-1 justify-center items-center">
                  <img className=" h-4 w-4 rounded-full" src="hashcoin.jpeg" />
                  <span>{Number(l?.totalEarning).toLocaleString()}</span>
                </div>
              </div>

              <span> {index}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RanksPage;

import React, { useEffect } from "react";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { changeCoin } from "./App/features/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import { miningRateSelector } from "./selector/globalSelector";

function MainApp() {
  const dispatch = useDispatch();
  const mining_Rate = useSelector(miningRateSelector);

  useEffect(() => {
    let intervalId;

    if (mining_Rate !== 0) {
      startMining(mining_Rate);
    }

    function startMining(miningRate) {
      let interval = 1000;
      let pointsPerInterval = 1;

      if (miningRate > 3600) {
        pointsPerInterval = miningRate / 3600;
      } else if (miningRate < 3600) {
        interval = Math.floor((3600 / miningRate) * 1000);
      }

      intervalId = setInterval(() => {
        dispatch(changeCoin(pointsPerInterval));
      }, interval);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [mining_Rate]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default MainApp;

import "./styles.css";
import "./tailwind.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "./selector/globalSelector";
import {
  getNetwork,
  getRanks,
  getSecretCode,
  loginApi,
} from "./App/features/gameAction";
import MainApp from "./mainApp";
import { setTgdata } from "./App/features/gameSlice";

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  useEffect(() => {
    if (window?.Telegram?.WebView?.initParams?.tgWebAppData) {
      const tgData = window?.Telegram?.WebView?.initParams?.tgWebAppData;

      const obj = {
        tgData: tgData,
        reffralId: window?.Telegram?.WebApp?.initDataUnsafe?.start_param,
      };
      if (!user) {
        dispatch(setTgdata(tgData));
        dispatch(loginApi(obj));
        dispatch(getRanks());
        dispatch(getNetwork());
        dispatch(getSecretCode());
      }
    }
  }, []);

  if (!user) {
    return (
      <div
        className={`w-full h-screen flex justify-center flex-col items-center `}
        style={{ backgroundColor: `#1f2937` }}
      >
        <div className={` text-white p-8 rounded-lg mt-auto`}>
          <div className="animate-bounce rounded-full h-32 w-32 border-2 border-[#dc7000]">
            <img src="logo.png" className="rounded-full" alt="logo" />
          </div>
          <div className="text-white animate-pulse mt-4 text-2xl font-semibold">
            <span>Loading...</span>
          </div>
        </div>
        <div className="  w-full  flex justify-center items-center gap-2 mt-auto mb-8">
          <a href="https://x.com/HelloMinerdoge">
            <img
              src="task/x.png"
              className="w-10 h-10  rounded-full  bg-black "
              alt="Diamond"
            />
          </a>
          <a href="https://t.me/minerdoge_official">
            <img
              src="task/tg.jpeg"
              className="w-10 h-10  rounded-full  bg-black "
              alt="Diamond"
            />
          </a>
          <a href="https://www.youtube.com/@minerdoge_fun">
            <img
              src="task/yt.jpeg"
              className="w-10 h-10  rounded-full  bg-black "
              alt="Diamond"
            />
          </a>
          <a href="">
            <img
              src="hashcoin.jpeg"
              className="w-10 h-10  rounded-full  bg-black "
              alt="Diamond"
            />
          </a>
        </div>
      </div>
    );
  }

  return <MainApp />;
}

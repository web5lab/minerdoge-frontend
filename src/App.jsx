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
  // useEffect(() => {
  //   let token = window?.Telegram?.WebApp?.initDataUnsafe?.start_param;
  //   console.log("tg",window?.Telegram);
  //   let tgData =
  //     "user=%7B%22id%22%3A5281683183%2C%22first_name%22%3A%22OtGalaxy%20Dev%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22OtGalaxy_Dev%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-4195278687679847124&chat_type=supergroup&auth_date=1719115920&hash=788f8150e3f54b36d6218c32723011811d8213efb63b5ce375a77ce1ebde17a7";
  //   if (window?.Telegram?.WebView?.initParams?.tgWebAppData) {
  //     tgData = window?.Telegram?.WebView?.initParams?.tgWebAppData;
  //   }

  //   const obj = {
  //     tgData: tgData,
  //     reffralId: token,
  //   };
  //   if (!user) {
  //     dispatch(setTgdata(tgData));
  //     dispatch(loginApi(obj));
  //     dispatch(getRanks());
  //     dispatch(getNetwork());
  //     dispatch(getSecretCode());
  //   }
  // }, []);

  useEffect(() => {
    let token = window?.Telegram?.WebApp?.initDataUnsafe?.start_param;
    console.log("tg", window?.Telegram);
    let tgData;
    if (window?.Telegram?.WebView?.initParams?.tgWebAppData) {
      tgData = window?.Telegram?.WebView?.initParams?.tgWebAppData;

      const obj = {
        tgData: tgData,
        reffralId: token,
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

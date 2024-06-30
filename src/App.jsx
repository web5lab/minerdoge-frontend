import "./styles.css";
import "./tailwind.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "./selector/globalSelector";
import { getNetwork, getRanks, loginApi } from "./App/features/gameAction";
import MainApp from "./mainApp";
import { setTgdata } from "./App/features/gameSlice";

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  useEffect(() => {
    let token = window?.Telegram?.WebApp?.initDataUnsafe?.start_param;
    let tgData =
      "user=%7B%22id%22%3A5281683183%2C%22first_name%22%3A%22OtGalaxy%20Dev%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22OtGalaxy_Dev%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-4195278687679847124&chat_type=supergroup&auth_date=1719115920&hash=788f8150e3f54b36d6218c32723011811d8213efb63b5ce375a77ce1ebde17a7";
    if (window?.Telegram?.WebView?.initParams?.tgWebAppData) {
      tgData = window?.Telegram?.WebView?.initParams?.tgWebAppData;
    }
    dispatch(setTgdata(tgData));
    console.log(
      "data from telegram",
      window?.Telegram?.WebView?.initParams?.tgWebAppData
    );
    console.log("data from telegram 2", window?.Telegram);
    const obj = {
      tgData: tgData,
      reffralId: token,
    };
    dispatch(loginApi(obj));
    dispatch(getRanks());
    dispatch(getNetwork());
  }, []);

  return (
    <>
      {user ? (
        <MainApp />
      ) : (
        <div
          className={`w-full h-screen flex justify-center items-center `}
          style={{ backgroundColor: `#1f2937` }}
        >
          <div className={`bg-[#1f2937] text-white p-8 rounded-lg`}>
            <div className="animate-bounce rounded-full h-32 w-32 border-2 border-[#dc7000]">
              <img src="logo.png" className="rounded-full" alt="logo" />
            </div>
            <div className="text-white animate-pulse mt-4 text-2xl font-semibold">
              <span>Loading...</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

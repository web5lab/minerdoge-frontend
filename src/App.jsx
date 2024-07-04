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
    if (window?.Telegram?.WebView?.initParams?.tgWebAppData) {
      let token = window?.Telegram?.WebApp?.initDataUnsafe?.start_param;
      let tgData = window?.Telegram?.WebView?.initParams?.tgWebAppData;
      dispatch(setTgdata(tgData));
      const obj = {
        tgData: tgData,
        reffralId: token,
      };
      dispatch(loginApi(obj));
      dispatch(getRanks());
      dispatch(getNetwork());
    }
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

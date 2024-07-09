import { createBrowserRouter } from "react-router-dom";
import LayOut from "./Layout";
import Main from "./pages/main";
import Friends from "./pages/friends";
import ChooseNetwork from "./pages/chooseNetwork";
import Task from "./pages/task";
import Boost from "./pages/boost";
import Mine from "./pages/mine";
import RanksPage from "./pages/ranksPage";
import RefralRewards from "./pages/refralRewards";
import Wallet from "./pages/Wallet";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      {
        path: "choosenetwork",
        element: <ChooseNetwork />,
      },
      {
        path: "earn",
        element: <Task />,
      },
      {
        path: "boost",
        element: <Boost />,
      },
      {
        path: "Mine",
        element: <Mine />,
      },
      {
        path: "leaderboard",
        element: <RanksPage />,
      },
      {
        path: "refralrewards",
        element: <RefralRewards />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      }
    ],
  },
]);

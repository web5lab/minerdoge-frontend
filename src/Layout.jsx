import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./component/BottomNav";
import BottomSheet from "./component/BottomSheet";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col w-[100vw] h-[100vh] overflow-hidden bg-[#000000] text-white">
        {/* <div className="w-full"> */}
        <Outlet />
        {/* </div> */}
        <BottomNav />
        <BottomSheet />
      </div>
    </>
  );
};

export default Layout;

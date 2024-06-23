import { configureStore } from "@reduxjs/toolkit";
import iframeReducer from "./features/IframeSlice";

const store = configureStore({
  reducer: {
    iframe: iframeReducer,
  },
});

export default store;

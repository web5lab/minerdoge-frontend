import { configureStore } from "@reduxjs/toolkit";
import iframeReducer from "./features/IframeSlice";
import gameReducer from "./features/gameSlice"


const store = configureStore({
  reducer: {
    iframe: iframeReducer,
    game: gameReducer,
  },
});

export default store;

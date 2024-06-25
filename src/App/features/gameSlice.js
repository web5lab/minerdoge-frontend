import { createSlice } from "@reduxjs/toolkit";
import {
  getBoosters,
  getDailyReward,
  getFriends,
  getMiningCards,
  getNetwork,
  getRanks,
  getTask,
  loginApi,
} from "./gameAction";

const initialState = {
  networks: [],
  miningCards: [],
  task: [],
  rank: [],
  booster:[],
  dailyRewards: [],
  notification: [],
  miningRate:0,
  friends:[],
  coins: 0,
  user: null,
};

const gameController = createSlice({
  name: "gameController",
  initialState,
  reducers: {
    changeCoin: (state, action) => {
      state.coins = state.coins + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNetwork.pending, (state) => {})
      .addCase(getNetwork.rejected, (state, action) => {})
      .addCase(getNetwork.fulfilled, (state, action) => {
        state.networks = action.payload?.networks;
      });
    builder
      .addCase(getMiningCards.pending, (state) => {})
      .addCase(getMiningCards.rejected, (state, action) => {})
      .addCase(getMiningCards.fulfilled, (state, action) => {
        state.miningCards = action.payload?.data;
      });
    builder
      .addCase(getTask.pending, (state) => {})
      .addCase(getTask.rejected, (state, action) => {})
      .addCase(getTask.fulfilled, (state, action) => {
        state.task = action.payload?.data;
      });
    builder
      .addCase(getRanks.pending, (state) => {})
      .addCase(getRanks.rejected, (state, action) => {})
      .addCase(getRanks.fulfilled, (state, action) => {
        state.rank = action.payload?.data;
      });
    builder
      .addCase(getDailyReward.pending, (state) => {})
      .addCase(getDailyReward.rejected, (state, action) => {})
      .addCase(getDailyReward.fulfilled, (state, action) => {
        state.dailyRewards = action.payload?.data;
      });
    builder
      .addCase(getFriends.pending, (state) => {})
      .addCase(getFriends.rejected, (state, action) => {})
      .addCase(getFriends.fulfilled, (state, action) => {
        state.friends = action.payload?.data;
      });
    builder
      .addCase(getBoosters.pending, (state) => {})
      .addCase(getBoosters.rejected, (state, action) => {})
      .addCase(getBoosters.fulfilled, (state, action) => {
        state.booster = action.payload?.data;
      });
    builder
      .addCase(loginApi.pending, (state) => {})
      .addCase(loginApi.rejected, (state, action) => {})
      .addCase(loginApi.fulfilled, (state, action) => {
        state.user = action.payload?.data;
        state.miningRate = action.payload?.data?.MiningRatePerHour
        state.coins = action.payload?.data?.Balance;
        state.notification = action.payload?.notification;
      });
  },
});

export const { changeCoin } = gameController.actions;
export default gameController.reducer;

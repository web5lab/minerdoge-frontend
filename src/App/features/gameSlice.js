import { createSlice } from "@reduxjs/toolkit";
import {
  changeNetworkApi,
  completeTaskApi,
  getBoosters,
  getDailyReward,
  getFriends,
  getMiningCards,
  getNetwork,
  getRanks,
  getTask,
  loginApi,
  rankLeaderBoardApi,
} from "./gameAction";

const initialState = {
  networks: [],
  miningCards: [],
  task: [],
  rank: [],
  booster: [],
  dailyRewards: [],
  notification: [],
  leaderBoard:[],
  miningRate: 0,
  friends: [],
  coins: 0,
  rechargePoint:0,
  bottomSheet: null,
  bottomSheetEnabled: false,
  dailyRewardData:null,
  minerNotification:null,
  user: null,
};

const gameController = createSlice({
  name: "gameController",
  initialState,
  reducers: {
    changeCoin: (state, action) => {
      state.coins = state.coins + action.payload;
    },
    changeRecharge: (state, action) => {
      state.rechargePoint = state.rechargePoint + action.payload;
    },
    openBottomSheet: (state, action) => {
      state.bottomSheet = action.payload;
      state.bottomSheetEnabled = true;
    },
    closeBottomSheet: (state, action) => {
      state.bottomSheetEnabled = false;
      state.bottomSheet = null;
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
      .addCase(rankLeaderBoardApi.pending, (state) => {
        state.leaderBoard = [];
      })
      .addCase(rankLeaderBoardApi.rejected, (state, action) => {
        state.leaderBoard = [];
      })
      .addCase(rankLeaderBoardApi.fulfilled, (state, action) => {
        state.leaderBoard = action.payload?.data;
      });
    builder
      .addCase(changeNetworkApi.pending, (state) => {})
      .addCase(changeNetworkApi.rejected, (state, action) => {})
      .addCase(changeNetworkApi.fulfilled, (state, action) => {
        state.user.currentNetwork = action.payload?.data;
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
      .addCase(completeTaskApi.pending, (state) => {})
      .addCase(completeTaskApi.rejected, (state, action) => {})
      .addCase(completeTaskApi.fulfilled, (state, action) => {
        state.coins += action.payload?.coinToAdd;
        state.user.completedTask.push(action.payload?.taskId);
      });
    builder
      .addCase(loginApi.pending, (state) => {})
      .addCase(loginApi.rejected, (state, action) => {})
      .addCase(loginApi.fulfilled, (state, action) => {
        state.user = action.payload?.data;
        state.miningRate = action.payload?.data?.MiningRatePerHour;
        state.coins = action.payload?.data?.Balance;
        state.dailyRewardData = action.payload?.dailyReward;
        state.notification = action.payload?.notification;
        state.minerNotification = action.payload?.minerNotification;
        state.rechargePoint = action.payload?.data?.rechargeLimit;
      });
  },
});

export const { changeCoin , openBottomSheet , closeBottomSheet , changeRecharge} = gameController.actions;
export default gameController.reducer;

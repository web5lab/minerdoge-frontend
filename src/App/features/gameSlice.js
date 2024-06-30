import { createSlice } from "@reduxjs/toolkit";
import {
  buyBoosterApi,
  buyMinerApi,
  changeNetworkApi,
  completeTaskApi,
  DailyLoginApi,
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
  leaderBoard: [],
  miningRate: 0,
  friends: [],
  coins: 0,
  rechargePoint: 0,
  bottomSheet: null,
  bottomSheetEnabled: false,
  dailyRewardData: null,
  minerNotification: null,
  tgData: null,
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
    closeMiningNotification: (state) => {
      state.minerNotification = null;
    },
    openBottomSheet: (state, action) => {
      state.bottomSheet = action.payload;
      state.bottomSheetEnabled = true;
    },
    closeBottomSheet: (state, action) => {
      state.bottomSheetEnabled = false;
      state.bottomSheet = null;
    },
    setTgdata: (state, action) => {
      state.tgData = action.payload;
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
      .addCase(buyMinerApi.pending, (state) => {})
      .addCase(buyMinerApi.rejected, (state, action) => {

        state.bottomSheetEnabled = false;
        state.bottomSheet = null;
      })
      .addCase(buyMinerApi.fulfilled, (state, action) => {
        state.miningRate += action.payload?.hashAdded;
        state.user.MiningRatePerHour += action.payload?.hashAdded;
        state.user.Balance -= action.payload?.balanceToDeduct;
        state.coins -= action.payload?.balanceToDeduct;
        state.user.miningCards = action.payload?.userMiningCard;
        state.bottomSheetEnabled = false;
        state.bottomSheet = null;
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
      .addCase(DailyLoginApi.pending, (state) => {})
      .addCase(DailyLoginApi.rejected, (state) => {})
      .addCase(DailyLoginApi.fulfilled, (state ,action) => {
        state.user.Balance += action.payload?.balanceToAdd;
        state.coins += action.payload?.balanceToAdd;
        state.dailyRewardData.rewardStreak = 0;
        state.dailyRewardData.compltedDay += 1;
        state.dailyRewardData.claimed = true;
        state.bottomSheetEnabled = false;
        state.bottomSheet = null;
      });
    builder
      .addCase(buyBoosterApi.pending, (state) => {})
      .addCase(buyBoosterApi.rejected, (state, action) => {

        state.bottomSheetEnabled = false;
        state.bottomSheet = null;
      })
      .addCase(buyBoosterApi.fulfilled, (state, action) => {
        const type = action.payload?.type;
        const buff = action.payload?.buffIncrement;
        state.user.boosterCrads = action.payload?.userCard;
        state.user.Balance -= action.payload?.balanceToDeduct;
        state.coins -= action.payload?.balanceToDeduct;
        if (type === "Clicks") {
          state.user.earnPerclicks += buff;
        }
        if (type === "RechargeLimit") {
          state.user.rechargeLimit += buff;
        }
        if (type === "RechargeRate") {
          state.user.rechargeRate += buff;
        }
        state.bottomSheetEnabled = false;
        state.bottomSheet = null;
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

export const {
  changeCoin,
  openBottomSheet,
  setTgdata,
  closeBottomSheet,
  changeRecharge,
  closeMiningNotification
} = gameController.actions;
export default gameController.reducer;

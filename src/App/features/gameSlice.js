import { createSlice } from "@reduxjs/toolkit";
import { getMiningCards, getNetwork, getTask } from "./gameAction";

const initialState = {
  networks: [],
  miningCards: [],
  task: [],
  rank: [],
  user: null,
};

const gameController = createSlice({
  name: "gameController",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNetwork.pending, (state) => {
        state.networks = null;
      })
      .addCase(getNetwork.rejected, (state, action) => {
        state.networks = null;
      })
      .addCase(getNetwork.fulfilled, (state, action) => {
        state.networks = action.payload?.networks;
      });
    builder
      .addCase(getMiningCards.pending, (state) => {
        state.miningCards = [];
      })
      .addCase(getMiningCards.rejected, (state, action) => {
        state.miningCards = [];
      })
      .addCase(getMiningCards.fulfilled, (state, action) => {
        state.miningCards = action.payload?.data;
      });
    builder
      .addCase(getTask.pending, (state) => {
        state.task = [];
      })
      .addCase(getTask.rejected, (state, action) => {
        state.task = [];
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.task = action.payload?.data;
      });
  },
});

export const {} = gameController.actions;
export default gameController.reducer;

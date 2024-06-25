import { createSelector } from "@reduxjs/toolkit";

const globalSelector = (state) => state.iframe;
const gameSelector = (state) => state.game

export const tokenSelector = createSelector(
  [globalSelector],
  (iframe) => iframe.tokenData
);

export const networkSelector = createSelector(
  [gameSelector],
  (game) => game.networks
)

export const miningCardSelector = createSelector(
  [gameSelector],
  (game) => game.miningCards
)

export const taskSelector = createSelector(
  [gameSelector],
  (game) => game.task
)

export const RankSelector = createSelector(
  [gameSelector],
  (game) => game.rank
)

export const userSelector = createSelector(
  [gameSelector],
  (game) => game?.user
)

export const dailyRewardSelector = createSelector(
  [gameSelector],
  (game) => game.dailyRewards
)

export const coinSelector = createSelector(
  [gameSelector],
  (game) => game.coins
)

export const miningRateSelector = createSelector(
  [gameSelector],
  (game) => game.miningRate
)

export const friendsSelector = createSelector(
  [gameSelector],
  (game) => game.friends
)

export const boosterSelector = createSelector(
  [gameSelector],
  (game) => game.booster
)
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
import { createSelector } from "@reduxjs/toolkit";

const globalSelector = (state) => state.iframe;

export const tokenSelector = createSelector(
  [globalSelector],
  (iframe) => iframe.tokenData
);

export const loadingScreenSelector = createSelector(
  [globalSelector],
  (iframe) => iframe.tokenData
);

export const whitelistModalSelector = createSelector(
  [globalSelector],
  (iframe) => iframe.tokenData
);

export const tokenPriceSelector = createSelector(
  [globalSelector],
  (iframe) => iframe.liveTokenPrice
);

export const nativePriceSelector = createSelector(
  [globalSelector],
  (iframe) => iframe.liveBnbPrice
);

export const LoadingScreenSelector = createSelector(
  [globalSelector],
  (iframe) => iframe.loadingScreen
);

export const ordersSelector = createSelector(
  [globalSelector],
  (iframe) => iframe.orders
);

export const GlobalThemeSelector = createSelector(
  [globalSelector],
  (iframe) => iframe.defaultTheme
);

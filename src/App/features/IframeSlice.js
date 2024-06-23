import { createSlice } from "@reduxjs/toolkit";
import {
  GetAllOrder,
  GetTokenInfo,
  GetUserOrder,
  getPriceBnb,
  getTokenCurrentPrice,
} from "./IframeAction";

const initialState = {
  loadingScreen: true,
  whitelistModal: true,
  tokenData: null,
  orders: [],
  liveTokenPrice: null,
  liveBnbPrice: null,
  formData: null,
  myorder: [],
  allOrder: [],
  defaultTheme:"1f2937"
};

const iframeController = createSlice({
  name: "iframeController",
  initialState,
  reducers: {
    closeLoadingScreen: (state) => {
      state.loadingScreen = false;
    },
    openLoadingScreen: (state) => {
      state.loadingScreen = true;
    },
    changeTheme: (state, action) => {
      state.defaultTheme = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPriceBnb.pending, (state) => {
        state.liveBnbPrice = null;
      })
      .addCase(getPriceBnb.rejected, (state, action) => {
        state.liveBnbPrice = null;
      })
      .addCase(getPriceBnb.fulfilled, (state, action) => {
        state.liveBnbPrice =
          action.payload.coins[
            "bsc:0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
          ].price;
      });
    builder
      .addCase(GetTokenInfo.pending, (state) => {
        state.tokenData = null;
      })
      .addCase(GetTokenInfo.rejected, (state, action) => {
        state.tokenData = null;
      })
      .addCase(GetTokenInfo.fulfilled, (state, action) => {
        state.tokenData = action.payload.data;
      });
    builder
      .addCase(getTokenCurrentPrice.pending, (state) => {
        state.liveTokenPrice = null;
      })
      .addCase(getTokenCurrentPrice.rejected, (state, action) => {
        state.liveTokenPrice = null;
      })
      .addCase(getTokenCurrentPrice.fulfilled, (state, action) => {
        state.liveTokenPrice = action.payload.pairs[0];
      });
    builder
      .addCase(GetAllOrder.pending, (state) => {
        state.orders = [];
        state.allOrder = [];
      })
      .addCase(GetAllOrder.rejected, (state, action) => {
        state.orders = [];
        state.allOrder = [];
      })
      .addCase(GetAllOrder.fulfilled, (state, action) => {
        state.orders = action.payload.order;
        state.allOrder = action.payload.order;
      });
    builder
      .addCase(GetUserOrder.pending, (state) => {
        state.orders = [];
        state.allOrder = [];
      })
      .addCase(GetUserOrder.rejected, (state, action) => {
        state.orders = [];
        state.allOrder = [];
      })
      .addCase(GetUserOrder.fulfilled, (state, action) => {
        state.orders = action.payload.order;
        state.allOrder = action.payload.order;
      });
  },
});

export const { closeLoadingScreen, openLoadingScreen, changeTheme } =
  iframeController.actions;
export default iframeController.reducer;

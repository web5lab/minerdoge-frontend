import { createSlice } from "@reduxjs/toolkit";
import { getNetwork } from "./gameAction";

const initialState = {
  networks: null,
};

const gameController = createSlice({
  name: "gameController",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(getNetwork.pending, (state) => {
      state.networks = null;
    })
    .addCase(getNetwork.rejected, (state, action) => {
      state.networks= null;
    })
    .addCase(getNetwork.fulfilled, (state, action) => {
      state.networks = action.payload?.networks
    });
  },
});

export const {  } =
gameController.actions;
export default gameController.reducer;

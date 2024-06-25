import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axiosInstance";
import axios from "axios";

export const getNetwork = createAsyncThunk("game/getNetwork", async () => {
  try {
    const Response = await axiosInstance.get(`/bot/networks`);
    // console.log("api data", Response);
    return Response.data;
  } catch (err) {
    if (err) {
      throw err;
    }
  }
});

export const getMiningCards = createAsyncThunk(
  "game/getMiningCards",
  async () => {
    try {
      const Response = await axiosInstance.get(`/bot/miningcards`);
      // console.log("api data", Response);
      return Response.data;
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }
);

export const getTask = createAsyncThunk("game/getTask", async () => {
  try {
    const Response = await axiosInstance.get(`/bot/task`);
    // console.log("api data", Response);
    return Response.data;
  } catch (err) {
    if (err) {
      throw err;
    }
  }
});

export const getRanks = createAsyncThunk("game/getRanks", async () => {
  try {
    const Response = await axiosInstance.get(`/bot/rank`);
    // console.log("api data", Response);
    return Response.data;
  } catch (err) {
    if (err) {
      throw err;
    }
  }
});

export const getBoosters = createAsyncThunk("game/getBoosters", async () => {
  try {
    const Response = await axiosInstance.get(`/bot/booster`);
    // console.log("api data", Response);
    return Response.data;
  } catch (err) {
    if (err) {
      throw err;
    }
  }
});

export const getDailyReward = createAsyncThunk(
  "game/getDailyReward",
  async () => {
    try {
      const Response = await axiosInstance.get(`/bot/dailyReward`);
      // console.log("api data", Response);
      return Response.data;
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }
);

export const loginApi = createAsyncThunk("game/login", async (obj) => {
  try {
    const Response = await axiosInstance.post("/bot/login", obj);
    return Response.data;
  } catch (err) {
    if (err) {
      throw err;
    }
  }
});

export const addClicks = createAsyncThunk("game/addClicks", async (obj) => {
  try {
    const Response = await axiosInstance.post("/bot/clicks", obj);
    return Response.data;
  } catch (err) {
    if (err) {
      throw err;
    }
  }
});

export const getFriends = createAsyncThunk("game/getFriends", async (obj) => {
  try {
    const Response = await axiosInstance.post("/bot/reffrals", obj);
    return Response.data;
  } catch (err) {
    if (err) {
      throw err;
    }
  }
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axiosInstance";
import axios from "axios";

export const GetTokenInfo = createAsyncThunk(
  "iframe/GetTokenInfo",
  async (address) => {
    try {
      const Response = await axiosInstance.get(`/token/info/${address}`);
      // console.log("api data", Response);
      return Response.data;
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }
);

export const GetUserOrder = createAsyncThunk(
  "iframe/GetUserOrder",
  async (address) => {
    try {
      const Response = await axiosInstance.get(`/order/user/${address}`);
      // console.log("api data", Response);
      return Response.data;
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }
);

export const getPriceBnb = createAsyncThunk("iframe/GetPriceBnb", async () => {
  try {
    const response = await axios.get(
      "https://coins.llama.fi/prices/current/bsc:0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
    );

    return response.data;
  } catch (err) {
    if (err) {
      throw err;
    }
  }
});

export const getTokenCurrentPrice = createAsyncThunk(
  "iframe/GetTokenCurrentPrice",
  async (address) => {
    try {
      const response = await axios.get(
        `https://api.dexscreener.com/latest/dex/tokens/${address}`
      );

      return response.data;
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }
);

export const GetAllOrder = createAsyncThunk(
  "iframe/GetAllOrder",
  async (address) => {
    try {
      const Response = await axiosInstance.get(
        `/order/all?limit=30&open=true&token=${address}`
      );

      return Response.data;
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }
);

export const GetMyOrder = createAsyncThunk(
  "iframe/GetMyOrder",
  async (address) => {
    try {
      const Response = await axiosInstance.get(
        `/order/user/${address}?limit=40`
      );
      return Response.data;
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }
);

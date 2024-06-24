import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axiosInstance";
import axios from "axios";

export const getNetwork = createAsyncThunk(
    "game/getNetwork",
    async () => {
      try {
        const Response = await axiosInstance.get(`/bot/networks`);
        // console.log("api data", Response);
        return Response.data;
      } catch (err) {
        if (err) {
          throw err;
        }
      }
    }
  );

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

export const getTask = createAsyncThunk(
    "game/getTask",
    async () => {
      try {
        const Response = await axiosInstance.get(`/bot/task`);
        // console.log("api data", Response);
        return Response.data;
      } catch (err) {
        if (err) {
          throw err;
        }
      }
    }
  );
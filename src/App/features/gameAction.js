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
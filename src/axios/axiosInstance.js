import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3138/",
});

axiosInstance.interceptors.response.use(
  function (config) {
    successMessage(config);
    return config;
  },
  (err) => errorFunction(err)
);

const successMessage = function (config) {
  const data = config?.data;
  const msg = data?.message;
  if (msg && data?.success) {
    // console.log(msg);
  }
};

const errorFunction = function (error) {
  const message = error?.response?.data?.message;
  if (message) {
    toast.error(message);
  }
  throw error;
};

export default axiosInstance;

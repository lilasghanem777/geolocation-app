import axios from "axios";
import store from "../Store/store";
import { setMessage } from "../Store/Reducers/AuthSlice";

export const axiosClient = axios.create({});

axiosClient.interceptors.request.use((config) => {
  config.headers["accept"] = "application/json";
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response.data.message && response.data.message !== "") {
      store.dispatch(
        setMessage({
          open: true,
          type: "success",
          message: response.data.message,
        })
      );
    }
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status && response.status === 422) {
      store.dispatch(
        setMessage({
          open: true,
          type: "error",
          message: "check your validation",
        })
      );
      return response;
    } else if (response.status && response.status === 401) {
      store.dispatch(
        setMessage({
          open: true,
          type: "error",
          message: "check your authentication",
        })
      );
      return false;
    } else {
      store.dispatch(
        setMessage({
          open: true,
          type: "error",
          message: "Some thing wrong happend",
        })
      );
      return false;
    }
    throw response;
  }
);
export default axiosClient;

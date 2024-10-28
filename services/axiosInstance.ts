import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import { handleLogoutAPI, refreshTokenAPI } from "@/apis";

const authorizedAxiosInstance = axios.create({
  timeout: 1000 * 60 * 10,
});

// Request
authorizedAxiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = AsyncStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

let refreshTokenPromise: Promise<any> | null = null;

//Response
authorizedAxiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    //* Mọi mã http status code nằm trong khoảng (200 - 299) sẽ là success và rơi vào đây
    // Do something with response data
    return response;
  },
  (error) => {
    // 401
    if (error.response?.status === 401) {
      handleLogoutAPI().then(() => {
        alert("Lỗi đăng nhập");
        return;
      });
    }

    //410
    // Nếu như nhận mã 410 từ BE, thì sẽ gọi api refresh token để làm mới lại accessToken
    //Đầu tiên lấy được các request API đang bị lỗi thông qua error.config

    const originalRequest = error.config;

    if (error.response?.status === 410 && originalRequest) {
      if (!refreshTokenPromise) {
        // chưa có refresh
        const refreshToken = localStorage.getItem("refreshToken");

        refreshTokenPromise = refreshTokenAPI(refreshToken)
          .then((res) => {
            const { accessToken } = res.data;
            localStorage.setItem("accessToken", accessToken);
            authorizedAxiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;
          })
          .catch((_error) => {
            handleLogoutAPI().then(() => {
              location.href = "/login"; // chuyển qua trang đăng nhập
            });
            return Promise.reject(_error);
          })
          .finally(() => {
            refreshTokenPromise = null;
          });
      }

      return refreshTokenPromise.then(() =>
        authorizedAxiosInstance(originalRequest)
      );
    }

    Toast.show({
      type: "error",
      text1: "Error",
      text2: error.response?.data?.message || error.message,
    });

    return Promise.reject(error);
  }
);

export default authorizedAxiosInstance;

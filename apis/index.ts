import authorizedAxiosInstance from "@/services/axiosInstance";
import { API_ROOT } from "@/utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleLogoutAPI = async () => {
  /**Với trường hợp số 01: Dùng localstorage => Chỉ xóa thông tin user trong localstorage phía Front-end */
  //Note: nếu dùng cookies thì xóa 3 dòng này
  AsyncStorage.removeItem("userInfo");
  AsyncStorage.removeItem("accessToken");
  AsyncStorage.removeItem("refreshToken");

  /**Với trường hợp số 02: Dùng Http Only Cookies => Gọi API để xử lý remove Cookies */

  return await authorizedAxiosInstance.delete(`${API_ROOT}/v1/users/logout`);
};

export const refreshTokenAPI = async (refreshToken: any) => {
  return await authorizedAxiosInstance.put(
    `${API_ROOT}/v1/users//refresh_token`,
    { refreshToken }
  );
};

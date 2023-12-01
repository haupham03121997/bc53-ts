import { CurrentUser, LoginRequestBody } from "../types/user.type";
import { ResponseApi } from "../types/util.type";
import fetcherApi from "./fetcher";

export const signinAPI = async (payload: LoginRequestBody) => {
  try {
    // payload: { taiKhoan: "", matKhau:""}
    const response = await fetcherApi.post<ResponseApi<CurrentUser>>(
      "/QuanLyNguoiDung/DangNhap",
      payload
    );
    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi 🤧";
  }
};

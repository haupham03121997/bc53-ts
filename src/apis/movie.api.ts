import { Banner } from "../types/movie.type";
import { ResponseApi } from "../types/util.type";
import fetcherApi from "./fetcher";

export const getBannersAPI = async (): Promise<Banner[] | undefined> => {
  try {
    // thằng này sẽ gắn cái path trong () vào cái baseURL và tự hiểu method là get luôn cho mình
    const response = await fetcherApi.get<ResponseApi<Banner[]>>(
      "/QuanLyPhim/LayDanhSachBanner"
    );
    // console.log("response", response);
    return response.data.content; // là 1 mảng
  } catch (error) {}
};

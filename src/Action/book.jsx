import Axios from "axios";
import { createAction } from "./index";
export const actGetInfoFimlBook = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
    }).then(res => {
      console.log(res.data);
      dispatch(createAction("GET_INFO_BOOK",res.data));
    });
  };
};
export const actGetBookOder = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
    }).then(res => {
      console.log(res.data);
      dispatch(createAction("GET_BOOK_ODER",res.data));
    });
  };
};

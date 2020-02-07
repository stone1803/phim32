import Axios from "axios";
import { createAction } from "./index";
export const actProfile = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`
    }).then(res => {
      console.log(res.data);
      dispatch(createAction("GET_PROFILE"));
    });
  };
};

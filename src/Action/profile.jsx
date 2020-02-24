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
export const actLogin = (user, history) => {
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user
    })
      .then(result => {
        console.log(result.data);
        if (result.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("UserAdmin", JSON.stringify(result.data));
          alert("Login success");
          history.push("/dashboard");
        } else {
          alert("K có quyền truy cập");
        }
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

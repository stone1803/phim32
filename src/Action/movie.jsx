
import Axios from "axios";
import {createAction} from "./index"

export const actGetListMovieTopAPI = () => {
    return dispatch => {
      Axios({
        method: "GET",
        url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=8"
      })
        .then(res => {
          dispatch(createAction("SHOW_ONE_TEN", res.data.items));
        })
        .catch(err => {
          console.log(err);
        });
    };
  };
  export const actGetListMovieAPI = () => {
    return dispatch => {
      Axios({
        method: "GET",
        url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
      })
        .then(res => {
          dispatch(createAction("SHOW_ALL", res.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
  };
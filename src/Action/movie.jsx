import Axios from "axios";
import {createAction} from "./index"

export const actGetListMovieTopAPI = () => {
    return dispatch => {
      Axios({
        method: "GET",
        url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP10&soTrang=2&soPhanTuTrenTrang=8"
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
        url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10"
      })
        .then(res => {
          dispatch(createAction("SHOW_ALL", res.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
    
  };
  export const actGetDetailMovieAPI = (id) => {
    return dispatch => {
      Axios({
        method: "GET",
        url:`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
      })
        .then(res => {
          console.log(res.data);

          dispatch(createAction("SHOW_DETAIL", res.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
  };

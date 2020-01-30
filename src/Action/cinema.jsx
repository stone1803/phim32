import Axios from "axios";
import { createAction } from "./index";

export const actGetCinemaInfoAPI = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
    })
      .then(res => {
        console.log(res.data);
        dispatch(createAction("SHOW_INFO_CINEMA", res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetCinemaDetailAPI = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP01`

    }).then(res=>{
      console.log(res.data)
      dispatch(createAction("SHOW_DETAIL_CINEMA",res.data))
    }).catch(err=>{
      console.log(err)
    })
  };
};


import Axios from "axios";
import createAction from "."

export const actGetListMovieAPI = () => {
    return dispatch => {
      Axios({
        method: "GET",
        url:
          "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
      })
        .then(result => {
          dispatch(createAction("SHOW_ALL", res.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
  };
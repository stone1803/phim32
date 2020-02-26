import Axios from "axios";
import { createAction } from "./index";

export const actGetAllUser = ()=>{
    return dispatch =>{
        Axios({
            method:"GET",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"
        }).then (res=>{
            dispatch(createAction("GET_ALL_USER",res.data))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const actGetAllFilm = ()=>{
  return dispatch =>{
      Axios({
          method:"GET",
          url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
      }).then (res=>{
        console.log(res.data)
          dispatch(createAction("GET_ALL_FILM",res.data))
      })
      .catch(err=>{
          console.log(err)
      })
  }
}
export const actGetAllCinema = ()=>{
  return dispatch =>{
      Axios({
          method:"GET",
          url:"http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
      }).then (res=>{
        console.log(res.data)
          dispatch(createAction("GET_ALL_CINEMA",res.data))
      })
      .catch(err=>{
          console.log(err)
      })
  }
}
export const addUserAction = nguoiDung => {
    //Lấy token từ localstorage
    let userLogin = JSON.parse(localStorage.getItem("UserAdmin"));
  
    return dispatch => {
        Axios({
        url:
          "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        method: "POST",
        data: nguoiDung,
        headers: { Authorization: "Bearer " + userLogin.accessToken }
      })
        .then(result => {
          console.log(result.data);
          //reload gọi lại api layDanhSachNguoiDung
          //Đưa dữ liệu thêm thành công lên reducer
        //   dispatch(createAction("ADD_USER",nguoiDung:result.data))

         dispatch({ type: "ADD_USER", nguoiDung: result.data });
        })
        .catch(error => {
          console.log(error.response.data);
        });
    };
  };
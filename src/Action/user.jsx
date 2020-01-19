import Axios from "axios"
class userServe {
    dangKy(data){
      return Axios({
            method:"POST",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data
        })
    }
}
export default userServe;
import React, { Component } from "react";
import { IsEmpty, Map, Get } from "react-lodash";
import Axios from "axios";
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: null,
      full: null,
      taiKhoan: "",
      matKhau: ""
    };
  }
  //

  componentDidMount() {
    fetch(
      "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1441"
    )
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            isLoaded: true,
            items: data.heThongRapChieu,
            full: data
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  phuc = () => {
    let { items, full } = this.state;
    console.log(items);
    console.log(full);

    // console.log(items[0].cumRapChieu);
    // console.log(items[0].cumRapChieu[0].tenCumRap);
    return items.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.tenHeThongRap}</td>
          <td>{data.cumRapChieu[0].tenCumRap}</td>
          <td>{data.cumRapChieu[0].lichChieuPhim[0].giaVe}</td>
          <td>{data.cumRapChieu[0].lichChieuPhim[0].thoiLuong} Phút</td>
        </tr>
      );
    });
  };

  _onChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };
  render() {
    const { error, isLoaded, items, cumRapChieu } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1 className="text-center text-white">CUM RAP CHIEU </h1>
          <ul className="text-center text-white">
            {items.map((item, index) => (
              <li key={index}>{item.tenHeThongRap}</li>
            ))}
          </ul>
          <h1 className="text-center text-white">
            CUM RAP CHIEU + {this.state.taiKhoan}{" "}
          </h1>
          <table className="table is-bordered container mt-4">
            <thead>
              <tr>
                <th>Hệ Thống Rạp</th>
                <th>Tên Cụm Rạp Chiếu</th>
                <th>Giá Vé</th>
                <th>Thời Giản</th>
              </tr>
            </thead>
            <tbody>{this.phuc()}</tbody>
          </table>
          <div className="container login-container">
            <div className="row">
              <div className="col-md-6 ads">
                <h1>
                  <span id="fl">PHIM</span>
                  <span id="sl">32.com</span>
                </h1>
                <span>Phim hay đang chờ bạn và ReactJS</span>
              </div>
              <div className="col-md-6 login-form">
                <div className="profile-img">
                  <img
                    src="./img/avatarlogin.png"
                    alt="profile_img"
                    height="140px"
                    width="140px;"
                  />
                </div>
                <h3>ĐĂNG NHẬP</h3>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="taiKhoan"
                      placeholder="Username"
                      onChange={this._onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="matKhau"
                      placeholder="Password"
                      onChange={this._onChange}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn-danger btn-lg btn-block"
                      onClick={() => {
                        Axios.post(
                          "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                          {
                            taiKhoan: this.state.taiKhoan,
                            matKhau: this.state.matKhau
                          }
                        )
                          .then(res => {
                            console.log(res);
                            if (res.data.taiKhoan && this.state.matKhau) {
                              alert("Dang nhap thang cong");
                              console.log(res.data);
                              this.setState({
                                taiKhoan: res.data.hoTen
                              });
                            } else if (res.data.status == 500) {
                              alert("THAT BAI");
                            } else {
                              alert("Username does not exist");
                            }
                          })
                          .catch(err => console.log(err));
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="form-group forget-password">
                    <a href="#">Forget Password</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

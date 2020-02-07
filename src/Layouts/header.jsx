import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import Gravatar from "react-gravatar";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: null,
      full: null,
      taiKhoan: "",
      matKhau: "",
      loginTaiKhoan: null,
      onOFF: false,
      target: "#loginModal"
    };
  }
  _onChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };
  render() {
    return (
      <>
        <div className="">
          <nav
            className="navbar is-dark
    "
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a className="navbar-item" href="">
                <img src="https://i.ibb.co/Vmrpv2h/logo192.png" />
              </a>

              <a
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <Link to="/" className="navbar-item">
                  TRANG CHỦ
                </Link>
                <Link to="/CinemaCluster" className="navbar-item">
                  CỤM RẠP
                </Link>

                <Link to="/detail:id" className="navbar-item">
                  LỊCH CHIẾU
                </Link>

                <Link className="navbar-item">TIN TỨC</Link>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <Link
                      to="/Reg"
                      class="button is-danger "
                      hidden={this.state.onOFF}
                    >
                      ĐĂNG KÝ
                    </Link>

                    <a
                      hidden={this.state.onOFF}
                      className="button is-warning"
                      data-toggle="modal"
                      data-target={this.state.target}
                    >
                      {this.state.taiKhoan === null
                        ? "ĐĂNG NHẬP"
                        : "Đăng Nhập" + this.state.taiKhoan}
                    </a>
                    <div>
                      {this.state.loginTaiKhoan === null ? (
                        <Link to="/infoUser/"></Link>
                      ) : (
                        <Link
                          to={`/infoUser/${this.state.taiKhoan}`}
                          className="text-light"
                        >
                          <div>
                            {/* <Gravatar
                              email=""
                              style={{
                                width: "68px",
                                height: "68px",
                                borderRadius:"50%",
                                marginRight:"20px"
                              
                              }}
                            /> */}
                            👳 {this.state.loginTaiKhoan}
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {/* login modal */}
          <div
            className="modal fade"
            id="loginModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    PHIM32.COM
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
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
                        type="password"
                        className="form-control"
                        name="matKhau"
                        placeholder="Password"
                        onChange={this._onChange}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        data-dismiss="modal"
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
                              // console.log(res);
                              // if (res.data.taiKhoan === this.state.taiKhoan) {
                              //   console.log(res.data);

                              // } else {
                              //   alert("Username does not exist");
                              // }
                              localStorage.setItem(
                                "User",
                                JSON.stringify(res.data)
                              );

                              if (res.data.taiKhoan !== this.state.taiKhoan) {
                                alert("PPPPPPPPPPPPPPP");
                              }
                              Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Đăng nhập thành công",
                                showConfirmButton: false,
                                timer: 1500
                              });
                              this.setState({
                                loginTaiKhoan: res.data.hoTen,
                                onOFF: true,
                                target: null
                              });
                            })
                            .catch(err => console.log(err));
                        }}
                      >
                        GO
                      </button>
                    </div>
                    <div className="form-group forget-password">
                      <Link
                        to="/Reg"
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        Nếu chưa có tài khoản vui lòng đăng ký
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
          {/* login modal */}
        </div>
      </>
    );
  }
}

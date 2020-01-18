import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
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
            class="navbar is-dark
    "
            role="navigation"
            aria-label="main navigation"
          >
            <div class="navbar-brand">
              <a class="navbar-item" href="">
                <img src="https://i.ibb.co/Vmrpv2h/logo192.png" />
              </a>

              <a
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <Link to="/" class="navbar-item">
                  TRANG CHỦ
                </Link>

                <Link to="/detail:id" class="navbar-item">
                  LỊCH CHIẾU
                </Link>
                <Link class="navbar-item">TIN TỨC</Link>
                <Link class="navbar-item">CỤM RẠP</Link>
              </div>

              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-danger " hidden={this.state.onOFF}>
                      ĐĂNG KÝ
                    </a>
                    <a
                      hidden={this.state.onOFF}
                      class="button is-warning"
                      data-toggle="modal"
                      data-target={this.state.target}
                    >
                      {this.state.loginTaiKhoan === null
                        ? "ĐĂNG NHẬP"
                        : " Xin Chào User " + this.state.loginTaiKhoan}
                    </a>
                    <div>
                      {this.state.loginTaiKhoan === null ? (
                        <Link to="/infoUser/"></Link>
                      ) : (
                        <Link to={`/infoUser/${this.state.loginTaiKhoan}`} className="text-light">
                          👉 TÀI KHOẢN {this.state.loginTaiKhoan}
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
                        type="text"
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
                              console.log(res.status);
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
                        Sign In
                      </button>
                    </div>
                    <div className="form-group forget-password">
                      <a href="#">Forget Password</a>
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

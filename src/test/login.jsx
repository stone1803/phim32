import React, { Component } from "react";

export default class c extends Component {
  render() {
    return (
      <div>
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
                    name="username"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-danger btn-lg btn-block"
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

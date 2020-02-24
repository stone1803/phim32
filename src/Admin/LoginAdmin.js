import React, { Component } from "react";
import {connect} from "react-redux"
import { actLogin } from "../Action/profile";
import { Button } from "react-bootstrap";
 class LoginAdmin extends Component {
  constructor(props){
    super(props)
    this.state={
      taiKhoan: "",
      matKhau: "",
    }
  }
  handleOnchange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  };render() {
    return (
      <div className="">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <input
                          name="taiKhoan"
                            type="text"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Tài khoản của bạn"
                            onChange={this.handleOnchange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                          name="matKhau"
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPaPassword"
                            placeholder="Password"
                            onChange={this.handleOnchange}
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <Button
                        type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </Button>
                        <hr />
                        <a
                          href="index.html"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw" /> Login with
                          Google
                        </a>
                        <a
                          href="index.html"
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw" /> Login with
                          Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: (user, history) => {
      dispatch(actLogin(user, history));
    }
  };
};

export default connect(null,mapDispatchToProps)(LoginAdmin)
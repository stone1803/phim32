import React, { Component } from "react";
import Axios from "axios";
import Gravatar from "react-gravatar";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import { userServes } from "../Action/index";

const SignupSchema = Yup.object().shape({
  taiKhoan: Yup.string().required("Tài khoản không được rỗng"),
  matKhau: Yup.string().required("Mật khẩu không được rỗng"),
  hoTen: Yup.string().required("Họ Tên không được rỗng"),
  soDT: Yup.string()
    .matches(/^[0-9]*$/)
    .required("Vui lòng nhập số"),
  email: Yup.string()
    .email("Địa chỉ email không đúng định dạng")
    .required('Email không được rỗng"')
});
export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: []
    };
  }
  componentDidMount() {
    const user = this.props.match.params.id;
    console.log(this.props.match.params.id);
    Axios.post(
      "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      {
        taiKhoan: user
      }
    ).then(res => {
      console.log(res.data);
      this.setState({
        profile: res.data
      });
    });
  }
  render() {
    console.log(this.state);
    if (this.state.profile) {
      return (
        <div className="container text-light mt-4">
          <div className="row m-y-2">
            <div className="col-lg-8 push-lg-4">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    href
                    data-target="#profile"
                    data-toggle="tab"
                    className="nav-link active"
                  >
                    Thông Tin Tài Khoản
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href
                    data-target="#messages"
                    data-toggle="tab"
                    className="nav-link"
                  >
                    Thông Tin Đặt Vé
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href
                    data-target="#edit"
                    data-toggle="tab"
                    className="nav-link"
                  >
                    Chỉnh Sửa Tài Khoản
                  </a>
                </li>
              </ul>
              <div className="tab-content p-b-3 mb-3 text-dark">
                <div className="tab-pane active" id="profile">
                  <h4 className="m-y-2">
                    Xin Chào + {this.state.profile.hoTen}
                  </h4>
                  <div className="row">
                    <div className="col-md-12">
                      <table className="table table-hover table-striped">
                        <tbody>
                          <tr>
                            <td>Tài khoản : {this.state.profile.taiKhoan}</td>
                          </tr>
                          <tr>
                            <td>Mật Khẩu : {this.state.profile.matKhau}</td>
                          </tr>
                          <tr>
                            <td>Họ Tên : {this.state.profile.hoTen}</td>
                          </tr>
                          <tr>
                            <td>Email : {this.state.profile.email}</td>
                          </tr>
                          <tr>
                            <td>Số Điện Thoại : {this.state.profile.soDT}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/*/row*/}
                </div>
                <div className="tab-pane" id="messages">
                  <h4 className="m-y-2">Recent Messages &amp; Notifications</h4>
                  <div className="alert alert-info alert-dismissable">
                    <a className="panel-close close" data-dismiss="alert">
                      ×
                    </a>{" "}
                    This is an <strong>.alert</strong>. Use this to show
                    important messages to the user.
                  </div>
                  <table className="table table-hover table-striped">
                    <tbody>
                      <tr>
                        <td>
                          <span className="pull-xs-right font-weight-bold">
                            3 hrs ago
                          </span>{" "}
                          Here is your a link to the latest summary report from
                          the..
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="pull-xs-right font-weight-bold">
                            Yesterday
                          </span>{" "}
                          There has been a request on your account since that
                          was..
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="pull-xs-right font-weight-bold">
                            9/10
                          </span>{" "}
                          Porttitor vitae ultrices quis, dapibus id dolor. Morbi
                          venenatis lacinia rhoncus.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="pull-xs-right font-weight-bold">
                            9/4
                          </span>{" "}
                          Vestibulum tincidunt ullamcorper eros eget luctus.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane" id="edit">
                  <h4 className="m-y-2">Cật nhật tài khoản</h4>
                  <Formik
                    initialValues={{
                      taiKhoan: "",
                      matKhau: "",
                      email: "",
                      hoTen: "",
                      soDT: "",
                      maNhom: "GP01",
                      maLoaiNguoiDung: "KhachHang"
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                      const { history } = this.props;

                      userServes
                        .dangKy(values)
                        .then(res => {
                          console.log(res.data);
                          localStorage.setItem(
                            "User",
                            JSON.stringify(res.data)
                          );
                          Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Đăng ký thành công",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          history.push("/Notification");
                        })
                        .catch(err => {
                          console.log(err);
                        });
                    }}
                    render={props => (
                      <form onSubmit={props.handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Tài khoản </label>
                          <Field
                            type="text"
                            className="form-control"
                            name="taiKhoan"
                            onChange={props.handleChange}
                          />
                          <ErrorMessage name="taiKhoan">
                            {msg => (
                              <div className="alert alert-primary" role="alert">
                                {msg}
                              </div>
                            )}
                          </ErrorMessage>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Mật Khẩu
                          </label>
                          <Field
                            type="password"
                            className="form-control"
                            name="matKhau"
                            onChange={props.handleChange}
                          />
                          <ErrorMessage name="matKhau">
                            {msg => (
                              <div className="alert alert-primary" role="alert">
                                {msg}
                              </div>
                            )}
                          </ErrorMessage>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Họ Tên</label>
                          <Field
                            type="text"
                            className="form-control"
                            name="hoTen"
                            onChange={props.handleChange}
                          />
                          <ErrorMessage name="hoTen">
                            {msg => (
                              <div className="alert alert-primary" role="alert">
                                {msg}
                              </div>
                            )}
                          </ErrorMessage>{" "}
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">SĐT</label>
                          <Field
                            type="text"
                            className="form-control"
                            name="soDT"
                            onChange={props.handleChange}
                          />
                          <ErrorMessage name="soDT">
                            {msg => (
                              <div className="alert alert-primary" role="alert">
                                {msg}
                              </div>
                            )}
                          </ErrorMessage>{" "}
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Email</label>
                          <Field
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={props.handleChange}
                          />
                          <ErrorMessage name="email">
                            {msg => (
                              <div className="alert alert-primary" role="alert">
                                {msg}
                              </div>
                            )}
                          </ErrorMessage>{" "}
                        </div>

                        <button type="submit" className="btn btn-danger">
                          Cật nhập
                        </button>
                      </form>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 pull-lg-8 text-xs-center mt-4">
              <Gravatar
                email={this.state.profile.email}
                className="m-x-auto img-fluid img-circle"
                alt="avatar"
                style={{
                  width: "100px",
                  height: "100px"
                }}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container text-light">
          <h1>LOADING</h1>
        </div>
      );
    }
  }
}

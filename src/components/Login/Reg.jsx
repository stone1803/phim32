import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { userServes } from "../../Action/index";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";

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
export default class Reg extends Component {
  signUP = values => {
    console.log(values);
  };
  render() {
    if(localStorage.getItem("Users")){
      return <Redirect to="/infoUser" />;
    }
    else{
      return (
        <section className="testimonial py-5 text-light" id="testimonial">
          <div className="container">
            <div className="row ">
              <div className="col-md-4 py-5 bg-warning text-white text-center ">
                <div className=" ">
                  <div className="card-body">
                    <img
                      src="https://cdn.24h.com.vn/upload/3-2019/images/2019-09-15/1568562240-300-a--8--1568544356-width650height866.jpg"
                      style={{ width: "30%" }}
                    />
                    <h2 className="py-3">Chào mừng bạn dến phim32.com</h2>
                    <p>
                      Đăng ký thành viên để được hưởng các chương trình ưu đãi lớn
                      dành cho thành viên
                    </p>
                    <h2 className="py-3">OR</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-8 py-5 border">
                <div className="container">
                  <h1 className="text-center mt-4">ĐĂNG KÝ THÀNH VIÊN </h1>
                  <Formik
                    initialValues={{
                      taiKhoan: "",
                      matKhau: "",
                      email: "",
                      hoTen: "",
                      soDT: "",
                      maNhom: "GP01",
                      maLoaiNguoiDung: "KhachHang",
  
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                      const { history } = this.props;

                      userServes
                        .dangKy(values)
                        .then(res => {
                          console.log(res.data);
                          localStorage.setItem("User", JSON.stringify(res.data));
                          Swal.fire({
                              position: "center",
                              icon: "success",
                              title: "Đăng ký thành công",
                              showConfirmButton: false,
                              timer: 1500
                            });
                            history.push('/Notification');

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
                          <label htmlFor="exampleInputPassword1">Mật Khẩu</label>
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
                          Đăng Ký
                        </button>
                      </form>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
    
  }
}

import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Menu from "../Admin/ad-component/Menu";

const AdminLayout = props => {
  return (
    <Fragment>
      <div className="sidebar" data-color="white" data-active-color="danger">
        <div className="logo">
          <a href="http://localhost.com:3000" className="simple-text logo-mini">
            <div className="logo-image-small">
              <img src="../../assetsc/img/logo.jpg" />
            </div>
          </a>
          <a href="http://localhost:3000" className="simple-text logo-normal">
            PHIM32.COM
          </a>
        </div>
        <Menu />
      </div>{" "}
      {props.children}
    </Fragment>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        } else {
          return <Redirect to="/admin" />;
        }
      }}
    />
  );
}

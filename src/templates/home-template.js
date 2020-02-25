import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../Layouts/header";
import Footer from "../Layouts/Footer";
const HomeLayout = props => {
  return (
    <Fragment>
              <Header />

      {props.children}
      <Footer/>

    </Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}

import React, { Component } from "react";
import Menu from "./ad-component/Menu";
import { connect } from "react-redux";
import { actGetAllUser, actGetAllFilm, actGetAllCinema } from "../Action/admin";
import Report from "./ad-component/Report";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(actGetAllUser());
    this.props.dispatch(actGetAllFilm());
    this.props.dispatch(actGetAllCinema());
  }
  render() {
    return (
      <div className="" style={{ marginTop: "-25px" }}>
        <div>
          <Report />
        </div>

        <div></div>
      </div>
    );
  }
}
export default connect()(Dashboard);

import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetAllUser, actGetAllFilm, actGetAllCinema } from "../Action/admin";
import Report from "./ad-component/Report";

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(actGetAllUser());
    this.props.dispatch(actGetAllFilm());
    this.props.dispatch(actGetAllCinema());
  }
  render() {
    return (
      <div>         
        <Report />
        
        </div>

    );
  }
}
export default connect()(Dashboard);

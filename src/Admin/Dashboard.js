import React, { Component } from "react";
import Menu from "./ad-component/Menu";
import {connect} from "react-redux"
import { actGetAllUser, actGetAllFilm, actGetAllCinema } from "../Action/admin";
import Report from "./ad-component/Report"
class Dashboard extends Component {
  componentDidMount(){
    this.props.dispatch(actGetAllUser());
    this.props.dispatch(actGetAllFilm());
    this.props.dispatch(actGetAllCinema());


  }
  render() {
    return <div className=""style={{marginTop:"-25px"}}>
  <div className="sidebar" data-color="white" data-active-color="danger" >
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
    <Menu/>
  </div>
  <div style={{marginTop:"-70px"}}>
  <Report/>
  </div>
 

</div>

  
  }
}
export default connect()(Dashboard)
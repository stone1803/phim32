import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetCinemaInfoAPI } from "../Action/movie";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
class CinemaSystem extends Component {
  componentDidMount() {
    this.props.dispatch(actGetCinemaInfoAPI());
  }

  renderCinemaHTML = () => {
    let { CinemaSystem } = this.props;
    return CinemaSystem.map((item, index) => {
      return (
        <div className="col-1" key={index}>
          <div className="card" style={{ width: "100px" }}>
            <img
              className="card-img-top"
              src={item.logo}
              alt={item.maHeThongRap}
              style={{ width: "100px" }}
            />
          </div>
        </div>
      );
    });
  };
  renderCinemaHTML1 = () => {
    let { CinemaSystem } = this.props;
    return CinemaSystem.map((item, index) => {
      return (
        <div className="container text-light mt-4">
          <h4 className="text-light" key={index}>
            {item.tenHeThongRap}
          </h4>
          <img src={item.logo} style={{width:"100px",height:"100px"}}/>
        </div>
      );
    });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return (
      <div className="container mt-4">
        <div>
          <h3 className="text-light text-center"> Hệ Thống Rạp PHIM32.com</h3>
          <Slider {...settings}>
            {this.renderCinemaHTML1()}
          </Slider>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  CinemaSystem: state.listMovieReducer.cinemaSystems
});
export default connect(mapStateToProps, null)(CinemaSystem);

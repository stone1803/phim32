import React, { Component } from "react";

import Moivetheater from "../../components/Movietheater";
import Moviesearch from "../../components/Movietheater/MovieSreach/Moviesearch";
import SaleOff from "../../Layouts/SaleOff";
import News from "../../Layouts/News";
import CinemaSystem from "../../Layouts/CinemaSystem";
import {
  actGetListMovieTopAPI,
  actGetListMovieAPI,
  actGetDetailMovieAPI
} from "../../Action/movie";
import { connect } from "react-redux";
import FeedBack from "../../Layouts/FeedBack";
class Home extends Component {
  async componentDidMount() {
    this.props.dispatch(actGetListMovieTopAPI());
    this.props.dispatch(actGetListMovieAPI());
  }

  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://s3img.vcdn.vn/123phim/2019/12/jumanjii-3-15762073170542.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://s3img.vcdn.vn/123phim/2019/12/jumanjii-3-15762073170542.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://s3img.vcdn.vn/123phim/2019/12/jumanjii-3-15762073170542.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <Moviesearch />
        <Moivetheater />
        <CinemaSystem />
        <SaleOff />
        <News />
        <FeedBack />
      </div>
    );
  }
}

export default connect()(Home);

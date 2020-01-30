import React, { Component } from "react";
import { connect } from "react-redux";

import {
  actGetCinemaInfoAPI,
  actGetCinemaDetailAPI
} from "../../Action/cinema";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
class CinemaCluster extends Component {
  componentDidMount() {
    this.props.dispatch(actGetCinemaInfoAPI());
    const id = this.props.match.params.id;

    this.props.dispatch(actGetCinemaDetailAPI(id));
    window.scrollTo(0, 0);
  }
  //   shouldComponentUpdate(){

  //   }

  constructor(props) {
    super(props);
    this.state = {
      danhSachPhim: []
    };
  }
  loadCinema = () => {
    let { danhSachPhim } = this.state;
    return danhSachPhim.map((data, index) => {
      console.log(data);
      return (
        <tr key={index}>
          <th scope="row">CỤM RẠP</th>
          <td>{data.tenPhim}</td>
        </tr>
      );
    });
  };
  hand = id => {
    console.log(id);
  };
  renderCinemaHTML = () => {
    let { CinemaSystem } = this.props;
    return CinemaSystem.map((item, index) => {
      return (
        <div className="container text-light mt-4">
          <h4 className="text-light" key={index}>
            {item.tenHeThongRap}
          </h4>
          <Link to={`/CinemaCluster/${item.maHeThongRap}`}>
            <img src={item.logo} style={{ width: "100px", height: "100px" }} />
          </Link>
        </div>
      );
    });
  };
  renderCinemaDetail = () => {
    let { detailCinema } = this.props;
    return detailCinema.map((item, index) => {
      return item["lstCumRap"].map((data, index) => {
        return data["danhSachPhim"].map((danhSachPhim, index) => {
          return (
            <tr key={index}>
              <th scope="row">{data.tenCumRap}</th>

              <td>{danhSachPhim.tenPhim}</td>
              <td>{data.diaChi}</td>
              <td>
                <Link>Chi tiết</Link>{" "}
              </td>
            </tr>
          );
        });
      });
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
          <Slider {...settings}>{this.renderCinemaHTML()}</Slider>
        </div>
        <div className="table-responsive-xl mt-4">
          <table className="table">
            <caption>Danh Sách Phim Theo Cụm Rạp</caption>
            <thead>
              <tr>
                <th scope="col">Tên Cụm Rạp</th>
                <th scope="col">Tên Phim</th>
                <th scope="col">Địa Chỉ</th>
                <th scope="col">Lịch Chiếu</th>
              </tr>
            </thead>
            <tbody>{this.renderCinemaDetail()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  CinemaSystem: state.listMovieReducer.cinemaSystems,
  detailCinema: state.listMovieReducer.detailCinema
});
export default connect(mapStateToProps, null)(CinemaCluster);

import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import Axios from "axios";
import { createAction } from "../../Action";
import Ghe from "./ghe";

class Oder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oder: null,
      mangGhe: []
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    if (!this.state.oder) {
      Axios({
        method: "GET",
        url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
      }).then(res => {
        this.setState({
          oder: res.data
        });
      });
    }
  }
  clickBook = data => {};
  phuc = () => {
    let { oder } = this.state;
    console.log(oder.danhSachGhe);
    return oder["danhSachGhe"].map((data, index) => {
      // if (data.loaiGhe === "Vip") {
      //   return <Ghe data={data} />;
      // } else {
      //   return <Ghe data={data} />;
      // }
      return <Ghe data={data}/>
    });
  };

  render() {
    let { oder, mangGhe } = this.state;
    if (oder) {
      return (
        <div className="container mt-4">
          <div className="row text-light container">
            <div className="col-4 mb-4">
              <h4>Thông tin user chọn :) </h4>
              <div className="card">
                <div className="card-header">
                  {oder.thongTinPhim["tenCumRap"]}
                </div>
                <div className="card-body">
                  <p> Rạp xem : {oder.thongTinPhim["tenRap"]}</p>
                  <p> Địa chỉ : {oder.thongTinPhim["diaChi"]}</p>
                  <p> Tên Phim : {oder.thongTinPhim["tenPhim"]}</p>
                  <p> Ngày chiếu : {oder.thongTinPhim["ngayChieu"]}</p>
                  <p> Giờ chiếu : {oder.thongTinPhim["gioChieu"]}</p>
                  <p>Ghé Bạn Chọn :{mangGhe.soLuong}</p>
                </div>
                <div className="card-footer">
                  <button className="">Thanh Toán </button>
                </div>
              </div>
            </div>
            <div className="col-8 mb-4">
              <h4>Danh sách ghế bạn có thể chọn</h4>
              <div>{this.phuc()}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1 className="text-light">LOADING</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  oder: state.listMovieReducer.Oder
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(Oder);

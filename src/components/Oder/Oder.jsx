import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import Axios from "axios";
import { createAction } from "../../Action";
import Ghe from "./Ghe";
import RemoveGhe from "./removeGhe";

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
  handleGhe = data => {
    console.log(data);
    const objGhe = {
      maGhe: data.maGhe,
      tenGhe: data.tenGhe,
      maRap: data.maRap,
      stt: data.stt,
      giave: data.giaVe,
      daDat: data.daDat,
      taiKhoanNguoiDat: data.taiKhoanNguoiDat
    };

    let mangGhe = [...this.state.mangGhe];

    let index = mangGhe.findIndex(item => {
      return item.maGhe === objGhe.maGhe;
    });

    if (index !== -1) {
      // Tim thay (da ton tai)
      // Cap nhat so luong
      mangGhe[index].soLuong += 1;
    } else {
      //Them  vào 
      mangGhe = [...this.state.mangGhe, objGhe];
    }

    this.setState({
      mangGhe
    });
  };
  Ghe = () => {
    let { oder } = this.state;
    return oder["danhSachGhe"].map((data, index) => {
      return <Ghe data={data} clickGhe={this.handleGhe} />;
    });
  };
  showGhe = () => {
    let { mangGhe } = this.state;
    console.log(mangGhe);
    return mangGhe.map(data => {
      return <RemoveGhe data={data} delete={this.deleteGhe} />;
    });
  };
  deleteGhe = data => {
    let index = this.state.mangGhe.findIndex(item => item.maGhe === data.maGhe);
    let mangGhe = [...this.state.mangGhe];

    if (index !== -1) {
      mangGhe.splice(index, 1);

      this.setState({
        mangGhe
      });
    }
  };

  render() {
    let { oder, mangGhe } = this.state;
    console.log(this.state);
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
                  <p>Ghé Bạn Chọn :{this.showGhe()}</p>
                  <button className="btn btn-success">THANH TOÁN</button>
                </div>
                <div className="card-footer">
                  <span className="">Lưu ý : Màu đỏ ghé vip, màu xanh ghé thường, hủy ghé chọn vào ghé đã chọn để hủy </span>
                </div>
              </div>
            </div>
            <div className="col-8 mb-4">
              <h4>Danh sách ghế bạn có thể chọn</h4>
              <div>{this.Ghe()}</div>
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

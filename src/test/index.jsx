import React, { Component } from "react";
import { IsEmpty, Map, Get } from "react-lodash";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: null,
      full: null
    };
  }
  //

  componentDidMount() {
    fetch(
      "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1443"
    )
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            isLoaded: true,
            items: data.heThongRapChieu,
            full: data
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  phuc = () => {
    let { items, full } = this.state;

    console.log(items);
    console.log(full);

    // console.log(items[0].cumRapChieu);
    // console.log(items[0].cumRapChieu[0].tenCumRap);
    return items.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.tenHeThongRap}</td>
          <td>{data.cumRapChieu[0].tenCumRap}</td>
          <td>{data.cumRapChieu[0].lichChieuPhim[0].giaVe}</td>
          <td>{data.cumRapChieu[0].lichChieuPhim[0].thoiLuong} Phút</td>


        </tr>
      );
    });
  };
  render() {
    const { error, isLoaded, items, cumRapChieu } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1 className="text-center text-white">CUM RAP CHIEU </h1>
          <ul className="text-center text-white">
            {items.map((item, index) => (
              <li key={index}>{item.tenHeThongRap}</li>
            ))}
          </ul>
          <h1 className="text-center text-white">CUM RAP CHIEU </h1>
          <table className="table is-bordered container mt-4">
            <thead>
              <tr>
                <th>Hệ Thống Rạp</th>
                <th>Tên Cụm Rạp Chiếu</th>
                <th>Giá Vé</th>
                <th>Thời Giản</th>
              </tr>
            </thead>
            <tbody>{this.phuc()}</tbody>
          </table>
        </div>
      );
    }
  }
}

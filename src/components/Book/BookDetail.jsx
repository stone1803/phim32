import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class BookDetail extends Component {
  render() {
    let { lichChieu } = this.props;
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Tên Rạp</th>
              <th scope="col">Lịch Chiếu</th>
              <th scope="col">Giá Vé</th>
              <th scope="col">Đặt Vé</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{lichChieu.tenRap}</td>
              <td>{lichChieu.ngayChieuGioChieu}</td>
              <td>{lichChieu.giaVe}</td>
              <td>
        
                <Link to={`/Oder/${lichChieu.maLichChieu}`}>
                  <button className="btn btn-info">GO</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

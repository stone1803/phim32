import React, { Component } from "react";
import BookDetail from "./BookDetail";

export default class BookItem extends Component {

  renderLichChieuPhim = () => {
    let { cumRapChieu } = this.props;
    return cumRapChieu["lichChieuPhim"].map((data, index) => {
      return <BookDetail lichChieu={data} />;
    });
  };
  render() {
    let { cumRapChieu } = this.props;
    return (
      <div className="card col ml-4">
        <div className="card-header">{cumRapChieu.tenCumRap}</div>
        <div className="card-body">{this.renderLichChieuPhim()}</div>
        <div className="card-footer">DAT PHIM</div>
      </div>
    );
  }
}

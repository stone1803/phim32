import React, { Component } from "react";

export default class Ghe extends Component {
  render() {
    let { data } = this.props;
    if (data.loaiGhe === "Vip") {
      return (
        <button
          className="m-1 btn-danger"
          onClick={() => {
            this.props.clickGhe(data);
          }}
        >
          {data.tenGhe}
        </button>
      );
    } else {
      return (
        <button
          className="m-1 btn-info"
          onClick={() => {
            this.props.clickGhe(data);
          }}
        >
          {data.tenGhe}
        </button>
      );
    }
  }
}

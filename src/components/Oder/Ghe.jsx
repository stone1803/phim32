import React, { Component } from "react";

export default class Ghe extends Component {
  render() {
    let { data } = this.props;
    return (
      <div>
        <button
          key={index}
          className="m-1 btn-danger"
          onClick={this.clickBook(data.tenGhe)}
        >
          {data.tenGhe}
        </button>
      </div>
    );
  }
}

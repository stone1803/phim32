import React, { Component } from "react";

export default class RemoveGhe extends Component {
  render() {
    let { data } = this.props;
    return (
      <button
        className="btn btn-warning ml-2 mb-2"
        onClick={() => {
          this.props.delete(data);
        }}
      >
        {data.tenGhe}
      </button>
    );
  }
}

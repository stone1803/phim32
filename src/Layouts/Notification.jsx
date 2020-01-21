import React, { Component } from "react";

export default class Notification extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-light mt-4">
          BẠN ĐÃ ĐĂNG KÝ THÀNH CÔNG VUI LÒNG ĐĂNG NHẬP
        </h3>
        <div className="mt-4 container">
            <img src="https://source.unsplash.com/random" style={{width:"500",height:"500"}}/>
        </div>
      </div>
    );
  }
}

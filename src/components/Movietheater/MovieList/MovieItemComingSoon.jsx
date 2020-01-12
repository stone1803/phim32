import React, { Component } from 'react'

export default class MovieItemComingSoon extends Component {
    render() {
        return (
          <div className="col-md-3 col-sm-6">
          <div className="box14 mt-3">
            <img src={this.props.item.hinhAnh} alt="HINH aNH" />
            <div className="box-content">
              <h3 className="title has-text-white	">
                {this.props.item.tenPhim}
              </h3>
              <span className="post">{this.props.item.ngayKhoiChieu}</span>
              <ul className="icon">
                <li>
                  <button className="btn btn-danger mr-2">Chi Tiết</button>
                </li>
                <li>
                <button className="btn btn-warning">Đặt Phim</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        )
    }
}

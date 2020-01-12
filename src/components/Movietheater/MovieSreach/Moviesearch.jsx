import React, { Component } from "react";

export default class Moviesearch extends Component {
  render() {
    return (
      <div>
        <div className="container mt-4 align-center " style={{ padding: 0 }}>
          <div className="notification">
            <div className="row">
              <div className="col-md-4">
                <div className="select">
                  <select style={{ width: 500 }}>
                    <option>PHIM</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <div className="select">
                  <select>
                    <option>RẠP</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <div className="select">
                  <select>
                    <option>NGÀY XEM</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <div className="select">
                  <select>
                    <option>XUẤT CHIẾU</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <div className="control">
                  <a href="/chonghe.html">
                    {" "}
                    <button className="button is-danger">MUA VÉ NGAY</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

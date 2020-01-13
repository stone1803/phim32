import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actGetDetailMovieAPI } from "../../../Action/movie";

class MovieItemShowTop extends Component {


  render() {
    return (
      <div className="col-md-3 col-sm-6">
        <div className="box14 mt-3">
          <img src={this.props.item.hinhAnh} alt="HINH aNH" style={Img} />
          <div className="box-content">
            <h3 className="title has-text-white	">{this.props.item.tenPhim}</h3>
            <span className="post">
              {new Date(this.props.item.ngayKhoiChieu).toLocaleDateString()}
            </span>
            <ul className="icon">
              <li>
                <Link to={`/detail/${this.props.item.maPhim}`}>
                  <button className="btn btn-warning mr-2">Chi Tiết</button>
                </Link>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const Img = {
  with: "100%",
  height: "350px"
};


export default connect(null, null)(MovieItemShowTop);

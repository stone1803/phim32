import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from "react-router-dom";


export default class MovieItemAll extends Component {
    render() {
        return (
          <div className="col-md-3 col-sm-6">
          <div className="box14 mt-2">
            <img src={this.props.item.hinhAnh} alt="HINH aNH" style={Img} />
            <div className="box-content">
              <h3 className="title has-text-white	">
                {this.props.item.tenPhim}
              </h3>
              <span className="post">
              {new Date(this.props.item.ngayKhoiChieu).toLocaleDateString()  || <Skeleton />}
              </span>
              <ul className="icon">
                <li>
                <Link to={`/detail/${this.props.item.maPhim}`  || <Skeleton />}>
                  <button  className="btn btn-warning mr-2">Mua Vé</button>
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        )
    }
}
const Img = {
  with:"100%",
  height :"350px"
  
};
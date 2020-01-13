import React, { Component } from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";

class InfoMovieDetail extends Component {
  render() {
    let { detail } = this.props;

    return (
      <div className="row">
        <div className="column">
          <img src={detail.hinhAnh || <Skeleton duration={1} height={100}  />

} />
        </div>

        <div className="column is-four-fifths">
          <h1 className="has-text-white mt-4 display-4">
            {detail.tenPhim || <Skeleton duration={1} />}
          </h1>

          <p className="has-text-white mt-4">
            Nội Dung : {detail.moTa || <Skeleton count={10} />}
          </p>
          <p className="has-text-white mt-4">
            Ngày Chiếu :{new Date(detail.ngayKhoiChieu).toLocaleDateString()|| <Skeleton duration={1}/>}
          </p>
          <p className="has-text-white mt-4">
            Đánh Giá : {detail.danhGia || <Skeleton duration={1} />}
          </p>
          <button className="btn btn-danger mt-4">XEM TRAILER</button>
        </div>
        <div className="container mt-4 align-center " style={{ padding: 0 }}>
          <div className="notification">
            <div className="row container">
              <div className="col-md-3">
                <div className="select">
                  <select>
                    <option>Rạp Chiếu </option>
                    <option></option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="select">
                  <select>
                    <option>NGÀY XEM</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="select">
                  <select>
                    <option>XUẤT CHIẾU</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="control">
                  <button className="button is-danger">MUA VÉ NGAY</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  detail: state.listMovieReducer.detailmMovies
});

export default connect(mapStateToProps, null)(InfoMovieDetail);

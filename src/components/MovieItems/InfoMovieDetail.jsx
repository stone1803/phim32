import React, { Component } from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { PacmanLoader } from "react-spinners";
import { css } from "@emotion/core";
import { createAction } from "../../Action";
import { actGetInfoFimlBook, actGetBookOder } from "../../Action/book";
import BookItem from "../Book/BookItem";
const override = css`
  display: block;
  margin: 50px;
  border-color: red;
`;
class InfoMovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {}
  renderRapChieu = () => {
    let { infoBook } = this.props;
    return infoBook["heThongRapChieu"].map((item, index) => {
      return item["cumRapChieu"].map((data, index) => {
        return <BookItem cumRapChieu={data} key={index} />;
      });
    });
  };
  renderlichChieuPhim = () => {
    let { infoBook } = this.props;
    return infoBook["heThongRapChieu"].map((item, index) => {
      return item["cumRapChieu"].map((data, index) => {
        return data["lichChieuPhim"].map((lich, index) => {
          return (
            <option>
              {new Date(lich.ngayChieuGioChieu).toLocaleDateString()}
            </option>
          );
        });
      });
    });
  };
  render() {
    let { detail, infoBook } = this.props;
    console.log(this.props);
    if (detail.length === 0) {
      return (
        <div className="FadeLoader">
          <PacmanLoader
            css={override}
            size={40}
            //size={"150px"} this also works
            color={"#123abc"}
            loading={this.state.loading}
          />
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="column">
            <img src={detail.hinhAnh} />
          </div>

          <div className="column is-four-fifths">
            <h1 className="has-text-white mt-4 display-4">{detail.tenPhim}</h1>

            <p className="has-text-white mt-4">Nội Dung : {detail.moTa}</p>
            <p className="has-text-white mt-4">
              Ngày Chiếu :{new Date(detail.ngayKhoiChieu).toLocaleDateString()}
            </p>
            <p className="has-text-white mt-4">Đánh Giá : {detail.danhGia}</p>
            <button
              className="btn btn-danger mt-4"
              data-toggle="modal"
              data-target="#trailer"
            >
              XEM TRAILER
            </button>
          </div>
          <div className="container mt-4 align-center " style={{ padding: 0 }}>
            <div className="notification">
              <div className="row container">{this.renderRapChieu()}</div>
            </div>
          </div>
          <div
            className="modal fade"
            id="trailer"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-danger" id="trailer">
                    Trailer : {detail.tenPhim}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div claclassNames="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src={detail.trailer}
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Đóng Lại
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  detail: state.listMovieReducer.detailmMovies,
  infoBook: state.listMovieReducer.cinemaSystem
});

export default connect(mapStateToProps, null)(InfoMovieDetail);

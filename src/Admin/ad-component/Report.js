import React, { Component } from "react";
import { connect } from "react-redux";
class Report extends Component {
  render() {
    let { allUser, allFilm, allCinema } = this.props;
    return (
      <div className="main-panel" style={{marginTop:"-25px"}}>
        <div className="content container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <div className="numbers">
                        <p className="card-category">Tổng Tài Khoản</p>
                        <p className="card-title"></p>
                        {allUser.length}
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh" /> Xem chi tiết
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <div className="numbers">
                        <p className="card-category">Tổng Phim </p>
                        <p className="card-title">{allFilm.length}</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar-o" /> Xem chi tiết
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <div className="numbers">
                        <p className="card-category">Hệ Thống Rạp</p>
                        <p className="card-title">{allCinema.length}</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o" /> Xem chi tiết
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
let mapStateToProps = state => ({
  allUser: state.listAdminReducer.allUser,
  allFilm: state.listAdminReducer.allFilm,
  allCinema: state.listAdminReducer.allCinema
});
export default connect(mapStateToProps, null)(Report);

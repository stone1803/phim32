import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetCinemaFILLTERAPI } from "../../Action/movie";
import { Link } from "react-router-dom";
class Search extends Component {
  handleButtonClick() {
    let moive = this.state.tenPhim;
    this.props.dispatch(actGetCinemaFILLTERAPI(moive));
  }
  renderfillterCinema = () => {
    let { fillterCinema } = this.props;
    return fillterCinema.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.tenPhim}</td>
          <td>
            <img
              src={item.hinhAnh}
              alt={item.tenPhim}
              style={{ width: 50, height: 50 }}
            />
          </td>
          <td>{new Date(item.ngayKhoiChieu).toLocaleDateString()}</td>
          <td>{item.danhGia}</td>
        </tr>
      );
    });
  };
  renderIDMoive = () => {
    let { fillterCinema } = this.props;
    return fillterCinema.map(item => {
      return item.maPhim;
      
    });
    
  };

  constructor(props) {
    super(props);
    this.state = {
      tenPhim: null
    };
  }
  _onChange = e => {
    const { name, value } = e.target;
    console.log(value);
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    return (
      <div className="container text-center">
        <button
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#Search"
        >
          {" "}
          👉 TÌM PHIM NHANH 👈
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="Search"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Nhập Phim
                </h5>
                <input
                  type="text"
                  className="form-control mb-3 w-50"
                  name="tenPhim"
                  placeholder="Ví Dụ : Inside Out"
                  onChange={this._onChange}
                />
                <button
                  className="btn btn-warning"
                  onClick={this.handleButtonClick.bind(this)}
                >
                  Tìm Phim
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tên Phim</th>
                      <th>Hình Ảnh</th>
                      <th>Ngày Chiếu</th>
                      <th>Đánh Giá</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderfillterCinema()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
                <Link to={`/detail/${this.renderIDMoive()}`}>
                  <button type="button" className="btn btn-danger"
                  >
                    ĐẶT VÉ PHIM
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// const mapDispathToProp = dispatch => {
//   return {
//     onFilter: keyword => {
//       dispatch(action.onFilter(keyword));
//     }
//   };
// };
let mapStateToProps = state => ({
  fillterCinema: state.listMovieReducer.fillterCinema
});

export default connect(mapStateToProps, null)(Search);

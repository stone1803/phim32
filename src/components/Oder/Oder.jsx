import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";

class Oder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oder: [],
      click: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
    }).then(res => {
      this.setState({
        oder: res.data
      });
    });
  }
  phuc = () => {
    let { oder } = this.state;
    Object.entries(oder.thongTinPhim).map(([key, value], index) => {
      console.log(key, value);
    });
  };

  render() {
    let { oder } = this.state;
    let _innn = Object.values(oder);
    return (
      <div className="container mt-4">
        <div className="row text-light container">
          <div className="col-4">
            <h4>Thông tin </h4>
          </div>
          <div className="col-8">
            <h1>DANH SACH GHE</h1>
            <button className="btn btn-info" onClick={this.phuc}>
              GOGOGO
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Oder: state.listMovieReducer.Oder
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(Oder);

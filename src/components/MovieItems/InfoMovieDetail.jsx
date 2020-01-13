import React, { Component } from 'react'
import {connect} from "react-redux"

class InfoMovieDetail extends Component {
    render() {
      let { detail } = this.props;

        return (
            <div className="row">

                <div className="column">
                <img src={detail.hinhAnh} />
                <h1 className="has-text-white mt-4 display-5">Tên Phim :{detail.tenPhim}</h1>

              </div>

              <div className="column is-four-fifths">
                <p className="has-text-white mt-4">
                  Mô Tả : {detail.moTa}
                </p>
                <button className="btn btn-danger mt-4">XEM TRAILER</button>
              </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
  detail: state.listMovieReducer.detailmMovies
});


export default connect(mapStateToProps,null)(InfoMovieDetail)
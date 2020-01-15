import React, { Component } from "react";
import MovieItemShowTop from "./MovieList/MovieItemShowTop";
import MovieItemAll from "./MovieList/MovieItemAll";
import { createAction } from "../../Action";
import { connect } from "react-redux";
class Moivetheater extends Component {
  renderListTop = () => {
    let { listTopMovies } = this.props;
    console.log(listTopMovies);
    return listTopMovies.map((item, index) => {
      return <MovieItemShowTop item={item} key={index} />;
    });
  };
  renderListALL = () => {
    let { listAllMovies } = this.props;
    console.log(listAllMovies);
    return listAllMovies.map((item, index) => {
      return <MovieItemAll item={item} key={index} />;
    });
  };

  render() {
    return (
      <div>
        {/* dang chieu sap chieu */}
        <div className="container mt-4 notification">
          <div className="row justify-content-center">
            <div className="col-xs-12 ">
              <nav>
                <div
                  className="nav nav-tabs nav-fill "
                  id="nav-tab"
                  role="tablist"
                >
                  <a
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    TOP PHIM HAY ĐÁNG XEM
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    DANH SÁCH PHIM CHIẾU
                  </a>
                </div>
              </nav>
              <div className="tab-content " id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  {/* LIST PHIM */}
                  <div className="container">
                    <div className="row">{this.renderListTop()}</div>
                  </div>
                  {/* sadas */}

                  {/* LISPHITM   */}
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="container">
                    <div className="row">{this.renderListALL()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* dang chieu sap chieu */}
      </div>
    );
  }
}
let mapStateToProps = state => ({
  listTopMovies: state.listMovieReducer.moviesTops,
  listAllMovies: state.listMovieReducer.moviesAll
});
export default connect(mapStateToProps, null)(Moivetheater);

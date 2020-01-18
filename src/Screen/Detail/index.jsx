import React, { Component } from "react";
import { actGetDetailMovieAPI, actGetBookAPI } from "../../Action/movie";
import { connect } from "react-redux";
import InfoMovieDetail from "../../components/MovieItems/InfoMovieDetail";
class Detail extends Component {
  state = {
    loadding: true
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(actGetDetailMovieAPI(id));
    this.props.dispatch(actGetBookAPI(id));

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="mt-4">
        <div className="mt-4">
          <div className="container mt-4 has-text-white">
            <div className="columns">
              <InfoMovieDetail />
            </div>
          </div>
          {/* chi tiet  */}
        </div>
        {/* cam nhan  */}
 
        {/* cam nhan  */}
        <div
          className="cam_nhan container contact-form  mt-4"
          style={{ width: "75%", height: 110, overflow: "auto" }}
        >
          <div className="row">
            <div className="col-md-6 mt-4">
              <p>
                <i className="fa fa-dove" />
                ledanghongphuc@gmail.com
              </p>
            </div>
            <div className="col-md-l6 mt-4">
              <p>
                {" "}
                <i className="fab fa-avianex" />
                Phim xem hay lắm mọi người
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-4">
              <p>
                <i className="fa fa-mail-bulk" />
                ledanghongphuc@gmail.com
              </p>
            </div>
            <div className="col-md-l6 mt-4">
              <p>
                {" "}
                <i className="fab fa-avianex" />
                Phim xem hay lắm mọi người
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-4">
              <p>
                <i className="fa fa-mail-bulk" />
                ledanghongphuc@gmail.com
              </p>
            </div>
            <div className="col-md-l6 mt-4">
              <p>
                {" "}
                <i className="fab fa-avianex" />
                Phim xem hay lắm mọi người
              </p>
            </div>
          </div>
        </div>
        {/* cam nhan  */}
        {/* tin tuc lien quan  */}
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="blog-card blog-card-blog">
                <div className="blog-card-image">
                  <a href="#">
                    <img
                      className="img"
                      src="https://s3img.vcdn.vn/123phim/2019/09/sieu-pha-m-hoa-t-hi-nh-trung-quo-c-na-tra-ma-dong-giang-the-chi-nh-thu-c-do-bo-pho-ng-chie-u-vie-t-nam-15686321271183.jpg"
                    />
                  </a>
                  <div className="ripple-cont" />
                </div>
                <div className="blog-table">
                  <h6 className="blog-category blog-text-success">
                    <i className="far fa-newspaper" /> Tin tức
                  </h6>
                  <h4 className="blog-card-caption">
                    <a href="#">
                      Gọi danh những bộ phim kinh dị khiến đêm Giáng Sinh an
                      lành trở thành cơn ác mộng
                    </a>
                  </h4>
                  <p className="blog-card-description">
                    Giáng Sinh là thời điểm fan điện ảnh cùng bạn bè, gia đình
                    quây quần bên
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-card blog-card-blog">
                <div className="blog-card-image">
                  <a href="#">
                    <img
                      className="img"
                      src="https://s3img.vcdn.vn/123phim/2019/09/sieu-pha-m-hoa-t-hi-nh-trung-quo-c-na-tra-ma-dong-giang-the-chi-nh-thu-c-do-bo-pho-ng-chie-u-vie-t-nam-15686321271183.jpg"
                    />
                  </a>
                  <div className="ripple-cont" />
                </div>
                <div className="blog-table">
                  <h6 className="blog-category blog-text-success">
                    <i className="far fa-newspaper" /> Tin tức
                  </h6>
                  <h4 className="blog-card-caption">
                    <a href="#">
                      Gọi danh những bộ phim kinh dị khiến đêm Giáng Sinh an
                      lành trở thành cơn ác mộng
                    </a>
                  </h4>
                  <p className="blog-card-description">
                    Giáng Sinh là thời điểm fan điện ảnh cùng bạn bè, gia đình
                    quây quần bên
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Detail);

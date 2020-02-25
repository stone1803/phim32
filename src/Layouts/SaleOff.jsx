import React, { Component } from 'react'

export default class SaleOff extends Component {
    render() {
        return (
            <div>
      {/* khuyen mai  */}
<div className="container khuyem_mai">
  <div className="row blog">
    <div className="col-md-12">
      <div id="blogCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#blogCarousel" data-slide-to={0} className="active" style={{borderRadius: '100%', width: 10, height: 10}} />
          <li data-target="#blogCarousel" data-slide-to={1} style={{borderRadius: '100%', width: 10, height: 10}} />
        </ol>
        {/* Carousel items */}
        <div className="carousel-inner mt-4 container">
          <div className="text-center is-size-3	has-text-white	">
            <p>Mã giảm giá &amp; Khuyến mãi mới nhất</p>
          </div>
          <div className="carousel-item active mt-4">
            <div className="row">
              <div className="col-md-3">
                <a href="#">
                  <img src="./img/khuyenmai.jp" alt="Image" style={{maxWidth: '80%'}} />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#">
                  <img src="./img/khuyenmai2.jpg" alt="Image" style={{maxWidth: '80%'}} />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#">
                  <img src="./img/khuyenmai3.jpg" alt="Image" style={{maxWidth: '80%'}} />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#">
                  <img src="./img/khuyenmai4.jpg" alt="Image" style={{maxWidth: '80%'}} />
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item mt-4">
            <div className="row">
              <div className="col-md-3">
                <a href="#">
                  <img src="./img/khuyenmai5.jpg" alt="Image" style={{maxWidth: '80%'}} />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#">
                  <img src="./img/khuyenmai6.jpg" alt="Image" style={{maxWidth: '80%'}} />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#">
                  <img src="./img/khuyenmai7.jpg" alt="Image" style={{maxWidth: '80%'}} />
                </a>
              </div>
              <div className="col-md-3">
                <a href="#">
                  <img src="./img/khuyenmai8.jpg" alt="Image" style={{maxWidth: '80%'}} />
                </a>
              </div>
            </div>
            {/*.row*/}
          </div>
          {/*.item*/}
        </div>
        {/*.carousel-inner*/}
      </div>
      {/*.Carousel*/}
    </div>
  </div>
</div>


            </div>
        )
    }
}

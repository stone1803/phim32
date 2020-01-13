import React, { Component } from 'react'

export default class FeedBack extends Component {
    render() {
        return (
      <div>
  {/* feedback */}
  <section className="testimonial-section2">
    <div className="row text-center">
      <div className="col-12">
        <div className="h2">CẢM NHẬN</div>
      </div>
    </div>
    <div id="testim" className="testim">
      {/*         <div class="testim-cover"> */}
      <div className="wrap">
        <span id="right-arrow" className="arrow right" />
        <span id="left-arrow" className="arrow left" />
        <ul id="testim-dots" className="dots">
          <li className="dot active" />
          {/*
                   */}
          <li className="dot" />
          {/*
                   */}
          <li className="dot" />
          {/*
                   */}
          <li className="dot" />
          {/*
                   */}
          <li className="dot" />
        </ul>
        <div id="testim-content" className="cont">
          <div className="active">
            <div className="img">
              <img src="./img/avatar1.jpg" alt />
            </div>
            <div className="h4">Ngân 98</div>
            <p>
              🍌🍌🍌🍌🍌 dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div>
            <div className="img">
              <img src="./img/avatar2.jpg" alt />
            </div>
            <div className="h4">Trâm Anh</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div>
            <div className="img">
              <img src="./img/avatar3.jpg" alt />
            </div>
            <div className="h4">Vui Vẻ</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div>
            <div className="img">
              <img src="./img/avatar4.jpg" alt />
            </div>
            <div className="h4">Gia Kiệt</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div>
            <div className="img">
              <img src="./img/avatar5.jpg" alt />
            </div>
            <div className="h4">Phương Anh</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/*         </div> */}
  </section>
  {/* feedback */}
</div>

        )
    }
}

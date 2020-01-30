import React, { Component } from "react";
import faker from "faker";

export default class FeedBack extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <div className="testimonial-content">
                  <p className="description">
                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium cum cumque dolore ducimus est exercitationem
                    explicabo molestiae, velit! Eum nam porro voluptate. A
                    aliquid asperiores assumenda consectetur cum dolore
                    doloremque eius error fugiat id in ipsam ipsum laborum
                    libero minus nam. "
                  </p>
                </div>
                <div className="pic">
                  <img src={faker.internet.avatar()} alt />
                </div>
                <h3 className="testimonial-title">Williamson</h3>
                <span className="post">Web Designer</span>
              </div>
              <div className="testimonial">
                <div className="testimonial-content">
                  <p className="description">
                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium cum cumque dolore ducimus est exercitationem
                    explicabo molestiae, velit! Eum nam porro voluptate. A
                    aliquid asperiores assumenda consectetur cum dolore
                    doloremque eius error fugiat id in ipsam ipsum laborum
                    libero minus nam. "
                  </p>
                </div>
                <div className="pic">
                  <img src={faker.internet.avatar()} alt />
                </div>
              <h3 className="testimonial-title">{faker.name.findName()}</h3>
    <span className="post"></span>
              </div>
              <div className="testimonial">
                <div className="testimonial-content">
                  <p className="description">
                    " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium cum cumque dolore ducimus est exercitationem
                    explicabo molestiae, velit! Eum nam porro voluptate. A
                    aliquid asperiores assumenda consectetur cum dolore
                    doloremque eius error fugiat id in ipsam ipsum laborum
                    libero minus nam. "
                  </p>
                </div>
                <div className="pic">
                  <img src={faker.internet.avatar()} alt />
                </div>
                <h3 className="testimonial-title">{faker.name.findName()}</h3>
                <span className="post">{faker.name.findName()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

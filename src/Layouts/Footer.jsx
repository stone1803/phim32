import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <section className="footer bg-dark">
          <div className>
            <div className="row">
              <div className="col-lg-4  col-md-4 col-sm-4">
                <div className="footer_dv">
                  <h4>APP MOBILE</h4>
                  <ul>
                    <li className="line_rv">
                      <a href="">
                        <img src="https://firebasestorage.googleapis.com/v0/b/chiasekhoahoc.appspot.com/o/social-appstore-white.png?alt=media&token=25109f06-dd53-4fdc-b3a0-0ce64b8cd11f" />
                      </a>
                      <a href="https://firebasestorage.googleapis.com/v0/b/chiasekhoahoc.appspot.com/o/social-googleplay-white.png?alt=media&token=592469ac-52c4-4e8d-a9b1-908a0a644718">
                        <img src="https://firebasestorage.googleapis.com/v0/b/chiasekhoahoc.appspot.com/o/social-googleplay-white.png?alt=media&token=592469ac-52c4-4e8d-a9b1-908a0a644718" />
                      </a>
                    </li>
                    <div className="mt-4">
                      <h2>Bạn muốn nhận tin hay vé phim mới</h2>
                      <p className="mt-2">Đăng ký ngay và luôn miến phí ?</p>
                      <div className="form-section">
                        <input
                          placeholder="Your Email..."
                          name="EMAIL"
                          id="mce-EMAIL"
                          type="email"
                          style={{ height: 35 }}
                        />
                        <input
                          defaultValue="Yes. I want!"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          type="submit"
                          className="btn btn-danger"
                        />
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4  col-md-4 col-sm-4">
                <div className="footer_dv">
                  <h4>DỊCH VỤ VÀ CHÍNH SÁCH</h4>
                  <ul>
                    <li>
                      <a ui-sref="main.term" href="/thoa-thuan-su-dung">
                        Thỏa thuận sử dụng
                      </a>
                    </li>
                    <li>
                      <a ui-sref="main.regular" href="/quy-che-hoat-dong">
                        Quy chế hoạt động
                      </a>
                    </li>
                    <li>
                      <a ui-sref="main.policy" href="/chinh-sach-bao-mat">
                        Chính sách bảo mật
                      </a>
                    </li>
                    <li>
                      <a ui-sref="main.guidev2" href="/quyen-loi-thanh-vien/">
                        Quyền lợi thành viên
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4  col-md-4 col-sm-4">
                <div className="footer_dv">
                  <h4>Liên hệ chúng tôi</h4>
                  <p>Chuyên gia đào tạo lập trình</p>
                  <p>Cơ sở 1: 376 Võ Văn Tần – Quận 3</p>
                  <p>Cơ sở 2: 459 Sư Vạn Hạnh – Quận 10</p>
                  <p>Cơ sở 3: 82 Ung Văn Khiêm – Bình Thạnh</p>
                  <p>Cơ sở 4: Đà Nẵng – Quận Hải Châu</p>
                  <p>
                    <i className="fab fa-telegram" /> 096.105.1014 –
                    098.407.5835
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

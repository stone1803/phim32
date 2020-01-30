import React, { Component } from 'react'

export default class Oder extends Component {
    render() {
        return (
          <div className="  container mt-4 has-text-white">
  {/* chon ghe  */}
  <div className="container">
    <div className="chonghe__chuan">
      <div className="row text-center">
        <div className="col-md-4">
          <img className src="../../img/ghedangchon.png" style={{width: 100, borderRadius: 100}} />
          GHẼ CHƯA CHỌN
        </div>
        <div className="col-md-4">
          <img className src="../../img/ghedangchon.png" style={{width: 100, borderRadius: 100}} />
          GHẼ ĐANG CHỌN
        </div>
        <div className="col-md-4">
          <img className src="../../img/ghedachon.png" style={{width: 100, borderRadius: 100}} />
          GHẼ ĐÃ CHỌN
        </div>
      </div>
    </div>
    <hr />
    <div className="oder__ghe">
      <div className="row">
        <div className="col-md-4">
          <h5 className>GHÉ BẠN CHỌN</h5>
          <div className="mt-4">
            <img className src="../../img/ghedachon.png" style={{width: 50, borderRadius: 100}} />
            <img className src="../../img/ghedachon.png" style={{width: 50, borderRadius: 100}} />
            <img className src="../../img/ghedachon.png" style={{width: 50, borderRadius: 100}} />
            <img className src="../../img/ghedachon.png" style={{width: 50, borderRadius: 100}} />
          </div>
          <div className="text-info">
            <p>Tên phim :
              Antman</p>
            <p>Rạp 1</p>
            <p>Ngày chiếu
              02-08-2018</p>
            <p>Suất chiếu
              12:30</p>
            <p>Số ghế
              21 22</p>
            <p> Thời lượng
              120 phút</p>
            <p> Giá vé
              150.000đ</p>
          </div>
          <hr />
          <button className="btn btn-info">THANH TOÁN </button>
        </div>
        <div className="col-md-8">
          <h1 className>DANH SÁCH GHẾ NGỒI</h1>
          <div className="danhsach_ghe mt-4 text-center">
            <div className="row">
              <div className="col-md-1">
                <img className src="./img/ghedangchon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
            </div>
          </div>
          <div className="danhsach_ghe mt-4 text-center">
            <div className="row">
              <div className="col-md-1">
                <img className src="./img/ghedangchon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
            </div>
          </div>
          <div className="danhsach_ghe mt-4 text-center">
            <div className="row">
              <div className="col-md-1">
                <img className src="./img/ghedangchon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
            </div>
          </div>
          <div className="danhsach_ghe mt-4 text-center">
            <div className="row">
              <div className="col-md-1">
                <img className src="./img/ghedangchon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
              <div className="col-md-1">
                <img className src="./img/ghechuachon.png" style={{width: 50, borderRadius: 100}} />
              </div>
            </div>
            <hr />
          </div>
        </div>
        {/* thong bao ghe */}
      </div>
    </div>
  </div>
</div>

        )
    }
}

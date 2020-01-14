import React, { Component } from "react";
import { connect } from "react-redux";

class Bang extends Component {
  render() {

    console.log(this.props.cinema.heThongRapChieu);
    return (
      <div>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
       
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cinema: state.listMovieReducer.cinemaSystem
});

export default connect(mapStateToProps, null)(Bang);

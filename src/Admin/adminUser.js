import React, { Component } from 'react'
import TableS from "./ad-component/Table"

export default class AdminUser extends Component {

  render() {

    return (
      <div className=" main-panel"
      style={{width:"800"}}
      >
        <TableS/>
      </div>
    )
  }
}

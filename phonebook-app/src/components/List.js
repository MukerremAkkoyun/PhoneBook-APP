import React, { Component } from 'react'
import './List.css'

export default class List extends Component {

  render() {
    return (
      <div className={"listArea"}>
        <input name={"filter"} id={"filter"} placeholder={"Filter by name or phone"}></input>
        <ul className={"list"}>
            <li></li>
            <li>aaaa</li>
            <li>tttt</li>
            <li>ssss</li>
            <li>aaaa</li>
        </ul>
      </div>
    )
  }
}


import React, { Component } from 'react'

export default class List extends Component {

  render() {
    return (
      <div>
        <input name="filter" id="filter" placeholder="Filter by name or phone"></input>
      </div>
    )
  }
}
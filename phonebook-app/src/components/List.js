import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './List.css'



export default class List extends Component {

  static propTypes = {
		contacts: PropTypes.array.isRequired,
	};

  render() {
    return (
      <div className={"listArea"}>
        <input name={"filter"} id={"filter"} placeholder={"Filter by name or phone"}></input>
        <ul className={"list"}>
        {
						this.props.contacts.map(a =>
							<li key={a.phone}>
								<span className={"name"}>{a.name}</span>
								<span className={"phone"}>{a.phone}</span>
								<span className={"clearfix"}></span>
							</li>
						)
					}
        </ul>
      </div>
    )
  }
}


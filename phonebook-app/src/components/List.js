import React, { Component } from 'react'
import './List.css'
// import PropTypes from 'prop-types'

export default class List extends Component {

  

	state = {
		filter: '',
	};

  onChangeFilter = (e) => {
    this.setState({
			filter: e.target.value
		})
  };
  
  render() {

    const filteredContacts = this.props.contacts.filter(
      vv => {
        return vv.name.toLowerCase().indexOf(
          this.state.filter.toLowerCase()
        ) !== -1
      }
    )

    return (
      <div className={"listArea"}>
        <input name={"filter"}
        id={"filter"}
        onChange={this.onChangeFilter}
        value={this.state.filter}
        placeholder={"Filter by name or phone"}></input>
        <ul className={"list"}>
        {
						filteredContacts.map(a =>
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


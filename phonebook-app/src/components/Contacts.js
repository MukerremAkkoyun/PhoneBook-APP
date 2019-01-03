import React, { Component } from 'react';
import PropTypes from 'prop-types'
import List from './List'
import Form from './Form'

export default class Contacts extends Component {

    static propTypes = {
        ccc: PropTypes.array.isRequired,
        addContact: PropTypes.func
    };
    
    render() {
        return (
            <div>
                <List contacts = {this.props.ccc} />
                <Form addContact={this.props.addContact} />
            </div>
        )
    }
}

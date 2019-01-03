// import React, { Component } from 'react';
import React from 'react';
import propTypes from 'prop-types'

import List from './List'
import Form from './Form'

// export default class Contacts extends Component {

 // static propTypes = {
    //     ccc: PropTypes.array.isRequired,
    //     addContact: PropTypes.func
    // };

    const Contact = props => 

    // render() {
    //     return (
            <div>
                {/* <List contacts = {this.props.ccc} />
                <Form addContact={this.props.addContact} /> */}
                <List contacts = {props.ccc} />
                <Form addContact={props.addContact} />
            </div>;
//         )
//     }
// }

Contact.propTypes = {
    ccc: propTypes.array.isRequired,
    addContact: propTypes.func
};

export default Contact;

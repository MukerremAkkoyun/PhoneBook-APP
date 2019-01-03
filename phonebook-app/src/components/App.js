import React, { Component } from 'react';
import '../App.css';

import Contacts from "./Contacts";

class App extends Component {

  state = {
    array: [{
        name : 'mehmet',
        phone: '456 32 22'
    },{
        name : 'eleman2',
        phone: 'phone2'
    },{
        name : 'eleman3',
        phone: 'phone3'
    }]
};


  render() {
    return (
      <div className="App">
        <Contacts  contacts={this.state.array} />
      </div>
    );
  }
}

export default App;

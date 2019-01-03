import React, { Component } from 'react';
import '../App.css';
import Contacts from "./Contacts";

class App extends Component {

  constructor(props) {
    super(props)
  
    this.addContact =  this.addContact.bind(this);
  };
  

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

  addContact(b){
    const { array } = this.state;
    array.push(b);

    this.setState({
      array
    });
  }


  render() {
    return (
      <div className="App">
        <Contacts addContact={ this.addContact }  ccc={ this.state.array } />
      </div>
    );
  }
}

export default App;

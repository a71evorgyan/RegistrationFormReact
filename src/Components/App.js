import React, { Component } from 'react';
import Register from './Register';
import {Login} from './Login';
import '../Stylesheets/FormStyle.css';

class App extends Component {
  users = []

  addUser(user){
    this.users.push(user)
  }

  render() {
    console.log("users" ,this.users);
    return (
      <div className="App">
        <Register 
          users={this.users}
          addUser={this.addUser}
        />
        <Login />
        {this.users.length ? <div>{this.users.map((elem) => {Element.fName})}</div> : null}
      </div>
    );
  }
}

export default App;

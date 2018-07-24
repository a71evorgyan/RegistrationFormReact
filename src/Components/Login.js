import React, { Component } from 'react';
import {FormErrors} from './Error';
import '../Stylesheets/FormStyle.css';


export class Login extends Component {

  render() {
      

    return (
        <div className="outerDiv">
            <form onSubmit={this.handleSubmit} className="fromStyle">
                <h2>Log In</h2>

                <label htmlFor="uname">Username</label>
                <input type="text" name="uName"  id="uname" value='' onChange={this.handleChange} /> <br/>

                <label htmlFor="psw">Password</label>
                <input type="password" name="password" id="psw" value='' onChange={this.handleChange} /> <br/>           
            
                <input type="submit"  disabled value="Log In" /> <br/> 
            </form>
        </div>
    );
  }
}


import React, { Component } from 'react';
import {FormErrors} from './Error';
import '../Stylesheets/FormStyle.css';


class Register extends Component {
    state = {
        data: {
            fName: '',
            lName: '',
            uName: '',
            email: '',
            password: '',
            notifications: false
            
        },
        errors: {
            fNameValid: false,
            lNameValid: false,
            uNameValid: false,
            emailValid: false,
            passwordValid: false,
            
        },
        formValid: false,
        

        

    }

    validateField = (name, value) => {
        const {errors} = this.state;
        let fNameValid = errors.fNameValid;
        let lNameValid = errors.lNameValid;
        let uNameValid = errors.uNameValid;
        let emailValid = errors.emailValid;
        let passwordValid = errors.passwordValid;
        switch(name) {
            case 'fName':
                fNameValid = value.length > 0;
                break;
            case "lName":
                lNameValid = value.length > 0;
                break;
            case "uName":
                uNameValid = value.length > 0;
                break;
            case 'email': 
                emailValid = value.split('').filter(x => x === '@').length === 1  && value.indexOf('.') !== -1;
                break;
            case 'password':
                passwordValid = value.length > 6;
                break;
            default:
                break;
        }
        // console.log("emailValid :", emailValid);
        // console.log("passwordValid :", passwordValid);
        // console.log("uNameValid:", uNameValid);
        
        
        this.setState((prevState) => ({
            errors: {
                ...prevState.errors,
                ...{
                    fNameValid: fNameValid,
                    lNameValid: lNameValid,
                    uNameValid: uNameValid,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                }
            }
        }), this.validateForm);
    }
    
    validateForm(){
        const {errors} = this.state;
        const result = Object.values(errors).indexOf(false) === -1 ? true : false;
        console.log("result", result);
        this.setState({formValid: result});
    }

    

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value; 
        this.validateField(name, value);
        this.setState((prevState) => ({
            data: { 
                ...prevState.data,
                ...{[name]: value},  
            }
          }));  
    }

    

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(" first", this.state.data);
        this.props.addUser(this.state.data);
        console.log("inreg", this.props.users);
        // console.log("hereeee", Object.values(this.state.errors).indexOf(false) === -1 ? true: false );
        console.log(JSON.stringify(this.state, null, 4))
            
    }  
   
   
    



  render() {
      const {errors} = this.state;
      console.log("formvalid",this.state.formValid);

    
      

    return (
        <div className="outerDiv">
            <form onSubmit={this.handleSubmit} className="fromStyle">
                <h2>Sign up</h2>
            
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fName"  id="fname" value={this.state.data.fName}  onChange={this.handleChange}/> <br/>
                <FormErrors showError={errors.fNameValid}/>
                

                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lName" id="lname" value={this.state.data.lName} onChange={this.handleChange} /> <br/>
                <FormErrors showError={errors.lNameValid}/>

                <label htmlFor="uname">Username</label>
                <input type="text" name="uName"  id="uname" value={this.state.data.uName} onChange={this.handleChange} /> <br/>
                <FormErrors showError={errors.uNameValid}/>

                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" value={this.state.data.email} onChange={this.handleChange} /> <br/>
                <FormErrors showError={errors.emailValid}/>

                <label htmlFor="psw">Password</label>
                <input type="password" name="password" id="psw" value={this.state.data.password} onChange={this.handleChange} /> <br/>
                <FormErrors showError={errors.passwordValid}/>

                <div className="checkbox">
                    Notifications: 
                    <input type="checkbox" name="notifications" value={this.state.data.notifications} onChange={this.handleChange} /> <br/>
                </div>

            
                <input type="submit"  disabled={!this.state.formValid} value="Sign Up" /> <br/> 
            </form>
        </div>
    );
  }
}


export default Register;
import React, { Component } from 'react';
import './Forms.css';





class Forms extends Component {
  state = {
    loggedIn:false
  }
  loginHandle = () => {
    this.setState({loggedIn:true})
  }


  render() {
  return (
    <div className="Forms">
    <form action='./ShopDashboard/ShopDashboard.js'>
    <input type='text' placeholder='Name' name='Name' />
    <input type='text' placeholder='Email' name='Email' />
    <input type='password' placeholder='Password' name='password'/>
    <input type='button' value='Log In!' onClick={this.loginHandle.bind(this)}/>

    </form>


  </div>
);
  }
 }


export default Forms;

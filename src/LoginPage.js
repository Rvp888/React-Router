
import React, { Component } from 'react';

export default class LoginPage extends Component {
  render() {
    return (
      <div className='login'>
        <h1>Login</h1>
        <input type="email" placeholder='Enter Email'/><br/>
        <input type='password' placeholder='Enter Password'/><br/>
        <button type='submit'>Login</button>
      </div>
    )
  }
}

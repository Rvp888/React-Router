
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

export default class Header extends Component {
  render() {
    return (
        <div className='headerComp'>
            <h1>Header</h1>
            <div className='header'>
                <button>
                    <Link to="/">Home</Link>
                </button>
                <button>
                    <Link to="about">About</Link>
                </button>
                <button>
                    <Link to="login">Login</Link>
                </button>
            </div>
        </div>
    )
  }
}

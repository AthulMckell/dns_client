import React from 'react';
import "../login/login.css";
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <div>
            <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" >
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton" type="submit">Login</button>
      </form>
        
    </div>
        </div>
    );
}

export default Login;
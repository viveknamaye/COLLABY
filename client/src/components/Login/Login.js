import React from 'react'
import logo from '../../images/teamwork.jpg';
import './Login.css'

const Login = () => {
  return (
    <>
      <div className="logo_container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <form className="login_container">
        <h1 className="login_title">Login</h1>
        <div className="login_input_container">
          <label>Username/Email: </label>
          <input className="login_input_field" type="text" required />
        </div>
        <div className="login_input_container">
          <label>Password: </label>
          <input className="login_input_field" type="password" required />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      <p></p>
    </>
  );
}

export default Login
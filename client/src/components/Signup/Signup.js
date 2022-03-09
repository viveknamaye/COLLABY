import React from "react";
import logo from "../../images/teamwork.jpg";
import "../Login/Login.css";

const Signup = () => {
  return (
    <>
      <div className="logo_container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <form className="login_container">
        <h1 className="login_title">Signup</h1>
        
        <div className="login_input_container">
          <label>Name: </label>
          <input className="login_input_field" type="text" required />
        </div>

        <div className="login_input_container">
          <label>Username: </label>
          <input className="login_input_field" type="text" required />
        </div>

        <div className="login_input_container">
          <label>Password: </label>
          <input className="login_input_field" type="password" required />
        </div>

        <div className="login_input_container">
          <label>Email: </label>
          <input className="login_input_field" type="email" required />
        </div>

        <div className="login_input_container">
          <label>Linkedin: </label>
          <input className="login_input_field" type="text" required />
        </div>

        <div className="login_input_container">
          <label>GitHub: </label>
          <input className="login_input_field" type="text" required />
        </div>

        <button type="submit" className="btn">
          Signup
        </button>
      </form>
    </>
  );
};

export default Signup;

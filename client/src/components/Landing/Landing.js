import React from "react";
import "./Landing.css";
import logo from "../../images/teamwork.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div>
        <img src={logo} alt="" className="logo-img" />
      </div>
      <div className="landing_container">
        <div className="vertical-center">
          <h1>A Place to Collaborate</h1>
          <div className="descrp">
            <span>Connect</span>
            <span>Share</span>
            <span>Resolve</span>
          </div>
          <div className="btn-container">
            <Link to='/login' className="landing-btn">Log in</Link>
            <Link to='/signup' className="landing-btn">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

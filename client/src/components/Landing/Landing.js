import React from "react";
import "./Landing.css";
import logo from "../../images/teamwork.jpg";

const Landing = () => {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="" className="logo-img" />
      </div>
      <div className="container">
        <div className="vertical-center">
          <h1>A Place to Collaborate</h1>
          <div className="descrp">
            <span>Connect</span>
            <span>Share</span>
            <span>Resolve</span>
          </div>
          <div className="btn-container">
            <button className="btn">Sign in</button>
            <button className="btn">Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;

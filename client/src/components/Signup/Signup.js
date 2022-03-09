import React, { useState } from "react";
import logo from "../../images/teamwork.jpg";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const history = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    hash_password: "",
    email: "",
    linkedin_link: "",
    github_link: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/users", user)
      .then((resp) => {
        console.log(resp.data);
        console.log("user registered successfully");
        history("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        history("/signup");
      });
  };

  return (
    <>
      <div className="logo_container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <form className="login_container" onSubmit={handleSubmit}>
        <h1 className="login_title">Signup</h1>

        <div className="login_input_container">
          <label>Name: </label>
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            className="login_input_field"
            type="text"
            required
          />
        </div>

        <div className="login_input_container">
          <label>Username: </label>
          <input
            name="username"
            value={user.username}
            onChange={handleChange}
            className="login_input_field"
            type="text"
            required
          />
        </div>

        <div className="login_input_container">
          <label>Password: </label>
          <input
            name="hash_password"
            value={user.hash_password}
            onChange={handleChange}
            className="login_input_field"
            type="password"
            required
          />
        </div>

        <div className="login_input_container">
          <label>Email: </label>
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            className="login_input_field"
            type="email"
            required
          />
        </div>

        <div className="login_input_container">
          <label>Linkedin: </label>
          <input
            name="linkedin_link"
            value={user.linkedin_link}
            onChange={handleChange}
            className="login_input_field"
            type="text"
            required
          />
        </div>

        <div className="login_input_container">
          <label>GitHub: </label>
          <input
            name="github_link"
            value={user.github_link}
            onChange={handleChange}
            className="login_input_field"
            type="text"
            required
          />
        </div>

        <button type="submit" className="btn">
          Signup
        </button>
      </form>
    </>
  );
};

export default Signup;

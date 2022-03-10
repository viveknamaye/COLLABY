import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/teamwork.jpg";
import "./Login.css";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../../globalstate";

const Login = () => {
  const history = useNavigate();
  const [loggedinuser, setLoggedinuser] = useState({
    email: "",
    hash_password: "",
  });
  const [allposts, setAllposts] = useState([]);

  const { currentUser, setCurrentuser } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:4000/api/users/login/${loggedinuser.email}`)
      .then((resp) => {
        // console.log("response", resp.data.user);
        // console.log("given data", loggedinuser.hash_password);
        if (loggedinuser.hash_password === resp.data.user.hash_password) {
          setCurrentuser(resp.data.user);
          localStorage.setItem("profile", JSON.stringify(resp.data.user));
          axios
            .get("http://localhost:4000/api/posts/")
            .then((resp) => {
              setAllposts(resp.data);
              localStorage.setItem("posts", JSON.stringify(resp.data));
              console.log("posts updated");
            })
            .catch((err) => {
              console.log(err);
            });
          history("/dashboard", { state: { name: resp.data.user } });
          // setLoggedinuser({ email: "", hash_password: "" });
          // console.log("success");
        } else {
          alert("invalid password");
          // setLoggedinuser({ email: "", hash_password: "" });
          history("/login");
        }
      })
      .catch((err) => {
        alert("invalid email");
        // setLoggedinuser({ email: "", hash_password: "" });
        history("/login");
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoggedinuser({ ...loggedinuser, [name]: value });
  };

  return (
    <>
      <div className="logo_container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <form className="login_container" onSubmit={handleSubmit}>
        <h1 className="login_title">Login</h1>
        <div className="login_input_container">
          <label>Email: </label>
          <input
            name="email"
            value={loggedinuser.email}
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
            value={loggedinuser.hash_password}
            onChange={handleChange}
            className="login_input_field"
            type="password"
            required
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      <p></p>
    </>
  );
};

export default Login;

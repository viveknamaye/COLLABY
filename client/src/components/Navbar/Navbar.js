import React from "react";
import { FaHome } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import "./Navbar.css";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../globalstate";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  // const history = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <article className="navbar_username">Hi {profile.name}</article>
      <div className="icon_container">
        <Link to="/dashboard" className="icon">
          <FaHome />
          <p className="icon-text">Home</p>
        </Link>
        <div className="icon">
          <BsPeopleFill />
          <p className="icon-text">Collaborate</p>
        </div>
        <div className="icon">
          <IoMdNotifications />
          <p className="icon-text">Notifications</p>
        </div>
        <Link to="/profile" className="icon">
          <BsFillPersonFill />
          <p className="icon-text">Profile</p>
        </Link>
        <button className="icon" onClick={handleLogout}>
          <BiLogOutCircle />
          <p className="icon-text">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

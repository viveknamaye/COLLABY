import React from "react";
import { FaUser } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { useState } from "react";
import "./Profile.css";
import Tags from "./Tags";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Profile = () => {
  const [tagList, settagList] = useState([
    "html",
    "css",
    "javascript",
    "react js",
  ]);
  const profile = JSON.parse(localStorage.getItem("profile"));
  const url1 = "http://" + profile.github_link;
  const url2 = "http://" + profile.linkedin_link;
  return (
    <div className="profile-container">
      <Navbar />
      <div className="card-container">
        <button className="btn">
          <FiEdit />
          <span>Edit</span>
        </button>

        <div className="main-container">
          <div className="profile-img">
            <FaUser className="profile-svg" />
          </div>
        </div>
        <div className="personal-info">
          <h2>{profile.name}</h2>
          <h3>{profile.email}</h3>
          <ul className="profile-options">
            <li>
              <a href="">23 Connections</a>
            </li>
          </ul>
          <div>
            <a href={url1} target="_blank" className="social-media-links">
              <AiFillGithub />
            </a>
            <a href={url2} className="social-media-links">
              <RiLinkedinFill />
            </a>
          </div>
        </div>
      </div>

      <div className="body-container">
        <div className="profile-info">
          <h3>About Me</h3>
          <p>Hey!! There I am enjoying the Django Project</p>
          <h3>Skills</h3>
          <div className="tag-container">
            {tagList.map((tag) => {
              return <Tags name={tag} />;
            })}
          </div>
          <h3>My Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;

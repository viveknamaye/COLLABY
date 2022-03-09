import React from "react";
import { FaUser } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { useState } from "react";
import "./Profile.css";
import Tags from "./Tags";

const Profile = () => {
  const [tagList, settagList] = useState([
    "html",
    "css",
    "javascript",
    "react js",
  ]);
  return (
    <div className="profile-container">
      <div className="card-container">
        <button className="edit-btn">
          <FiEdit />
          <span>Edit</span>
        </button>
        <div className="main-container">
          <div className="profile-img">
            <FaUser className="profile-svg" />
          </div>
        </div>
        <div className="personal-info">
          <h2>Chinmay Palav</h2>
          <h3>chinmaypalav123@gmail.com</h3>
          <ul className="profile-options">
            <li>
              <a href="">23 Connections</a>
            </li>
          </ul>
          <div>
            <a href="" className="social-media-links">
              <AiFillGithub />
            </a>
            <a href="" className="social-media-links">
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

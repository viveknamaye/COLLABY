import React from 'react'
import {FaHome} from 'react-icons/fa'
import { BsPeopleFill } from "react-icons/bs";
import {IoMdNotifications} from "react-icons/io";
import {BsFillPersonFill} from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <article className="navbar_username">Hi Manthanbbshjbdfhbbsd.</article>
      <div className="icon_container">
        <div className="icon">
          <FaHome />
          <p className='icon-text'>Home</p>
        </div>
        <div className="icon">
          <BsPeopleFill />
          <p className='icon-text'>Collaborate</p>
        </div>
        <div className="icon">
          <IoMdNotifications />
          <p className='icon-text'>Notifications</p>
        </div>
        <div className="icon">
          <BsFillPersonFill />
          <p className='icon-text'>Profile</p>
        </div>
        <div className="icon">
          <BiLogOutCircle />
          <p className='icon-text'>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar
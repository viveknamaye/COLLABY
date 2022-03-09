import React from 'react'
import logo from '../../images/teamwork.jpg';
import Markdown from '../Markdown/Markdown';
import Navbar from '../Navbar/Navbar';
import './IssuesForm.css'

const Login = () => {
  return (
    <>
    <div className='issues_container'>
      <Navbar/>
      <form className="login_container overflow_issue_container">
        <h1 className="login_title">Create an Issue</h1>
        <div className="login_input_container">
          <label>Title: </label>
          <input className="login_input_field" type="text" required />
        </div>
        <div className="login_input_container">
          <label>Description: </label>
          <textarea className="login_input_field" type="text" required />
        </div>
        <div className="login_input_container">
          <label>GitHub Link: </label>
          <input className="login_input_field" type="text" required />
        </div>
        <Markdown/>
        <button type="submit" className="btn">
            Create
        </button>
      </form>


      </div>
    </>
  );
}

export default Login
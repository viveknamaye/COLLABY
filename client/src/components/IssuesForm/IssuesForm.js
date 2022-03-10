import React, { useState } from "react";
import logo from "../../images/teamwork.jpg";
import Navbar from "../Navbar/Navbar";
import "./IssuesForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const IssuesForm = () => {
  const [issueform, setIssueform] = useState({
    title: "",
    description: "",
    github_link: "",
    snippet: "",
    userID: "",
  });
  const history = useNavigate();

  const [allposts, setAllposts] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setIssueform({ ...issueform, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const profile = JSON.parse(localStorage.getItem("profile"));
    console.log(profile);
    setIssueform({
      ...issueform,
      userID: profile._id,
    });
    console.log(issueform);

    axios
      .post("http://localhost:4000/api/posts", issueform)
      .then((resp) => {
        console.log(resp.data);
        console.log("user posted successfully");
        history("/dashboard");

        // axios
        //   .get("http://localhost:4000/api/posts/")
        //   .then((resp) => {
        //     console.log(resp.data);
        //     setAllposts(resp.data);
        //     console.log("posts updated");
        //     localStorage.setItem("allposts", JSON.stringify(allposts));
        //     history("/dashboard");
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      })
      .catch((err) => {
        console.log(err);
        history("/issuesform");
      });
  };

  return (
    <>
      <div className="issues_container">
        <Navbar />
        <form
          className="login_container overflow_issue_container"
          onSubmit={handleSubmit}
        >
          <h1 className="login_title">Create an Issue</h1>
          <div className="login_input_container">
            <label>Title: </label>
            <input
              name="title"
              value={issueform.title}
              onChange={handleChange}
              className="login_input_field"
              type="text"
              required
            />
          </div>
          <div className="login_input_container">
            <label>Description: </label>
            <textarea
              name="description"
              value={issueform.description}
              onChange={handleChange}
              className="login_input_field"
              type="text"
              required
            />
          </div>
          <div className="login_input_container">
            <label>GitHub Link: </label>
            <input
              name="github_link"
              value={issueform.github_link}
              onChange={handleChange}
              className="login_input_field"
              type="text"
              required
            />
          </div>
          <div className="login_input_container">
            <label>Snippet: </label>
            <textarea
              name="snippet"
              value={issueform.snippet}
              onChange={handleChange}
              className="login_input_field"
              type="text"
              required
            />
          </div>
          <button type="submit" className="btn">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default IssuesForm;

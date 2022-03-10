import axios from "axios";
import React from "react";
import Feeds from "../Feeds/Feeds";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [allposts, setAllposts] = useState([]);
  const profile = JSON.parse(localStorage.getItem("profile"));
  // console.log(profile);
  useEffect(() => {
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
  }, []);

  return (
    <div className="dashboard_flex">
      <Navbar />
      <Feeds />
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import Avatar from "boring-avatars";
import "./Feed.css";
// import axios from "axios";

const Feed = ({ feed }) => {
  console.log(feed);
  const { title, description, username } = feed;
  // console.log(title);
  // axios.get(`https://localhost:4000/api/users/${userID}`).then((res) => {
  //   setName(res.data.user.name);
  // });

  return (
    <div className="feed_container">
      <div className="feed_header">
        <div className="feed_header_first">
          <Avatar
            className="feed_avatar"
            size={50}
            name="Manthan Godhasara"
            variant="bauhaus"
            colors={["#A3A948", "#EDB92E", "#F85931", "#CE1836", "#009989"]}
          />
          <p className="feed_username">{username}</p>
        </div>
        <p className="feed_timestamp">09/03/2022 17:45</p>
      </div>
      <div className="feed_title">{title}</div>
      <div className="feed_content">{description}</div>
    </div>
  );
};

export default Feed;

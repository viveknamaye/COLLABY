import React from "react";
import Feed from "../Feed/Feed";
import Search from "../Search/Search";
import "./Feeds.css";

const Feeds = () => {
  const posts = JSON.parse(localStorage.getItem("posts"));
  // console.log(posts);
  return (
    <div className="feeds_container">
      <Search />
      {posts.posts.map((feed) => {
        return <Feed feed={feed} />;
      })}
    </div>
  );
};

export default Feeds;

import React from 'react'
import Navbar from '../Navbar/Navbar';
import Avatar from "boring-avatars";
import './Singlefeed.css'
import Comment from '../Comment/Comment';

const Singlefeed = () => {
  return (
    <div className="singlefeed_page">
      <Navbar />
      <div className="singlefeed_container">
        <div className="feed_header">
          <div className="feed_header_first">
            <Avatar
              className="feed_avatar"
              size={50}
              name="Manthan Godhasara"
              variant="bauhaus"
              colors={["#A3A948", "#EDB92E", "#F85931", "#CE1836", "#009989"]}
            />
            <p className="feed_username">Manthan Godhasara</p>
          </div>
          <p className="feed_timestamp">09/03/2022 17:45</p>
        </div>
        <div className="feed_title">Why java is so tough?</div>
        <div className="feed_content noscroll">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          accusamus quia minus beatae autem veniam voluptatum necessitatibus
          odit maxime! Sequi vel numquam fuga natus quo amet similique tempore
          incidunt sunt?lorem300
        </div>
        <div className="feed_github_repo">
          https://github.com/manthanjgodhasara/expense-tracker
        </div>
      </div>
      <div className="right_container">
        <div className="comment_section">
          <form action="">
            <input
              className="comment_input login_input_field"
              type="text"
              placeholder="Add a comment..."
            />
            <button
              type="submit"
              className="chat__inputButton"
            >
              Send Message
            </button>
          </form>
          <div className="comment_display">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
          <div>
            <button className="generate btn">Generate Link</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singlefeed
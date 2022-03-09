import React from 'react'
import Avatar from "boring-avatars";
import './Feed.css'

const Feed = () => {
  return (
    <div className="feed_container">
      <div className="feed_header">
        <div className='feed_header_first'>
        <Avatar className="feed_avatar"
          size={50}
          name="Manthan Godhasara"
          variant="bauhaus"
          colors={["#A3A948", "#EDB92E", "#F85931", "#CE1836", "#009989"]}
        />
        <p className='feed_username'>Manthan Godhasara</p>
        </div>
        <p className='feed_timestamp'>09/03/2022 17:45</p>
      </div>
      <div className='feed_title'>
        Why java is so tough?
      </div>
      <div className="feed_content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora accusamus quia minus beatae autem veniam voluptatum necessitatibus odit maxime! Sequi vel numquam fuga natus quo amet similique tempore incidunt sunt?
      </div>
    </div>
  );
}

export default Feed
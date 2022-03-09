import React from 'react'
import './Comment.css'

const Comment = () => {
  return (
    <div className="comment_container">
      <div className="comment_header">
        <div className="comment_username">Manthan Jaysukh Godhasara</div>
        <div className="comment_timestamp">09/03/2022 17:45</div>
      </div>
      <div className='comment'>
        Hi. It's very simple. Java is meant to be tough.
      </div>
    </div>
  );
}

export default Comment
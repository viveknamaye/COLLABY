import React from 'react'
import Feed from '../Feed/Feed';
import Search from '../Search/Search'
import './Feeds.css'

const Feeds = () => {
  return (
    <div className="feeds_container">
      <Search />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
    </div>
  );
}

export default Feeds
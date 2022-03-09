import React from 'react'
import './Search.css'
import {BiSearchAlt} from 'react-icons/bi'

const Search = () => {
  return (
    <div className='search'>
      <input type="text" className='search_bar' placeholder='Search here...'/>
    </div>
  )
}

export default Search
import React from 'react'
import Feeds from '../Feeds/Feeds';
import Navbar from '../Navbar/Navbar'
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className='dashboard_flex'>
      <Navbar />
      <Feeds/>
    </div>
  )
}

export default Dashboard
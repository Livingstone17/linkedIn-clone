import { Avatar } from '@mui/material'
import React from 'react'
import './sidebar.css'

function Sidebar() {

    const recentItem = (topic) => {
        return(
            <div className="sidebar-recentItem">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
        )
    };

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="" alt="" />
            <Avatar className='avatar'/>
            <h2 className='username'>Peter Samson</h2>
            <h4>peterson.omobolaji@gmail.com</h4>
        </div>
        <div className="sidebar-stats">
            <div className="sidebar-stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">2,500</p>
            </div>
            <div className="sidebar-stat">
                <p>Views on posts</p>
                <p className="sidebar_statNumber">2,500,000</p>
            </div>
        </div>

        <div className="sidebar-bottom">
            <p>Recent</p>
            {recentItem('Reactjs')}
            {recentItem('Software Engineering')}
            {recentItem('Blockchain Dapps')}
            {recentItem('Artificial Intelligence')}
            {recentItem('Frontend Development')}
        </div>

    </div>
  )
}

export default Sidebar
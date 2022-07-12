import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from '../Header-Options/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'


function Header() {
  return (
    <div className='header'>
        <div className="headerLeft">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="" />
            <div className="header__search">
              <SearchIcon />
              <input type="text" placeholder='search'/>
            </div>
        </div>
        <div className="headerRight">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={AddBoxIcon} title="Posts"/>
            <HeaderOption Icon={NotificationsNoneIcon} title="Notifications"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />

            <HeaderOption avatar="https://img.icons8.com/color/48/000000/linkedin.png" title="me"/>
        </div>
    </div>
  )
}

export default Header
import { Avatar } from '@mui/material'
import React from 'react'
import './header-options.css'

function HeaderOption({avatar,Icon,title}) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className="headerOption-icon" /> }
        {avatar && <Avatar className='headerOption-icon' src={avatar}/>}
        <h3 className='headerOption-title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
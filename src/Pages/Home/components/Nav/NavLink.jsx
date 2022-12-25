
import React from 'react'
import { Link } from './style'

function NavLink({navLink, navText, color}) {
  return (
    <div>
        <Link style={{color: color}} href={navLink} > {navText} </Link>
        
    </div>
  )
}

export default NavLink
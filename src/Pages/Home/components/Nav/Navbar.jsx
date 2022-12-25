
import React from 'react'
import NavItems from './NavItems'


import { NavbarWrapper, NavContainer, NavTitle, Event, LinksWrapper } from './style'

function Navbar() {
  return (
    <NavbarWrapper>
        <div className='container'>
            <NavContainer>
                <NavTitle>New <Event> event</Event> </NavTitle>
                <LinksWrapper>
                <NavItems />
                {/* {links.map((link, index) => {
                    return(
                        <NavLink navLink={link.navLink} navText={link.navText} key={index}/>
                    )
                })} */}
                </LinksWrapper>
            </NavContainer>
        </div>
    </NavbarWrapper>
  )
}

export default Navbar
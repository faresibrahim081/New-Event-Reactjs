
import React from 'react'
import { useLocation } from 'react-router-dom';
import theme from '../../../../design-system/Config';
import links from './Links'
import NavLink from './NavLink';

export default function NavItems() {
    const items = links();
    const route = useLocation();
  return (
    <>
        {items.map((link, index) => {
            return(
                <NavLink color={route.pathname === link.navLink ? theme.primary : theme.white} navLink={link.navLink} navText={link.navText} key={index}/>
            )
        }) }
    </>
  )
}

import {NavLink} from 'react-router-dom';
import React from 'react';
import withSizes from 'react-sizes'
import MobileNav from './Home/Mobile/Navbar'
import DesktopNav from './Home/Desktop/Navbar'

const NavBar = ({ isMobile }) => {
  let navbarClass
  if (isMobile) {
    return <MobileNav />
  } else {
    return <DesktopNav />
  }
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480,
})
export default withSizes(mapSizesToProps)(NavBar)

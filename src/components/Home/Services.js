import React from 'react'
import {NavLink} from 'react-router-dom';
import withSizes from 'react-sizes'
import ServicesContainer from './ServicesContainer'
import DesktopServicesContainer from './Desktop/ServicesContainer'
import MobileServicesContainer from './Mobile/MobilServicesContainer'

const Services = ({ isMobile }) => {
  let floatLeft = 'left', floatRight = 'right', className = 'services-container'
  if (isMobile) {
    floatLeft = 'none'
    floatRight = 'none'
    className = 'services-container-mobile'
  }
  const getServicesContainer = () => {
    if (isMobile) {
      return <MobileServicesContainer />
    } else {
      return <DesktopServicesContainer />
    }
  }
  return (
    <div className='services content'>
      <h3 style={{marginBottom: '0'}}>Our Services</h3>
      <hr style={{width: '40px', color: 'black', borderColor: 'black', backgroundColor: 'black', marginTop: '3px'}} />
      {getServicesContainer()}
    </div>
  )
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480,
})

export default withSizes(mapSizesToProps)(Services)

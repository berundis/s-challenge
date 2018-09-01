import React from 'react'
import withSizes from 'react-sizes'

import NavBar from '../NavBar'
import Search from './Search'
import CreateAccountInfo from './CreateAccountInfo'
import Services from './Services'
import Footer from './Footer'

const Home = ({ isMobile }) => {
  return(
    <div className='home'>
      <div className='content'>
        <NavBar />
        <Search />
        <CreateAccountInfo />
        <Services />
      </div>
      {isMobile ? null : <Footer />}
    </div>
  )
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480,
})
export default withSizes(mapSizesToProps)(Home)

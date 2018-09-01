import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import WebHosting from '../../../assets/web.png'
import VpsHosting from '../../../assets/server.png'
import CloudHosting from '../../../assets/cloud.png'
import Resellers from '../../../assets/resellers.png'

const MobilServicesContainer = () => {
  return (
    <div className='services-container-mobile'>

      <div className='service'>
        <Link to='/web-hosting'>
          <div className='image-title' >
            <img src={WebHosting} height='50' width='50'style={{float: 'left', marginTop: '10px', marginLeft: '30px'}}/>
            <h4 style={{float: 'right', marginRight: '30px'}}>Web Hosting &rarr;</h4>
          </div><br/><br/><br/>
          <p style={{textAlign: 'center'}}>
            Trust fund blog ramps roof party polaroid salvia.
            Knausgaard literally brooklyn, single-origin
            Austin meditation occupy seitan intelligentsia
          </p>
        </Link>
      </div><br/>

      <div className='service'>
        <Link to='/vps-servers'>
          <div className='image-title' >
            <img src={VpsHosting} height='50' width='50'style={{float: 'left', marginTop: '10px', marginLeft: '30px'}}/>
            <h4 style={{float: 'right', marginRight: '30px'}}>VPS Hosting &rarr;</h4>
          </div><br/><br/><br/>
          <p style={{textAlign: 'center'}}>
            Trust fund blog ramps roof party polaroid salvia.
            Knausgaard literally brooklyn, single-origin
            Austin meditation occupy seitan intelligentsia
          </p>
        </Link>
      </div><br/>

      <div className='service'>
        <Link to='/cloud-hosting'>
          <div className='image-title' >
            <img src={CloudHosting} height='50' width='50'style={{float: 'left', marginTop: '10px', marginLeft: '30px'}}/>
            <h4 style={{float: 'right', marginRight: '30px'}}>Cloud Hosting &rarr;</h4>
          </div><br/><br/><br/>
          <p style={{textAlign: 'center'}}>
            Trust fund blog ramps roof party polaroid salvia.
            Knausgaard literally brooklyn, single-origin
            Austin meditation occupy seitan intelligentsia
          </p>
        </Link>
      </div><br/>

      <div className='service'>
        <Link to='/resellers'>
          <div className='image-title' >
            <img src={Resellers} height='50' width='50'style={{float: 'left', marginTop: '10px', marginLeft: '30px'}}/>
            <h4 style={{float: 'right', marginRight: '30px'}}>Resellers &rarr;</h4>
          </div><br/><br/><br/>
          <p style={{textAlign: 'center'}}>
            Trust fund blog ramps roof party polaroid salvia.
            Knausgaard literally brooklyn, single-origin
            Austin meditation occupy seitan intelligentsia
          </p>
        </Link>
      </div><br/>

      <div style={{textAlign: 'center'}}>
        <p style={{color: '#B4A7ED'}}>Are you ready?</p>
        <p>create an account, or contact us</p>
        <div style={{marginTop: '3%'}}>
          <NavLink className="button2" to="/create-account">CREATE YOUR ACCOUNT</NavLink>
          <br/><br/>
          <NavLink className="button3" to="/contact">CONTACT US</NavLink>
        </div>
      </div>
    </div>
  )
}

export default MobilServicesContainer

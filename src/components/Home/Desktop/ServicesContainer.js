import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import WebHosting from '../../../assets/web.png'
import VpsHosting from '../../../assets/server.png'
import CloudHosting from '../../../assets/cloud.png'
import Resellers from '../../../assets/resellers.png'

const ServicesContainer = () => {
  return (
    <div>
      <div className='services-container'>
        <div className='service'>
          <Link to='/web-hosting'>
            <img src={WebHosting} height='120' width='95'style={{float: 'left', marginTop: '10px', marginLeft: '20px'}}/>
            <div style={{float: 'right', marginRight: '20px'}}>
              <h4>Web Hosting &rarr;</h4>
              <p>
                Trust fund blog ramps roof party polaroid salvia. <br/>
                Knausgaard literally brooklyn, single-origin<br/>
                Austin meditation occupy seitan intelligentsia
              </p>
            </div>
          </Link>
        </div>
        <div className='service'>
          <Link to='/vps-servers'>
            <img src={VpsHosting} height='120' width='95'style={{float: 'left', marginTop: '10px', marginLeft: '20px'}}/>
            <div style={{float: 'right', marginRight: '20px'}}>
              <h4>VPS Hosting &rarr;</h4>
              <p>
                Trust fund blog ramps roof party polaroid salvia. <br/>
                Knausgaard literally brooklyn, single-origin<br/>
                Austin meditation occupy seitan intelligentsia<br/>
              </p>
            </div>
          </Link>
        </div>
        <div className='service'>
          <Link to='/cloud-hosting'>
            <img src={CloudHosting} height='120' width='95'style={{float: 'left', marginTop: '10px', marginLeft: '20px'}}/>
            <div style={{float: 'right', marginRight: '20px'}}>
              <h4>Cloud Hosting &rarr;</h4>
              <p>
                Trust fund blog ramps roof party polaroid salvia. <br/>
                Knausgaard literally brooklyn, single-origin<br/>
                Austin meditation occupy seitan intelligentsia<br/>
              </p>
            </div>
          </Link>
        </div>
        <div className='service'>
          <Link to='/resellers'>
            <img src={Resellers} height='120' width='95'style={{float: 'left', marginTop: '10px', marginLeft: '20px'}}/>
            <div style={{float: 'right', marginRight: '20px'}}>
              <h4>Resellers &rarr;</h4>
              <p>
                Trust fund blog ramps roof party polaroid salvia. <br/>
                Knausgaard literally brooklyn, single-origin<br/>
                Austin meditation occupy seitan intelligentsia<br/>
              </p>
            </div>
          </Link>
        </div>

      </div>
      <div style={{float: 'left'}}>
        <p style={{color: '#B4A7ED', textAlign: 'left'}}>Are you ready?</p>
        <p>create an account, or contact us</p>
      </div>
      <div style={{float: 'right', marginTop: '3%'}}>
        <NavLink className="button2" to="/create-account">CREATE YOUR ACCOUNT</NavLink>
        <NavLink className="button3" to="/contact">CONTACT US</NavLink>
      </div>

    </div>

  )
}

export default ServicesContainer

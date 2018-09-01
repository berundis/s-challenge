import React from 'react'
import { Link } from 'react-router-dom'
import WebHosting from '../../assets/web.png'
import VpsHosting from '../../assets/server.png'
import CloudHosting from '../../assets/cloud.png'
import Resellers from '../../assets/resellers.png'

const ServicesContainer = (props) => {
  return (
    <div className={props.name}>
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
  )
}

export default ServicesContainer

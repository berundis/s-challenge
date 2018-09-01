import React from 'react'
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='grid-container'>
        <div className='footer-contact' style={{marginTop: '1.33em'}}>
          <i className="material-icons">local_phone</i>&nbsp;
          <a href="tel:1-800-555-555">
            +1 800 WEBSITE
          </a><br/><br/>
          <i className="material-icons">mail_outline</i>&nbsp;
          <a href="mailto:hello@mywebnow.com">
            hello@mywebnow.com
          </a><br/><br/>
          <i className="material-icons">place</i>&nbsp;
          <a href='https://goo.gl/maps/QE3p1j7LuRF2'>
            1 Main St<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Floor 6,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            New York, NY 10005
          </a><br/>
        </div>
        <div className='footer-company'>
          <h4>Company</h4>
          <NavLink activeClassName="active" to='/about-us'>About us</NavLink><br/><br/>
          <NavLink activeClassName="active" to="/news">News</NavLink><br/><br/>
          <NavLink activeClassName="active" to="/faq">FAQ</NavLink><br/><br/>
          <NavLink activeClassName="active" to="/contact">Contact us</NavLink>
        </div>
        <div className='footer-services'>
          <h4>Services</h4>
          <NavLink activeClassName="active" to="/web-hosting">Web Hosting</NavLink><br/><br/>
          <NavLink activeClassName="active" to="/cloud-hosting">Cloud Hosting</NavLink><br/><br/>
          <NavLink activeClassName="active" to="/vps-servers">VPS Servers</NavLink><br/><br/>
          <NavLink activeClassName="active" to="/domain-names">Domain Names</NavLink>
        </div>
        <div className='footer-others'>
          <h4>Others</h4>
          <NavLink activeClassName="active" to="/transfer-domains">Transfer Domains</NavLink><br/><br/>
          <NavLink activeClassName="active" to="/customer-portal">Customer Portal</NavLink><br/><br/>
          <NavLink activeClassName="active" to="/support-portal">Support Portal</NavLink><br/><br/>
          <NavLink activeClassName="active" to="/video-tutorials">Video Tutorials</NavLink>
        </div>
        <div className='footer-logos' style={{marginTop: '30px'}}>
          <a href='https://facebook.com'>
            <i className="fab fa-facebook-square"></i>
          </a><br/><br/>
          <a href='https://youtube.com'>
            <i className="fab fa-youtube"></i>
          </a><br/><br/>
          <a href='https://twitter.com'>
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import withSizes from 'react-sizes'

const Search = ({ isMobile }) => {
  let marginTopStyle = '90px',
      inputStyle = '20%',
      marginLeftStyle = '20px'
  if (isMobile) {
    marginTopStyle = '300px'
    inputStyle = '100%'
    marginLeftStyle = '0'
  }
  return(
    <div className='domain-search' style={{marginTop: `${marginTopStyle}`}}>
      <h1>Get a website in <br/>15 minutes <span style={{color: '#57DB9A'}}>or less</span></h1>
      <form>
        <input type='text' placeholder='Write your domain name here...' style={{width: `${inputStyle}`}}/>
        {isMobile ? <br/> : null}
        <input type="submit" value="Search" style={{width: `${inputStyle}`, marginLeft: `${marginLeftStyle}`}}/>
      </form>
      <div style={{marginTop: '80px'}}>
        <p style={{fontSize: '12px', color: 'rgb(55,55,55)'}}>LEARN HOW WE CAN ENHANCE YOUR BUSINESS</p>
        <button id='arrow-button'>&#8595;</button>
      </div>
    </div>
  )
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480,
})
export default withSizes(mapSizesToProps)(Search)

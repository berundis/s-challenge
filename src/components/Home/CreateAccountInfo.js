import React from 'react'
import {NavLink} from 'react-router-dom';

const CreateAccountInfo = () => {
  return (
    <div className='create-account-info'>
      <p>
        Lorem ipsum dolor amet williamsburg 8-bit cray letterpress umami shabby<br/>
        chic thundercats DIY literally chambray kickstarter live-edge. Listicle<br/>
        raclette aesthetic selvage humblebrag freegan 3 wolf moon ugh dreamcatcher<br/>
        shaman af drinking vinegar post-ironic.
      </p><br/>
      <NavLink className="button2" to="/create-account">CREATE YOUR ACCOUNT</NavLink>
    </div>
  )
}

export default CreateAccountInfo

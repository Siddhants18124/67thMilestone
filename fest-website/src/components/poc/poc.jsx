import React from 'react'
import './poc.css'
import poc1 from '../../assets/poc1.png'
import poc2 from '../../assets/poc2.png'

function Poc() {
  return (
    <div className='poccont'>
        <div className="eventcont">
            <h1>Event</h1>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
        </div>
        <div className="poc">
            <h1>Person of Contact</h1>
            <div className='pocimgcont'>
                <img srcSet={poc1} alt="" className='pocimg1'/>
                <img srcSet={poc2} alt="" className='pocimg1'/>
            </div>
        </div>
    </div>
  )
}

export default Poc
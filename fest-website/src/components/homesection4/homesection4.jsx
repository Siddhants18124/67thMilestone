import React from 'react';
import './homesection4.css';
import educatelogo from '../../assets/educate.png';

const Homesection4 = () => {
  return (
    <div className="section4container">
      <div className="educateinfo">
        <div className="imgcont">
          <img src={educatelogo} alt="" className='educatelogo' />
        </div>
        <div className='educatetext'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis asperiores molestiae nobis nesciunt rerum soluta? Fugiat deserunt necessitatibus </p>
        </div>
        <div className="btncont">
          <div className='btnholder'>
            <a className='btncontr' href="#">Contribute</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homesection4;

import React from 'react';
import './homesection3.css';
import Parallaximg from '../../assets/image.png';

const ParallaxComponent = () => {
  return (
    <div className='body'>
      <div className="parallax-container">
        <div className="parallax-content">
          <h1 className="parallax-heading">SOCIAL CAUSE</h1>
        </div>
        <div className="paraimgcont">
          <img srcSet={Parallaximg} alt="Parallax Image" className="parallaximg" />
        </div>
      </div>
    </div>
  );
};

export default ParallaxComponent;

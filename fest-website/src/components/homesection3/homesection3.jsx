import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './homesection3.css';
import Parallaximg from '../../assets/image.png';

const ParallaxComponent = () => {
  return (
    <div className="parallax-container">
      <div className="parallax-content">
        <h1 className="parallax-heading">SOCIAL CAUSE</h1>
      </div>
      <div className="paraimgcont">
        <img srcSet={Parallaximg} alt="Parallax Image" className="parallaximg" />
      </div>
    </div>
  );
};

export default ParallaxComponent;

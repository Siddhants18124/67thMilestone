import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white self-stretch flex w-full flex-row pt-2.5 pb-14 px-5 max-md:max-w-full bottom-0">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">67th Milestone Hero's Challenge</h1>
      </div>
      <div className="w-1/2 flex justify-between">
        <div className="mr-4">
          <h2 className="text-2xl font-bold mb-2">Support</h2>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Accommodation</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Social Media</h2>
          <ul>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaYoutube /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

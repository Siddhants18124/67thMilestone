import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import footer from "../assets/footer.png";

const Footer = () => {
  return (
    <div className="bg-white self-stretch flex left-0 flex-col sm:flex-row items-stretch w-full pt-2.5 pb-14 px-5 max-md:max-w-full  bottom-0">
      <div className="w-full sm:w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          67th Milestone Hero's Challenge
        </h1>
        <div className="border border-black p-4 max-w-sm mx-auto">
          <p>
            This is some random text inside a box. You can replace it with your
            own content.
          </p>
        </div>
      </div>

      <div className="w-full sm:w-1/2 flex flex-col sm:flex-row  mt-4 sm:mt-0">
        <div className="flex flex-col sm:flex-row items-stretch w-full sm:w-[56%] max-md:w-full max-md:ml-0">
          <div className="flex-grow flex-col max-md:mt-10 ml-0 sm:ml-20">
            <div className="text-black text-left text-3xl font-bold">
              Support
            </div>
            <div className="text-black text-sm text-left nt-bold leading-[180%] mt-2.5">
              <a href="#">FAQ's</a>
              <br />
              <a href="#">Contact Us</a>
              <br />
              <a href="#">Accommodation</a>
              <br />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 sm:mt-0">
          <h2 className="text-2xl font-bold mb-2">Social Media</h2>
          <ul className="flex">
            <li>
              <a href="#" className="flex flex-col items-center">
                <FaFacebook className="ml-5 text-xl mb-1" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/67thmilestone_heroschallenge?igsh=cWlxZmJiMXlndHht"
                className="flex flex-col items-center"
              >
                <FaInstagram className="ml-4 text-xl mb-1" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@67thmilestone35"
                className="flex flex-col items-center"
              >
                <FaYoutube className=" ml-4 text-xl mb-1" />
              </a>
            </li>
          </ul>
          <div>
            <img
              srcSet= { footer }
              alt="Small Image"
              className=" mb-1 w-36 h-18 mt-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

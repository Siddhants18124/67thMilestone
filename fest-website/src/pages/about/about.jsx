import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Aboutpage from "../../components/aboutpage/aboutpage";
import About2 from "../../components/about2/about2";
import About3 from "../../components/about3";
import About4 from "../../components/about4";
import About5 from "../../components/about5";

import "./about.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="main-bg overflow-hidden box-border">
      <Navbar black={true} />
      <Aboutpage />
      <About2 />
      <About3 />
      <About4 />
      <About5 />
      <About5 duration={5000} />
    </div>
  );
};

export default About;

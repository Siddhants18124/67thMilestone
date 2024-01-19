import logo from "../../assets/challenge.png";
import "./index.css";

import { useRef } from "react";

import CardSection from "../../components/Card";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import bgImg from "../../assets/bg.png";

const Challenge = () => {
  const parent = useRef();

  return (
    <div className="main-bg" style={{ backgroundImage: `url(${bgImg})` }}>
      <Navbar />
      <div className="event-type sp" ref={parent}>
        <div className="bg">
          <div className="overlay"></div>
          <img src={logo} alt="" className="img img1" />
        </div>
      </div>
      <CardSection />
      <Footer />
    </div>
  );
};

export default Challenge;

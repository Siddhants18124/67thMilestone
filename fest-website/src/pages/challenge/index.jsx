import logo from "../../assets/challenge.png";
import "./index.css";

import { useRef } from "react";

import CardSection from "../../components/Card";
import Navbar from "../../components/navbar";
import Scroller from "../../components/Scroller";
import Footer from "../../components/footer";

import bgImg from "../../assets/bg.png";
import sports from "../../assets/sports.png";

const Challenge = () => {
  const parent = useRef();

  return (
    <div className="main-bg" style={{ backgroundImage: `url(${bgImg})` }}>
      <Navbar />
      <div className="event-type sp" ref={parent}>
        <Scroller
          parent={parent}
          bgImg={sports}
          children={
            <>
              <img src={logo} alt="" className="img img1" />
              <CardSection />
            </>
          }
        />
      </div>

      <Footer />
    </div>
  );
};

export default Challenge;

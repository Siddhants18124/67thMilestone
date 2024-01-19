import logo from "../../assets/challenge.png";
import "./index.css";

import { useRef } from "react";

import CardSection from "../../components/Card";
import Navbar from "../../components/navbar";
import Scroller from "../../components/Scroller";
import Footer from "../../components/footer";

const Challenge = () => {
  const parent = useRef();

  return (
    <>
      <Navbar />
      <div className="event-type sp" ref={parent}>
        <Scroller
          parent={parent}
          children={
            <>
              <img src={logo} alt="" className="img img1" />
              <CardSection />
            </>
          }
        />
      </div>
      <Footer />
    </>
  );
};

export default Challenge;

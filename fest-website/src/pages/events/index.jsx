import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from "../../assets/67thlogo2.png";

import Navbar from "../../components/navbar";
import CardSection from "../../components/Card";
import Footer from "../../components/footer";
import "./index.css";
import Scroller from "../../components/Scroller";
import technicalImg from "../../assets/technical.jpeg";
import culturalImg from "../../assets/cultural.jpeg";
import managementImg from "../../assets/management.png";
const Events = () => {
  const cultural = useRef();
  const management = useRef();
  const technical = useRef();
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="events">
      <Navbar />
      <div className="event-type anim1">
        <div className="bg">
          <div className="overlay">
            <img className="img img1" src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="event-type" ref={cultural}>
        <Scroller
          bgImg={culturalImg}
          parent={cultural}
          children={
            <>
              <p className="type">Cultural Events</p>
              <CardSection />
            </>
          }
        />
      </div>
      <div className="event-type" ref={technical}>
        <Scroller
          bgImg={technicalImg}
          parent={technical}
          children={
            <>
              <p className="type">Technical Events</p>
              <CardSection />
            </>
          }
        />
      </div>
      <div className="event-type" ref={management}>
        <Scroller
          bgImg={managementImg}
          parent={management}
          children={
            <>
              <p className="type">Management Events</p>
              <CardSection />
            </>
          }
        />
      </div>
      <Footer />
    </div>
  );
};

const Parallax = ({ event, bgImg }) => {
  const bg = useRef();
  const element = useRef();
  useEffect(() => {
    gsap.to(bg.current, {
      scrollTrigger: {
        trigger: element.current,
        start: "top 50%",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
      backgroundPositionY: "50%",
    });
    gsap.to(bg.current, {
      scrollTrigger: {
        trigger: element.current,
        start: "bottom bottom",
        end: "+=30%",
        scrub: true,
        immediateRender: false,
      },
      backgroundPositionY: "0%",
    });
  }, []);
  return (
    <div className="event-type anim2" ref={element}>
      <div className="bg" ref={bg} style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="overlay">
          <p className="type">{event}</p>
        </div>
      </div>
    </div>
  );
};

export default Events;

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from "../../assets/67thlogo2.png";

import Navbar from "../../components/navbar";
import CardSection from "../../components/Card";
import Footer from "../../components/footer";
import "./index.css";

import technical from "../../assets/technical.jpeg";
import cultural from "../../assets/cultural.jpeg";
import management from "../../assets/management.png";
const Events = () => {
  const parent = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let domOffsetWidth = document.documentElement.offsetWidth;
    let items = document.querySelectorAll("*");
    items.forEach((item) => {
      if (item.offsetWidth > domOffsetWidth) {
        console.log(item);
      }
    });
  }, []);

  return (
    <div className="events">
      <Navbar />
      <div className="event-type anim1" ref={parent}>
        <div className="bg">
          <div className="overlay">
            <img className="img img1" src={logo} alt="" />
          </div>
        </div>
      </div>
      <Parallax event={"Cultural Events"} bgImg={cultural} />
      <CardSection />
      <Parallax event={"Technical Events"} bgImg={technical} />
      <CardSection />
      <Parallax event={"Management Events"} bgImg={management} />
      <CardSection />
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

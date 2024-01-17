import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import logo from "../../assets/67thlogo2.png";
import culture from "../../assets/cultural events.png";

import "./index.css";

const Events = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    });
    tl.to(".img1", { top: "0%", opacity: 0 }).to(".img2", {
      top: "50%",
      opacity: 1,
    });
    gsap.to(".bg", {
      scrollTrigger: {
        trigger: ".section2",
        scrub: true,
        immediateRender: false,
        start: "top 75%",
        end: "top top",
      },
      backgroundPositionY: "0%",
    });
  }, []);

  return (
    <>
      <div className="section1">
        <div className="bg">
          <div className="overlay"></div>
          <img src={logo} alt="" className="img1" />
          <img src={culture} alt="" className="img2" />
        </div>
      </div>
      <div className="section2">
        <Card image="https://picsum.photos/200" text="Cultural" />
        <Card image="https://picsum.photos/200" text="Cultural" />
        <Card image="https://picsum.photos/200" text="Cultural" />
        <Card image="https://picsum.photos/200" text="Cultural" />
        <Card image="https://picsum.photos/200" text="Cultural" />
        <Card image="https://picsum.photos/200" text="Cultural" />
        <Card image="https://picsum.photos/200" text="Cultural" />
        <Card image="https://picsum.photos/200" text="Cultural" />
      </div>
    </>
  );
};

const Card = ({ image, text }) => {
  return (
    <>
      <div className="card">
        <img src={image} alt={text} />
        <p>{text}</p>
      </div>
    </>
  );
};

export default Events;

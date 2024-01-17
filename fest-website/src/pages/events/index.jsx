import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import logo from "../../assets/67thlogo2.png";
import culture from "../../assets/cultural events.png";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./index.css";

const Events = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".anim1",
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
    <div className="events">
      <Navbar />
      <div className="event-type anim1">
        <div className="bg">
          <div className="overlay"></div>
          <img src={logo} alt="" className="img1" />
          <img src={culture} alt="" className="img2" />
        </div>
      </div>
      <div className="card-section section2">
        <Card image="https://picsum.photos/200" text="Cultural" />
        <Card image="https://picsum.photos/200" text="Cultural" />
        <Card image="https://picsum.photos/200" text="Cultural" />
        <Card image="https://picsum.photos/200" text="Cultural" />
        <Card image="https://picsum.photos/200" text="Cultural" />
        <Card image="https://picsum.photos/200" text="Cultural" />
        <Card image="https://picsum.photos/200" text="Cultural" />
        <Card image="https://picsum.photos/200" text="Cultural" />
      </div>
      <Parallax event={"Technical Events"} />
      <div className="card-section">
        <Card image="https://picsum.photos/200/200" text="Cultural" />
        <Card image="https://picsum.photos/200/200" text="Cultural" />
        <Card image="https://picsum.photos/200/200" text="Cultural" />
        <Card image="https://picsum.photos/200/200" text="Cultural" />
        <Card image="https://picsum.photos/200/200" text="Cultural" />
        <Card image="https://picsum.photos/200/200" text="Cultural" />
        <Card image="https://picsum.photos/200/200" text="Cultural" />
        <Card image="https://picsum.photos/200/200" text="Cultural" />
      </div>
      <Parallax event={"Management Events"} />
      <div className="card-section">
        <Card image="https://picsum.photos/200/200" text="Cultural" />
        <Card image="https://picsum.photos/200/200" text="Cultural" />
        <Card image="https://picsum.photos/200/200" text="Cultural" />
        <Card image="https://picsum.photos/200/200" text="Cultural" />
        <Card image="https://picsum.photos/200/200" text="Cultural" />
        <Card image="https://picsum.photos/200/200" text="Cultural" />
        <Card image="https://picsum.photos/200/200" text="Cultural" />
        <Card image="https://picsum.photos/200/200" text="Cultural" />
      </div>
      <Footer />
    </div>
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

const Parallax = ({ event }) => {
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
      <div className="bg" ref={bg}>
        <div className="overlay">
          <p className="type">{event}</p>
        </div>
      </div>
    </div>
  );
};

export default Events;

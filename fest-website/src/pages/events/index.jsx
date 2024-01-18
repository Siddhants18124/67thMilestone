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
  const bg = useRef();
  useEffect(() => {
    const items = Array.from(bg.current.children);
    items.splice(0, 1);
    console.log(items);
    items.forEach((item, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".anim1",
          start: `${(100 / items.length) * i}% top`,
          end: "+=100%",
          scrub: true,
          immediateRender: false,
        },
      });
      if (i !== items.length - 1) {
        tl.to(item, {
          top: item.className.includes("card-section") ? "-100%" : "0%",
          opacity: 0,
        }).to(items[i + 1], {
          top: items[i + 1].className.includes("card-section") ? "0%" : "50%",
          opacity: 1,
        });
      }
    });
  }, []);

  return (
    <div className="events">
      <Navbar />
      <div className="event-type anim1">
        <div ref={bg} className="bg">
          <div className="overlay"></div>
          <img src={logo} alt="" className="img1" />
          <img src={culture} alt="" className="img2" />
          <CardSection />
          <p className="type">Technical Events</p>
          <CardSection />
          <p className="type">Management Events</p>
          <CardSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Card = ({ image, text }) => {
  return (
    <>
      <div className="card">
        <div className="card-overlay"></div>
        <img src={image} alt={text} />
        <p>{text}</p>
      </div>
    </>
  );
};

const CardSection = () => {
  return (
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
  );
};

// const Parallax = ({ event }) => {
//   const bg = useRef();
//   const element = useRef();
//   useEffect(() => {
//     gsap.to(bg.current, {
//       scrollTrigger: {
//         trigger: element.current,
//         start: "top 50%",
//         end: "top top",
//         scrub: true,
//         immediateRender: false,
//       },
//       backgroundPositionY: "50%",
//     });
//     gsap.to(bg.current, {
//       scrollTrigger: {
//         trigger: element.current,
//         start: "bottom bottom",
//         end: "+=30%",
//         scrub: true,
//         immediateRender: false,
//       },
//       backgroundPositionY: "0%",
//     });
//   }, []);
//   return (
//     <div className="event-type anim2" ref={element}>
//       <div className="bg" ref={bg}>
//         <div className="overlay">
//           <p className="type">{event}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Events;

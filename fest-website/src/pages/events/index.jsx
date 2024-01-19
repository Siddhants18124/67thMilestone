import { useRef } from "react";

import logo from "../../assets/67thlogo2.png";
import culture from "../../assets/cultural events.png";

import Navbar from "../../components/navbar";
import CardSection from "../../components/Card";
import Scroller from "../../components/Scroller";
import Footer from "../../components/footer";
import "./index.css";

const Events = () => {
  const parent = useRef();

  return (
    <div className="events">
      <Navbar />
      <div className="event-type anim1" ref={parent}>
        <Scroller
          parent={parent}
          children={
            <>
              <img src={logo} alt="" className="img1" />
              <img src={culture} alt="" className="img2" />
              <CardSection />
              <p className="type">Technical Events</p>
              <CardSection />
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

export default Events;

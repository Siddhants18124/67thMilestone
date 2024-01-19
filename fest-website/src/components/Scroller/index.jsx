import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Scroller = ({ children, parent }) => {
  gsap.registerPlugin(ScrollTrigger);
  const bg = useRef();
  useEffect(() => {
    const items = Array.from(bg.current.children);
    items.splice(0, 1);
    let h = 0;
    items.forEach((item, i) => {
      let itemHeight =
        window.innerHeight > item.offsetHeight
          ? window.innerHeight
          : item.offsetHeight;
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent.current,
          start: `${h}px top`,
          end: `+=${itemHeight}px`,
          scrub: true,
          immediateRender: false,
        },
      });
      tl.to(item, {
        top: item.className.includes("card-section")
          ? `${-itemHeight}px`
          : "0%",
        opacity: item.className.includes("card-section") ? 1 : 0,
      });
      if (i !== items.length - 1) {
        tl.to(items[i + 1], {
          top: items[i + 1].className.includes("card-section") ? "0%" : "50%",
          opacity: 1,
        });
      }
      h += itemHeight;
    });
    parent.current.style.height = `${h}px`;
  }, []);
  return (
    <div className="bg" ref={bg}>
      <div className="overlay"></div>
      {children}
    </div>
  );
};

export default Scroller;

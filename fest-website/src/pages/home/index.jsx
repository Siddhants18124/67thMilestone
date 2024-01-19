import Navbar from "../../components/navbar";
import Homepage from "../../components/Homepage/homepage";
import Homesection2 from "../../components/homesection2/homesection2";
import Homesection4 from "../../components/homesection4/homesection4";
import ParallaxComponent from "../../components/homesection3/homesection3";
import Footer from "../../components/footer";

import { useEffect } from "react";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Homepage />
      <Homesection2 />
      <ParallaxComponent />
      <Homesection4 />
      <Footer />
    </>
  );
};

export default Home;

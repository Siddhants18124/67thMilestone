import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MilestonePage from "./pages/67Milestone";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import EventsPage from "./pages/Events";
import HerosChallenge from "./pages/HerosChallenge";
import EventDetails from "./pages/EventDetails";
import About from "./pages/About";
// import Sponsors from "./pages/Sponsor";

import AOS from "aos";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className="relative overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-[-2] bg-fixed bg-center bg-cover bg-bgGrad scroll-smooth"></div>
        <div className="absolute z-[-1] bg-[#00000080] top-0 left-0 w-full h-full"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events">
            <Route path="" element={<EventsPage />} />
            <Route path="67milestone" element={<MilestonePage />} />
            <Route path="heros-challenge" element={<HerosChallenge />} />
            <Route
              path="details/:eventType/:eventId"
              element={<EventDetails />}
            />
          </Route>
          <Route path="/about" element={<About />} />
          {/* <Route path="/sponsors" element={<Sponsors />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;

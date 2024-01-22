import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import EventsPage from "./pages/Events";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <>
      <main className="relative bg-top bg-bgGrad scroll-smooth ">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;

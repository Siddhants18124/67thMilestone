import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import SmoothScroll from "./components/SmoothScroll";
import EventsPage from "./pages/Events";

function App() {
  return (
    // <SmoothScroll>
    <main className="relative bg-top bg-bgGrad scroll-smooth -z-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
    // </SmoothScroll>
  );
}

export default App;

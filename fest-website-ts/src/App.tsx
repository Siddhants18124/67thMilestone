import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MilestonePage from "./pages/67Milestone";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import EventsPage from "./pages/Events";

function App() {
  return (
    <>
      <main className="relative bg-fixed bg-center bg-cover bg-bgGrad scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events">
            <Route path="" element={<EventsPage />} />
            <Route path="67milestone" element={<MilestonePage />} />
            <Route path="heros-challenge" element={"Hero's challenge"} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;

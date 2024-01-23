import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import EventsPage from "./pages/Events";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <>
      <main className="relative bg-fixed bg-center bg-cover bg-bgGrad scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events">
            <Route path="" element={<EventsPage />} />
            <Route path="67milestone" element={"67th Milestone"} />
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

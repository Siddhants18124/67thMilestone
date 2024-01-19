import Home from "./pages/home";
import About from "./pages/about/about";
import Sponsors from "./pages/sponsors";
import Events from "./pages/events";
import Challenge from "./pages/challenge";
import Register from "./pages/register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Sponsors />} path="/sponsors" />
        <Route element={<Events />} path="/events" />
        <Route element={<Challenge />} path="/challenge" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </Router>
  );
}

export default App;

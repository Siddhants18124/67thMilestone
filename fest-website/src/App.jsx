import Home from "./pages/home";
import About from "./pages/about/about";
import Sponsors from "./pages/sponsors";
import Poc from "./pages/poc";
import Events from "./pages/events";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Sponsors />} path="/sponsors" />
        <Route element={<Poc />} path="/contact" />
        <Route element={<Events />} path="/events" />
      </Routes>
    </Router>
  );
}

export default App;

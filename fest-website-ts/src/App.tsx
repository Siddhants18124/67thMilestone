import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative bg-top bg-bgGrad">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

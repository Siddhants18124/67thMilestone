import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Suspense, lazy } from "react";

const MilestonePage = lazy(() => import("./pages/67Milestone"));
const HomePage = lazy(() => import("./pages/Home"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));
const EventsPage = lazy(() => import("./pages/Events"));
const HerosChallenge = lazy(() => import("./pages/HerosChallenge"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const About = lazy(() => import("./pages/About"));
// import AOS from "aos";
import { useEffect } from "react";
import LoadingPage from "./pages/Loading";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // AOS.init();
  }, []);
  return (
    <>
      <main className="relative overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-[-2] bg-fixed bg-center bg-cover bg-bgGrad scroll-smooth"></div>
        <div className="absolute z-[-1] bg-[#00000080] top-0 left-0 w-full h-full"></div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingPage />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route path="/events">
            <Route
              path=""
              element={
                <Suspense fallback={<LoadingPage />}>
                  <EventsPage />
                </Suspense>
              }
            />
            <Route
              path="67milestone"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <MilestonePage />
                </Suspense>
              }
            />
            <Route
              path="heros-challenge"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <HerosChallenge />
                </Suspense>
              }
            />
            <Route
              path="details/:eventType/:eventId"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <EventDetails />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/about"
            element={
              <Suspense fallback={<LoadingPage />}>
                <About />
              </Suspense>
            }
          />
          {/* <Route path="/sponsors" element={<Sponsors />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;

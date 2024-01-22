import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingPage from "./pages/Loading";
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Suspense fallback={<LoadingPage />}>
      <App />
    </Suspense>
  </BrowserRouter>,
);

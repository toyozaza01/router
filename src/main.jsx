import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Carous from "./components/carousels.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavBar />
    <Carous/>
    {/* <App /> */}
    <Footer></Footer>
  </StrictMode>
);

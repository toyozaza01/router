import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import Welcome from "./pages/Welcome.jsx";
import Infomation from "./pages/Infomation.jsx";
import Ativities from "./pages/Ativities.jsx";
import Education from "./pages/Education.jsx";
import Contact from "./pages/Contact.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/infomation" element={<Infomation />} />
        <Route path="/activities" element={<Ativities />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

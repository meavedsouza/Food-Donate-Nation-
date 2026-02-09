import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Donate from "./pages/Donate";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NGOs from "./pages/NGOs";
import Success from "./pages/Success";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ngos" element={<NGOs />} />
        <Route path="/success" element={<Success />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
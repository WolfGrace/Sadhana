import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import RIC from "./pages/RIC";
import ITE from "./pages/ITE";
import IIC from "./pages/IIC";
import CIC from "./pages/CIC";
import BTE from "./pages/BTE";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SpeechTherapy from "./pages/SpeechTherapy";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/speech-therapy" element={<SpeechTherapy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/ric" element={<RIC/>}/>
<Route path="/ite" element={<ITE />} />
<Route path="/iic" element={<IIC />} />
<Route path="/cic" element={<CIC />} />
<Route path="/bte" element={<BTE />} />

        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;

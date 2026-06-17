import { NavLink } from "react-router-dom";
import { FaFacebook, FaGoogle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import "../styles/footer.css";
import logo from "../assets/logo.jpeg"; // import your logo image

export default function Footer() {
  return (
    <footer className="footer-container">s
      <div className="footer-content">
        
        {/* Logo */}
        <div className="footer-column">
          <img
            src={logo}
            alt="Sadhana Speech and Hearing Center"
            className="footer-logo"
          />
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-ul">
            <li><NavLink className="footer-link" to="/" end>HOME</NavLink></li>
            <li><NavLink className="footer-link" to="/about">ABOUT US</NavLink></li>
            <li><NavLink className="footer-link" to="/services">SERVICES</NavLink></li>
            <li><NavLink className="footer-link" to="/products">PRODUCTS</NavLink></li>
            <li><NavLink className="footer-link" to="/speech-therapy">SPEECH THERAPY</NavLink></li>
            <li><NavLink className="footer-link" to="/faq">FAQ</NavLink></li>
            <li><NavLink className="footer-link" to="/contact">CONTACT US</NavLink></li>
          </ul>
        </div>

        {/* Guides */}
        <div className="footer-column">
          <h3 className="footer-heading">Guides</h3>
          <p className="footer-text">Buying Hearing Aids From Us</p>
          <p className="footer-text">Caring For Your Hearing Aid</p>
          <p className="footer-text">Choosing the Right Hearing Aid</p>
        </div>

        {/* Social + Contact */}
        <div className="footer-column">
          <h3 className="footer-heading">Follow Us</h3>

          <div className="footer-social">
            <a href="https://www.facebook.com/sadhana.centre.dhn/about" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="footer-icon" size={28} />
            </a>
            <a href="https://www.google.com/maps/dir/27.705344,84.4131412/aawaz+speech+and+hearing+clinic" >
              <FaGoogle className="footer-icon" size={28} />
            </a>
            <a href="https://wa.me/9779845192771" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="footer-icon" size={28} />
            </a>
          </div>

          <h3 className="footer-heading contact-title">Contact</h3>

          <p className="footer-contact">
            <HiOutlineLocationMarker size={18} /> Dhading, Hospital Line
          </p>

          <p className="footer-contact">
            <FaPhoneAlt size={18} /> +977 9864779009
          </p>

          <p className="footer-contact">
            <HiOutlineMail size={18} /> sadhanahearing@gmail.com
          </p>
        </div>
      </div>

      <div className="footer-copyright">
        © Sadhana Hearing and Speech Care Center {new Date().getFullYear()}
      </div>
    </footer>
  );
}

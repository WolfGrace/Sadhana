import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/RIC.css"; // Reuse same professional CSS

/* ===== IMPORT LOCAL IMAGES ===== */
import ITEImg from "../assets/product/ITE.png";
import RICImg from "../assets/product/RIC.png";
import IICImg from "../assets/product/IIC.png";
import CICImg from "../assets/product/CIC.png";
import BTEImg from "../assets/product/BTE.png";
import HelpImg from "../assets/product/help.jfif"; // make sure you have this

import { Link } from "react-router-dom"; // for navigation

const ITE = () => {
  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <h1>Our Products</h1>
      </header>

      {/* Product Section */}
      <section className="product-section">
        <div className="product-images">
          <img src={ITEImg} alt="ITE Hearing Aid" />
        </div>

        <div className="product-info">
          <h2>In-The-Ear (ITE)</h2>

          <ul>
            <li>Custom-made to fit inside the ear</li>
            <li>Easy to handle and operate</li>
            <li>Powerful sound amplification</li>
            <li>Suitable for mild to severe hearing loss</li>
          </ul>

          <button className="primary-btn">
            Essential range <br></br>RS 10,000 - RS 35,000
          </button>
          <button className="primary-btn">
            Mid range <br></br>RS 35,000 - RS 1,20,000
          </button>
          <button className="primary-btn">
            Premium and Rechargeable <br></br>RS 1,20,000 - RS 8,00,000
          </button>
        </div>
      </section>

      {/* Related Products */}
      <section className="related-section">
        <h3>Related Products</h3>

        <div className="related-grid">
          <Link to="/ric" className="card">
            <img src={RICImg} alt="RIC" />
            <span>Receiver-In-Canal (RIC)</span>
          </Link>

          <Link to="/iic" className="card">
            <img src={IICImg} alt="IIC" />
            <span>Invisible-In-Canal (IIC)</span>
          </Link>

          <Link to="/cic" className="card">
            <img src={CICImg} alt="CIC" />
            <span>Completely-In-Canal (CIC)</span>
          </Link>

          <Link to="/bte" className="card">
            <img src={BTEImg} alt="BTE" />
            <span>Behind-The-Ear (BTE)</span>
          </Link>
        </div>
      </section>

      {/* Help Section */}
      <section className="help-section">
        <div>
          <h3>Need Help?</h3>
          <p>Call us</p>
          <span className="phone">📞 981-3379393</span>
          <NavLink to="/contact" className="btn-primary">
            Contact Us
          </NavLink>
        </div>

        <img src={HelpImg} alt="Hearing Aid Support" className="help-image" />
      </section>
    </div>
  );
};

export default ITE;

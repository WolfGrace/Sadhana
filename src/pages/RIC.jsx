import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/RIC.css";

/* ===== IMPORT LOCAL IMAGES ===== */
import RICImg from "../assets/product/RIC.png";
import ITEImg from "../assets/product/ITE.png";
import IICImg from "../assets/product/IIC.png";
import CICImg from "../assets/product/CIC.png";
import BTEImg from "../assets/product/BTE.png";
import HelpImg from "../assets/product/help.jfif"; // make sure this exists

const RIC = () => {
  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <h1>Our Products</h1>
      </header>

      {/* Product Section */}
      <section className="product-section">
        <div className="product-images">
          <img src={RICImg} alt="RIC Hearing Aid" />
        </div>

        <div className="product-info">
          <h2>Receiver-In-Canal (RIC)</h2>

          <ul>
            <li>Less visibility due to slim tube</li>
            <li>Clear sound and comfort</li>
            <li>Easy volume adjustment</li>
            <li>Battery lasts up to 5 days</li>
          </ul>

          <button className="primary-btn">
            Essential range <br></br>RS 18,000 - RS 50,000
          </button>
          <button className="primary-btn">
            Mid range <br></br>RS 50,000 - RS 1,20,000
          </button>
          <button className="primary-btn">
            Premium and Rechargeable <br></br>RS 70,000 - RS 8,00,000
          </button>
        </div>
      </section>

      {/* Related Products */}
      <section className="related-section">
        <h3>Related Products</h3>

        <div className="related-grid">
          <NavLink to="/ite" className="card">
            <img src={ITEImg} alt="ITE" />
            <span>In-The-Ear (ITE)</span>
          </NavLink>

          <NavLink to="/iic" className="card">
            <img src={IICImg} alt="IIC" />
            <span>Invisible-In-Canal (IIC)</span>
          </NavLink>

          <NavLink to="/cic" className="card">
            <img src={CICImg} alt="CIC" />
            <span>Completely-In-Canal (CIC)</span>
          </NavLink>

          <NavLink to="/bte" className="card">
            <img src={BTEImg} alt="BTE" />
            <span>Behind-The-Ear (BTE)</span>
          </NavLink>
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

export default RIC;

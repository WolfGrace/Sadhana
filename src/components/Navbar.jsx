import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`nav-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* LOGO */}
        <div className="nav-left">
          <NavLink to="/" className="logo-container">
            <img src={logo} alt="Aawaz Logo" className="nav-logo" />
            <div className="brand-text">
              Sadhana Hearing & Speech Care Center
            </div>
          </NavLink>
        </div>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* SIDE NAV */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/speech-therapy">Speech Therapy</NavLink></li>
          <li><NavLink to="/faq">FAQ</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>

          <li className="nav-cta">
            <NavLink to="/appointment" className="appointment-btn">
              Book Appointment
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

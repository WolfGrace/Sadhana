import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/products.css";

// Import product images
import BTEImg from "../assets/product/BTE.png";
import CICImg from "../assets/product/CIC.png";
import IICImg from "../assets/product/IIC.png";
import ITEImg from "../assets/product/ITE.png";
import RICImg from "../assets/product/RIC.png";

// Import contact/help image
import contactImg from "../assets/service/contact.jpg";

const products = [
  {
    id: 1,
    name: "Receiver-In-Canal (RIC)",
    img: RICImg,
    route: "/ric",
  },
  {
    id: 2,
    name: "In-The-Ear (ITE)",
    img: ITEImg,
    route: "/ite",
  },
  {
    id: 3,
    name: "Invisible-In-Canal (IIC)",
    img: IICImg,
    route: "/iic",
  },
  {
    id: 4,
    name: "Completely-In-Canal (CIC)",
    img: CICImg,
    route: "/cic",
  },
  {
    id: 5,
    name: "Behind-The-Ear (BTE)",
    img: BTEImg,
    route: "/bte",
  },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <div className="products-container">

      <h1 className="products-title">Hearing Aids Products</h1>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-img-wrapper">
              <img src={item.img} alt={item.name} />
            </div>

            <h3>{item.name}</h3>

            <button
              className="view-btn"
              onClick={() => navigate(item.route)}
            >
              View
            </button>
          </div>
        ))}
      </div>

      {/* BOTTOM SECTION */}
      <div className="help-section">
        <div className="help-text">
          <h2>Need Help?</h2>
          <p>Call us today and our hearing experts will assist you.</p>
          <h3>📞 9864779009</h3>

          <a href="/contact" className="contact-btn">
            Contact Us
          </a>
        </div>

        <img src={contactImg} alt="help" className="help-img" />
      </div>

    </div>
  );
}

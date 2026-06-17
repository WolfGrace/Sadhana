import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/home.css";

/* ===== IMPORT LOCAL IMAGES ===== */

// Product images
import RIC from "../assets/home/RIC.png";
import ITE from "../assets/home/ITE.png";
import IIC from "../assets/home/IIC.png";
import CIC from "../assets/home/CIC.png";
import BTE from "../assets/home/BTE.png";

// Brand logos
import Brand1 from "../assets/home/brand1.jpg";
import Brand2 from "../assets/home/brand2.jpg";
import Brand3 from "../assets/home/brand3.jpg";
import Brand4 from "../assets/home/brand4.jpg";
import Brand5 from "../assets/home/brand5.jpg";
import Brand6 from "../assets/home/brand6.jpg";

// Hero image
import HeroImg from "../assets/home/home.jpg";

// Service images
import HearingTestImg from "../assets/home/hearingtest.jpg";
import SpeechTherapyImg from "../assets/home/SpeechTherapy.jfif";
import DigitalAidImg from "../assets/home/digitalhearingaids.jpg";

/* ===== SWIPER ===== */
/* ===== SWIPER ===== */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";


const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".fade-in, .slide-left, .slide-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const testimonialData = [
    {
      text: "Amazing service! My father can hear clearly again.",
      author: "Ram chandra Poudel",
    },
    {
      text: "Professional staff and excellent care.",                          
      author: "Sita bhandari",
    },
    {
      text: "Highly recommended hearing care center in Nepal.",
      author: "Akash gupta",
    },
  ];

  return (
    <main className="home">
      {/* ================= HERO ================= */}
      <section className="hero-static">
        <div className="hero-content container">
          <div className="hero-left fade-in">
            <span className="hero-tag">WELCOME TO SADHANA</span>
            <h1>Leading Hearing Aid Center in Nepal</h1>
            <p>
              Sadhana Hearing & Speech Care Center provides advanced hearing and
              speech solutions designed to help you hear better and live better.
            </p>

            <div className="hero-actions">
              <NavLink to="/products" className="btn-primary">
                View Products
              </NavLink>
              <NavLink to="/appointment" className="btn-outline">
                Book Appointment
              </NavLink>
            </div>
          </div>

          <div
            style={{
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={HeroImg}
              alt="Hearing Aid"
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                transform: "translateY(50px)",
                opacity: 0,
                animation: "slideFadeIn 1s ease-out forwards",
              }}
            />
            <style>
              {`
      @keyframes slideFadeIn {
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `}
            </style>
          </div>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="section section-light fade-in">
        <div className="container">
          <h2>Welcome to Sadhana  Hearing & Speech Care Center</h2>
          <p>
            Your hearing and speech health are our highest priority. We provide
            personalized care using modern technology and expert audiologists.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="section section-grey">
        <div className="container">
          <h2 className="slide-right">Top Hearing Aid Types</h2>

          <div className="product-logos fade-in">
            {[RIC, ITE, IIC, CIC, BTE].map((img, i) => {
              const names = [
                "Receiver-In-Canal (RIC)",
                "In-The-Ear (ITE)",
                "Invisible-In-Canal (IIC)",
                "Completely-In-Canal (CIC)",
                "Behind-The-Ear (BTE)",
              ];
              return (
                <article className="product-card" key={names[i]}>
                  <img src={img} alt={names[i]} />
                  <h4>{names[i]}</h4>
                  <NavLink to="/products" className="view-btn">
                    View Details
                  </NavLink>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section section-white">
        <div className="container">
          <h2 className="slide-left">Our Key Services</h2>

          <div className="service-grid fade-in">
            <ServiceCard
              title="Hearing Test"
              desc="Comprehensive diagnostic hearing evaluations."
              img={HearingTestImg}
            />
            <ServiceCard
              title="Speech Therapy"
              desc="Personalized speech & language therapy."
              img={SpeechTherapyImg}
            />
            <ServiceCard
              title="Digital Hearing Aids"
              desc="Latest digital hearing aids from top brands."
              img={DigitalAidImg}
            />
          </div>
        </div>
      </section>

      {/* ================= BRANDS ================= */}
      <section className="section section-grey">
        <div className="container">
          <h2 className="slide-right">Trusted Hearing Aid Brands</h2>

          <div className="brand-logos fade-in">
            {[Brand1, Brand2, Brand3, Brand4, Brand5, Brand6].map(
              (brand, index) => (
                <img key={index} src={brand} alt={`Brand ${index + 1}`} />
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL SLIDER ================= */}
      <section className="section section-cream">
  <div className="container">
    <h2 className="fade-in">What Our Patients Say</h2>

    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={32}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      style={{ "--swiper-navigation-color": "#FF6600", "--swiper-pagination-color": "#FF6600" }} // Orange color
    >
      {testimonialData.map((item, index) => (
        <SwiperSlide key={index}>
          <blockquote
            style={{
              background: "#fff",
              padding: "32px",
              borderRadius: "16px",
              borderLeft: "5px solid #FF6600", // Orange border
              boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
              transform: "translateY(30px) scale(0.95)",
              opacity: 0,
              animation: "fadeSlideIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
              maxWidth: "720px",
              margin: "auto",
            }}
          >
            <p style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "#333", marginBottom: "18px" }}>
              “{item.text}”
            </p>
            <footer style={{ fontWeight: 700, color: "#FF6600", fontSize: "1rem" }}>
              — {item.author}
            </footer>
          </blockquote>
        </SwiperSlide>
      ))}
    </Swiper>

    <style>
      {`
        @keyframes fadeSlideIn {
          0% { transform: translateY(30px) scale(0.95); opacity: 0; }
          60% { transform: translateY(-10px) scale(1.02); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}
    </style>
  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="section section-light fade-in">
        <div className="container">
          <h2>Need Help With Your Hearing?</h2>
          <p>Contact us today for expert evaluation and personalized care.</p>

          <NavLink to="/contact" className="btn-primary">
            Contact Us
          </NavLink>
        </div>
      </section>
    </main>
  );
};

const ServiceCard = ({ title, desc, img }) => (
  <article className="service-card">
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <p>{desc}</p>
  </article>
);

export default Home;

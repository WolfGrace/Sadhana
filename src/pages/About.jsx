import React, { useEffect } from "react";
import "../styles/about.css";

// Brand Images
import brand1 from "../assets/brand/brand1.jpg";
import brand2 from "../assets/brand/brand2.jpg";
import brand3 from "../assets/brand/brand3.jpg";
import brand4 from "../assets/brand/brand4.jpg";
import brand5 from "../assets/brand/brand5.jpg";
import brand6 from "../assets/brand/brand6.jpg";

// Contact Image
import contactImg from "../assets/service/contact.jpg";

// About Section Images
import whoweareImg from "../assets/about/whoweare.jpg";
import hearingAidsImg from "../assets/about/hearingaids.jpg";
import hearingAssessmentsImg from "../assets/about/HearingAssessments.webp";
import speechTherapyImg from "../assets/about/SpeechTherapy.jfif";

export default function About() {
  // SCROLL REVEAL ANIMATION
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".fade-in, .fade-up, .fade-down, .slide-left, .slide-right, .slide-up"
    );

    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="about-page">
      {/* HERO BANNER */}
      <section className="hero-banner fade-down">
        <div className="hero-text">
          <h1>Sadhana Hearing & Speech Care Center</h1>
          <p>
            Your trusted partner for hearing, speech & communication wellness.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section-row slide-left">
        <div className="image-box zoom-hover">
          <img src={whoweareImg} alt="Who We Are" />
        </div>

        <div className="text-box">
          <h2>Who We Are</h2>
          <p>
            Welcome to Sadhana Hearing and Speech Center, Dhading, Hospital Line –
            your trusted partner in empowering communication and improving the
            quality of life for those with hearing and speech challenges. At
            Sadhana, we believe that everyone deserves the right to clear,
            confident communication and accessible support, regardless of
            background or circumstance.
          </p>
          <p>
            Our mission is clear: to provide high-quality hearing and speech
            services and products, supported by the latest technology and a
            compassionate team dedicated to each individual’s unique needs. From
            state-of-the-art hearing aids to personalized therapy services, our
            solutions are designed to cater to the diverse needs of individuals
            and families across Chitwan and beyond.
          </p>
          <p>
            We prioritize excellence and accessibility in our services, working
            closely with leading professionals and suppliers to ensure premium
            quality at affordable prices. Our center is committed not only to
            enhancing personal well-being but also to supporting the broader
            community’s understanding and acceptance of hearing and speech
            challenges.
          </p>
          <p>
            At Sadhana Hearing and Speech Care Center, we’re more than just a service
            provider; we’re part of a movement toward a future where everyone
            can be heard and understood. Thank you for choosing Sadhana as your
            partner in communication and connection. Together, we’re breaking
            barriers and building bridges toward a more inclusive world.
          </p>
        </div>
      </section>

      {/* OUR SERVICES OVERVIEW */}
      <section className="wide-section fade-in">
        <h2>What We Provide</h2>
        <p className="center-text">
          A complete range of hearing and speech solutions—from diagnosis to
          rehabilitation.
        </p>

        <div className="service-grid">
          <div className="service-card fade-up">
            <img src={hearingAssessmentsImg} alt="Hearing Assessments" />
            <h4>Hearing Assessments</h4>
            <p>PTA, Tympanometry, OAE, ABR & more advanced tests.</p>
          </div>

          <div className="service-card fade-up">
            <img src={speechTherapyImg} alt="Speech Therapy" />
            <h4>Speech Therapy</h4>
            <p>
              For children & adults with speech, fluency & language disorders.
            </p>
          </div>

          <div className="service-card fade-up">
            <img src={hearingAidsImg} alt="Hearing Aids" />
            <h4>Hearing Aids</h4>
            <p>Digital, rechargeable & Bluetooth-enabled solutions.</p>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="process-section fade-in">
        <h2>Our Care Journey</h2>

        <div className="process-steps">
          <div className="step slide-left">
            <span>01</span>
            <h4>Book Consultation</h4>
            <p>Schedule your appointment at your convenience.</p>
          </div>

          <div className="step slide-up">
            <span>02</span>
            <h4>Assessment & Diagnosis</h4>
            <p>Accurate tests using modern equipment.</p>
          </div>

          <div className="step slide-right">
            <span>03</span>
            <h4>Begin Treatment</h4>
            <p>Personalized therapy & rehabilitation plans.</p>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="brands-section fade-in">
        <h2>Trusted Hearing Aid Partners</h2>

        <div className="brand-logos slide-left">
          <img src={brand1} alt="Brand 1" />
          <img src={brand2} alt="Brand 2" />
          <img src={brand3} alt="Brand 3" />
          <img src={brand4} alt="Brand 4" />
          <img src={brand5} alt="Brand 5" />
          <img src={brand6} alt="Brand 6" />
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="contact-strip slide-up">
        <div className="contact-text">
          <h2>Need Assistance?</h2>
          <p className="phone">9864779009</p>
          <p>
            Our experts are ready to guide you on hearing & speech solutions.
          </p>
        </div>

        <div className="contact-image zoom-hover">
          <img src={contactImg} alt="hearing aid" />
        </div>
      </section>
    </div>
  );
}
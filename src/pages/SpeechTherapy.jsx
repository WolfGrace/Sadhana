import React from "react";
import { motion } from "framer-motion";
import "../styles/SpeechTherapy.css";

/* ===== IMPORT LOCAL IMAGES ===== */
import SpeechImg from "../assets/speechtherapy/speech.jpeg";
import SpeechDevImg from "../assets/speechtherapy/speechdev.webp";

export default function SpeechTherapy() {
  return (
    <div className="speech-page">

      {/* Top Banner */}
      <motion.div
        className="speech-banner"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Speech Therapy</h1>
      </motion.div>

      {/* Intro Section */}
      <section className="speech-intro">
        <motion.img
          src={SpeechImg}       // <-- local image
          alt="Speech Therapy"
          className="speech-img"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="speech-intro-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Speech Therapy</h2>
          <p>
            Speech and language therapy focuses on improving verbal communication,
            speech clarity, language development, and social communication skills.
            It helps children and adults overcome speech difficulties such as
            stuttering, delayed speech, articulation issues, and more.
          </p>
        </motion.div>
      </section>

      {/* Info Section */}
      <section className="speech-card">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Status of Speech Therapy in Nepal
        </motion.h2>

        <h4>Speech and Language Development</h4>

        <div className="speech-card-content">
          <motion.img
            src={SpeechDevImg}   // <-- local image
            alt="Therapy Session"
            className="speech-card-img"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.4 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            There is an observed need for the recognition of speech therapy services in Nepal.
            Speech and language therapy helps individuals of all ages improve communication skills
            and overcome various speech-related challenges. With increasing awareness,
            more families are seeking early intervention services.
            <br /><br />
            The growing presence of skilled therapists and expanding rehabilitation centers provides
            greater access to support. Early diagnosis and therapy can significantly improve speech,
            language, and social development.
          </motion.p>
        </div>

        <h4>Speech and Language Therapy Is For:</h4>

        <ul className="hover-list">
          {[
            "Autism", "Articulation Disorder", "Misarticulation", "Language Delay",
            "Stuttering", "Voice Problems", "Cleft Palate Issues", "Hearing Loss Speech Delay",
            "Neurological Disorders", "Down Syndrome"
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 10, scale: 1.05 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="speech-contact">
        <motion.div
          className="contact-box"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h4>Need Help?</h4>
          <h2>Call Us</h2>
          <p className="phone">📞 9864779009</p>
          <p>If you need any hearing or speech-related support, feel free to contact us.</p>

          <motion.a
            href="/contact"
            className="contact-btn"
            whileHover={{ scale: 1.1 }}
          >
            CONTACT US
          </motion.a>
        </motion.div>

        <motion.img
          src={SpeechDevImg}    // <-- local image
          alt="Hearing Aid"
          className="contact-img"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.4 }}
        />
      </section>
    </div>
  );
}

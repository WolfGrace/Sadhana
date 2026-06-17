import React, { useEffect, useRef } from "react";
import "../styles/services.css";

// Import images from assets
import PTAImg from "../assets/service/PTA.jpg";
import TympanometryImg from "../assets/service/Tympanometry.jpg";
import HearingEvaluationImg from "../assets/service/comprenshive.jpg";
import SpeechTherapyImg from "../assets/service/speech.jpg";
import TinnitusImg from "../assets/service/tinnitus.jpg";
import HearingAidImg from "../assets/service/hearingaids.jpg";
import OAEImg from "../assets/service/oae.png";
import ABRImg from "../assets/service/ABR.jpg";
import ContactImg from "../assets/service/contact.jpg"; // help section image

export default function Services() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.3 }
    );

    sectionsRef.current.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const attachRef = (el, index) => {
    sectionsRef.current[index] = el;
  };

  return (
    <div className="services-page">
      {/* HEADER BANNER */}
      <div className="services-banner fade-down">
        <h1>Our Services</h1>
      </div>

      {/* INTRO */}
      <div className="services-intro fade-up">
        <p>
          At Sadhana Hearing & Speech Care Center, we provide comprehensive
          diagnostic, therapeutic, and rehabilitative services using advanced
          technology and personalized care for all age groups.
        </p>
      </div>

      {/* SERVICES LIST */}
      <div className="services-list">
        {/* SERVICE 1 */}
        <div
          className="service-item slide-right hidden"
          ref={(el) => attachRef(el, 0)}
        >
          <img src={PTAImg} alt="PTA Hearing Test" />
          <div className="service-content">
            <h2>PTA Test (Diagnostic Audiometer)</h2>
            <p>
              The Pure Tone Audiometry (PTA) test is a key diagnostic tool used
              at Sadhana Hearing and Speech Care Center to assess hearing sensitivity.
              This test helps us determine the softest sounds you can hear at
              various pitches. Our experienced audiologists use advanced
              diagnostic audiometers to ensure accurate results, which guide us
              in crafting personalized treatment plans to meet your auditory
              needs.
            </p>
          </div>
        </div>

        {/* SERVICE 2 */}
        <div
          className="service-item reverse slide-left hidden"
          ref={(el) => attachRef(el, 1)}
        >
          <div className="service-content">
            <h2>Tympanometry & Stapedius Reflex Test</h2>
            <p>
              Tympanometry and Stapedius Reflex testing are essential diagnostic
              tools used at Sadhana Hearing and Speech Care Center to assess middle ear
              function. Tympanometry measures the movement of the eardrum in
              response to changes in air pressure, while the Stapedius Reflex
              Test evaluates the reflexes of the middle ear muscles. These tests
              help in diagnosing various middle ear conditions and provide a
              comprehensive understanding of auditory health.
            </p>
            <p>
              Our audiologists use state-of-the-art equipment to conduct these
              tests, ensuring precise results that aid in tailoring the best
              treatment options for our patients. The testing is non-invasive,
              quick, and suitable for all age groups.
            </p>
          </div>
          <img src={TympanometryImg} alt="Tympanometry Test" />
        </div>

        {/* SERVICE 3 */}
        <div
          className="service-item slide-right hidden"
          ref={(el) => attachRef(el, 2)}
        >
          <img src={HearingEvaluationImg} alt="Hearing Evaluation" />
          <div className="service-content">
            <h2>Comprehensive Hearing Tests</h2>
            <p>
              At Sadhana Hearing and Speech Care Center, we offer a wide range of
              hearing tests designed to assess and enhance your auditory health.
              Our state-of-the-art facilities and expert audiologists are here
              to provide you with a comfortable and accurate hearing assessment.
              Whether you’re experiencing mild difficulties or significant
              hearing loss, our tests are tailored to identify your unique needs
              and guide you towards the best solutions.
            </p>
          </div>
        </div>

        {/* SERVICE 4 */}
        <div
          className="service-item reverse slide-left hidden"
          ref={(el) => attachRef(el, 3)}
        >
          <div className="service-content">
            <h2>Speech & Language Therapy</h2>
            <p>
              At Sadhana Hearing and Speech Care Center, we offer comprehensive speech
              and language therapy services to help individuals of all ages
              improve their communication skills. Our licensed speech-language
              pathologists provide personalized assessments and tailored
              treatment plans to address various speech and language challenges,
              including articulation, fluency, and language development. Our
              therapy sessions are designed to be engaging and supportive,
              ensuring that each individual feels comfortable while working
              towards their communication goals. Whether you are seeking therapy
              for a child or an adult, our dedicated team is here to assist you
              on your journey to better communication.
            </p>
          </div>
          <img src={SpeechTherapyImg} alt="Speech Therapy" />
        </div>

        {/* SERVICE 5 */}
        <div
          className="service-item slide-right hidden"
          ref={(el) => attachRef(el, 4)}
        >
          <img src={TinnitusImg} alt="Tinnitus Therapy" />
          <div className="service-content">
            <h2>Tinnitus Retraining Therapy (TRT)</h2>
            <p>
              Tinnitus Retraining Therapy (TRT) is an evidence-based treatment
              offered at Sadhana Hearing and Speech Care Center to help individuals
              manage tinnitus. This therapy aims to retrain the brain to
              perceive tinnitus sounds as neutral, reducing their impact on
              daily life. Our TRT program combines sound therapy and counseling
              to address both the auditory and psychological aspects of
              tinnitus. Our specialists provide personalized guidance to ensure
              the therapy aligns with each patient’s unique needs, helping them
              achieve long-term relief.
            </p>
          </div>
        </div>

        {/* SERVICE 6 */}
        <div
          className="service-item reverse slide-left hidden"
          ref={(el) => attachRef(el, 5)}
        >
          <div className="service-content">
            <h2>Hearing Aid Trials & Fittings</h2>
            <p>
              At Sadhana Hearing and Speech Care Center, we understand that choosing
              the right hearing aid is a significant decision. That's why we
              offer comprehensive hearing aid trials and fittings to ensure that
              you find the perfect solution for your hearing needs. Our
              experienced audiologists will guide you through the process,
              providing personalized assessments to recommend the most suitable
              devices for your lifestyle. During your trial period, you can test
              different models in real-world environments, allowing you to
              experience the benefits firsthand. Our team will provide ongoing
              support and adjustments to ensure optimal comfort and performance,
              making your transition to hearing aids as smooth as possible.
            </p>
          </div>
          <img src={HearingAidImg} alt="Hearing Aid Trial" />
        </div>

        {/* SERVICE 7 */}
        <div
          className="service-item slide-right hidden"
          ref={(el) => attachRef(el, 6)}
        >
          <img src={OAEImg} alt="OAE Test" />
          <div className="service-content">
            <h2>Otoacoustic Emissions (OAE)</h2>
            <p>
              Otoacoustic Emissions (OAE) testing is a crucial tool used at
              Sadhana Hearing and Speech Care Center to evaluate the function of the
              inner ear, specifically the cochlea. This non-invasive test helps
              detect hearing loss in individuals of all ages, including newborns
              and young children who may not be able to communicate their
              hearing difficulties. Our advanced OAE testing equipment provides
              quick and accurate results, enabling our audiologists to make
              informed recommendations for your hearing health. We strive to
              make the testing process as comfortable as possible, ensuring a
              stress-free experience for both children and adults.
            </p>
          </div>
        </div>

        {/* SERVICE 8 */}
        <div
          className="service-item reverse slide-left hidden"
          ref={(el) => attachRef(el, 7)}
        >
          <div className="service-content">
            <h2>Auditory Brainstem Response (ABR)</h2>
            <p>
              The Auditory Brainstem Response (ABR) test is a reliable
              diagnostic tool offered at Sadhana Hearing and Speech Care Center. This
              test measures the brain's response to sounds and is used to assess
              hearing and neurological function, especially in individuals who
              cannot undergo standard hearing tests. ABR testing is non-invasive
              and provides valuable information about the auditory pathway,
              helping our specialists diagnose conditions such as hearing loss,
              auditory neuropathy, and more. Our team ensures a comfortable
              experience and accurate results for all patients.
            </p>
          </div>
          <img src={ABRImg} alt="ABR Test" />
        </div>
      </div>

      {/* HELP SECTION */}
      <div className="help-section fade-up">
        <div className="help-text">
          <h3>Need Assistance?</h3>
          <h2>Call Us Anytime</h2>
          <p>📞 9845192771</p>
          <button>Contact Us</button>
        </div>
        <img className="help-img" src={ContactImg} alt="Help Support" />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "../styles/FAQSection.css";

export default function FAQSection({ title, data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>{title}</h2>

      {data.map((item, index) => (
        <div className="faq-item" key={index}>
          <button
            className={`faq-question ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
          </button>

          <div
            className="faq-answer"
            style={{
              maxHeight: activeIndex === index ? "200px" : "0px",
            }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./FAQ.css";

const faqs = [
  { q: "Is The Ekaant Child-Friendly?", a: "Yes, Ekaant is family-friendly and suitable for children." },
  { q: "Is There Mobile Network Or Internet?", a: "Yes, mobile networks are available, and we provide internet in common areas." },
  { q: "Can We Spot Tigers Or Wildlife Here?", a: "Yes, you can spot wildlife and even tigers during safaris at Bor Tiger Reserve." },
  { q: "Is Food Included In The Stay?", a: "Yes, meals are included depending on your package." },
  { q: "Do You Allow Pets?", a: "Yes, pets are welcome at Ekaant." },
  { q: "What Is The Best Time To Visit?", a: "The best time is October to March for pleasant weather and wildlife sightings." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="faq">
      <h2>FREQUENTLY ASKED QUESTIONS (FAQS)</h2>
      <div className="faq-grid">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`faq-card ${openIndex === i ? "open" : ""}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="faq-question">
              <span>Q. {item.q}</span>
              <FaChevronDown className="faq-icon" />
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: openIndex === i ? "200px" : "0px",
                opacity: openIndex === i ? 1 : 0,
              }}
            >
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

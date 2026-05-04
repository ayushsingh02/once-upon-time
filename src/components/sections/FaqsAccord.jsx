import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const faqData = [
  { title: "Question Statement 01", content: "We create a space of trust, where your experiences unfold with care, and every session becomes part of a deeper journey into yourself." },
  { title: "Question Statement 02", content: "We create a space of trust, where your experiences unfold with care, and every session becomes part of a deeper journey into yourself." },
  { title: "Question Statement 03", content: "We create a space of trust, where your experiences unfold with care, and every session becomes part of a deeper journey into yourself." },
  { title: "Question Statement 04", content: "We create a space of trust, where your experiences unfold with care, and every session becomes part of a deeper journey into yourself." },
];

const PlusIcon = () => (
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="10.8304" x2="22.4141" y2="10.8304" stroke="white" strokeWidth="0.753216"/>
    <line x1="10.8343" y1="22.4141" x2="10.8343" stroke="white" strokeWidth="0.753216"/>
  </svg>
);

const MinusIcon = () => (
  <svg width="23" height="1" viewBox="0 0 23 1" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="0.37681" x2="22.4141" y2="0.37681" stroke="white" strokeWidth="0.753216"/>
  </svg>
);

const FaqsAccord = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState({});
  const contentRefs = useRef([]);

  useEffect(() => {
    // Measure all heights after DOM is ready, store in state
    const measured = {};
    contentRefs.current.forEach((el, i) => {
      if (el) measured[i] = el.scrollHeight;
    });
    setHeights(measured);
    setOpenIndex(0);
  }, []);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faqs">
      <div className="faq-in">
        <div className="left">
          <div className="top">
            <p className="eyebrow-head">CHAPTER VI</p>
            <h2>Don't Be Afraid To Ask</h2>
            <p>
              Not at all. Therapy begins exactly where you are — confused,
              curious, overwhelmed, or simply unsure. There's no right way to arrive.
            </p>
            <Link to="/book-call" className="primary-btn">ask a question</Link>
          </div>
          <div className="bottom">
            <div className="faq-accordion-wrap">
              <div className="faq-accordion">
                {faqData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <div className="accordion-title" onClick={() => toggle(index)}>
                      {item.title}
                      <span className="accordion-icon">
                        {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                      </span>
                    </div>
                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className="accordion-content"
                      style={{
                        maxHeight: openIndex === index ? `${heights[index]}px` : "0",
                        overflow: "hidden",
                        transition: "max-height 0.35s ease",
                      }}
                    >
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="right" style={{ backgroundImage: "url('/images/faq-img.png')" }} />
      </div>
    </div>
  );
};

export default FaqsAccord;
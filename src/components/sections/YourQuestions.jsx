import React, { useEffect, useRef, useState } from "react";

import { animateText } from "../../animations";
const data = {
    eyehead:"Chapter IV",
    title:"Your Questions, Gently Answered",

    
}
const questionsData = [
  {
    question: "Do I need to have everything figured out before starting?",
    answer: "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
  },
  {
    question: "Do I need to have everything figured out before starting?",
    answer: "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
  },
  {
    question: "Do I need to have everything figured out before starting?",
    answer: "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
  },
  {
    question: "Do I need to have everything figured out before starting?",
    answer: "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
  },
];

const YourQuestions = () => {
  const sliderRef = useRef(null);
  const cursorRef = useRef(null);
  const sliderWrapRef = useRef(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const $ = window.jQuery || window.$;
    if (!$ || !$.fn.owlCarousel) return;

    const $slider = $(sliderRef.current);

    $slider.owlCarousel({
      loop: true,
      margin: 16,
      nav: isMobile,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      navText: [
        `<svg class="icon" width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="39.3616" height="39.3633" transform="matrix(-1 0 0 1 39.3616 0)" fill="#3E2C25"/><path d="M20.0092 19.6815L24.362 15.3287L23.0373 14.0039L17.3596 19.6815L23.0373 25.3592L24.362 24.0344L20.0092 19.6815Z" fill="#F7F0E8"/></svg>`,
        `<svg class="icon" width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="39.3616" height="39.3633" fill="#3E2C25"/><path d="M19.3524 19.6815L14.9995 15.3287L16.3243 14.0039L22.002 19.6815L16.3243 25.3592L14.9995 24.0344L19.3524 19.6815Z" fill="#F7F0E8"/></svg>`,
      ],
      responsive: {
        0: { items: 1.2 },
        600: { items: 1.5 },
        767: { items: 2.5 },
        991: { items: 2.8 },
        1100: { items: 2.8 },
      },
    });

    return () => {
      $slider.trigger("destroy.owl.carousel");
    };
  }, [isMobile]);

  // Custom cursor logic
  useEffect(() => {
    const wrap = sliderWrapRef.current;
    const cursor = cursorRef.current;
    if (!wrap || !cursor) return;

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      cursor.style.left = `${e.clientX - rect.left}px`;
      cursor.style.top = `${e.clientY - rect.top}px`;
    };

    const onEnter = () => setCursorVisible(true);
    const onLeave = () => setCursorVisible(false);

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);

    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseenter", onEnter);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="your-question">
      <div className="container-left">
        <div className="top" ref={animateText}>
          <p className="eyebrow-head">{data.eyehead}</p>
          <h2>{data.title}</h2>
        </div>
        <div className="your-question-in">
          <div
            ref={sliderWrapRef}
            className="your-question-slider-wrap"
            style={{ position: "relative", cursor: "none" }}
          >
            {/* Custom cursor — desktop only */}
            {!isMobile && (
              <div
                ref={cursorRef}
                style={{
                  position: "absolute",
                  pointerEvents: "none",
                  zIndex: 100,
                  transform: "translate(-50%, -50%)",
                  opacity: cursorVisible ? 1 : 0,
                  transition: "opacity 0.2s ease",
                  width: "80px",
                  height: "80px",
                  userSelect: "none",
                }}
              >
                            
                <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_432_2652)">
                <path d="M50.6914 101.383C78.6875 101.383 101.383 78.6875 101.383 50.6914C101.383 22.6953 78.6875 0 50.6914 0C22.6953 0 0 22.6953 0 50.6914C0 78.6875 22.6953 101.383 50.6914 101.383Z" fill="#E47C7C"/>
                <path d="M44.1318 42.6761L43.2279 41.7461L34.5898 50.6916L43.2279 59.6372L44.1318 58.7072L36.3917 50.6916L44.1318 42.6761Z" fill="white"/>
                <path d="M56.0586 42.6761L56.9625 41.7461L65.6005 50.6916L56.9625 59.6372L56.0586 58.7072L63.7986 50.6916L56.0586 42.6761Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_432_2652">
                <rect width="101.383" height="101.383" fill="white"/>
                </clipPath>
                </defs>
                </svg>

              </div>
            )}

            <div ref={sliderRef} className="your-question-slider owl-carousel">
              {questionsData.map((item, index) => (
                <div className="item" key={index}>
                  <div className={`your-question-card ${
        index % 2 !== 0 ? "brown-card" : ""
      }`}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourQuestions;
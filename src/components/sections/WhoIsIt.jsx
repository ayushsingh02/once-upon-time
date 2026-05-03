import React, { useEffect, useRef, useState, useCallback } from "react";

const whoData = [
  {
    image: "images/who1-og.png",
    title: "When life feels overwhelming",
    points: [
      "You feel emotionally drained or constantly on edge",
      "Small things feel heavier than they should",
      "You're struggling to slow down or find clarity",
    ],
  },
  {
    image: "images/who2-oc.png",
    title: "When relationships feel hard",
    points: [
      "You find it difficult to express your needs",
      "Conflict leaves you feeling unseen or unheard",
      "You keep repeating the same patterns",
    ],
  },
  {
    image: "images/who1-og.png",
    title: "When you've lost your sense of self",
    points: [
      "You feel disconnected from who you used to be",
      "Purpose and motivation feel far away",
      "You're going through the motions without meaning",
    ],
  },
  {
    image: "images/who2-oc.png",
    title: "When change feels impossible",
    points: [
      "You know something needs to shift but don't know how",
      "Old habits keep pulling you back",
      "You're ready to do the inner work",
    ],
  },
];

const WhoIsIt = () => {
  const sliderRef = useRef(null);
  const sliderWrapRef = useRef(null);
  const cursorRef = useRef(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [cardWidths, setCardWidths] = useState({});

  const calculateWidths = useCallback(() => {
    if (!sliderWrapRef.current) return;
    const containerWidth = sliderWrapRef.current.offsetWidth;
    const screenWidth = window.innerWidth;
    const gap = 16;
    const widths = {};
    whoData.forEach((_, index) => {
      const isEven = index % 2 === 0;
      if (screenWidth >= 1100) {
        widths[index] = isEven
          ? Math.round(containerWidth * 0.4) - gap / 2
          : Math.round(containerWidth * 0.6) - gap / 2;
      } else {
        widths[index] = Math.round(containerWidth / 2) - gap / 2;
      }
    });
    setCardWidths(widths);
  }, []);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 1100);
      setIsTablet(w >= 768 && w < 1100);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      calculateWidths();
    }, 0);
    window.addEventListener("resize", calculateWidths);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", calculateWidths);
    };
  }, [calculateWidths]);

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
        `<svg width="35" height="35" viewBox="0 0 40 40" fill="none"><rect width="39.3616" height="39.3633" transform="matrix(-1 0 0 1 39.3616 0)" fill="#3E2C25"/><path d="M20.0092 19.6815L24.362 15.3287L23.0373 14.0039L17.3596 19.6815L23.0373 25.3592L24.362 24.0344L20.0092 19.6815Z" fill="#F7F0E8"/></svg>`,
        `<svg width="35" height="35" viewBox="0 0 40 40" fill="none"><rect width="39.3616" height="39.3633" fill="#3E2C25"/><path d="M19.3524 19.6815L14.9995 15.3287L16.3243 14.0039L22.002 19.6815L16.3243 25.3592L14.9995 24.0344L19.3524 19.6815Z" fill="#F7F0E8"/></svg>`,
      ],
      responsive: {
        0:    { items: 1, autoWidth: false },
        768:  { items: 2, autoWidth: false },
        1100: { items: 2, autoWidth: true  },
      },
    });

    return () => $slider.trigger("destroy.owl.carousel");
  }, [isMobile]);

  useEffect(() => {
    const $ = window.jQuery || window.$;
    if (!$ || !sliderRef.current || isMobile || isTablet) return;
    $(sliderRef.current).trigger("refresh.owl.carousel");
  }, [cardWidths, isMobile, isTablet]);

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
    <div className="who-is-it">
      <div className="container">
        <div className="heading">
          <p className="eyebrow-head">Chapter II</p>
          <h2>Who Is It For?</h2>
          <p>
            Share a brief note about therapy, workshops, training, or booking.
            Messages are read with care and a team member will reply within 72 hours.
          </p>
        </div>
        <div className="who-is-it-in">
          <div
            ref={sliderWrapRef}
            className="who-is-it-slider-wrap"
            style={{ position: "relative", cursor: "none" }}
          >
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
                  width: "60px",
                  height: "60px",
                  userSelect: "none",
                }}
              >        
                    <svg width="80" height="80" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_432_2937)">
                    <path d="M50.6914 101.383C78.6875 101.383 101.383 78.6875 101.383 50.6914C101.383 22.6953 78.6875 0 50.6914 0C22.6953 0 0 22.6953 0 50.6914C0 78.6875 22.6953 101.383 50.6914 101.383Z" fill="#E47C7C"/>
                    <path d="M64.4738 59.9255L73.7061 50.6932M73.7061 50.6932L64.4738 41.4609M73.7061 50.6932H17.1582" stroke="white" stroke-width="2.30808"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_432_2937">
                    <rect width="101.383" height="101.383" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
              </div>
            )}

            <div ref={sliderRef} className="who-is-it-slider owl-carousel">
              {whoData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    className={`item ${isEven ? "even" : "brown"}`}
                    key={index}
                    style={
                      !isMobile && !isTablet && cardWidths[index]
                        ? { width: `${cardWidths[index]}px` }
                        : {}
                    }
                  >
                    <div className={`who-is-card ${isEven ? "even" : "brown"}`}>
                      <div className="who-is-img">
                        <img src={item.image} alt="Image" className="img" />
                      </div>
                      <div className="who-is-content">
                        <h3>{item.title}</h3>
                        <ul>
                          {item.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsIt;
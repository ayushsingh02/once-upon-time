import React, { useEffect, useRef, useState } from "react";
import WayWorkCard from "../snippets/WayWorkCard";

const data = {
  eybrowHead: "Chapter II",
  heading: "The Way We Work",
  bigPink: "W",
  learnMore: "Learn More",
  learnMoreURL: "#!",
  headText:
    "e believe therapy should feel deeply human—never cold or clinical. Our work is soft, collaborative, and rooted in emotional storytelling,guiding you back to connection with yourself and the people around you.",
  cards: [
    {
      id: 1,
      image: "images/way-we-work.png",
      title: "Gentle, Steady Growth",
      desc: "Card description goes here.",
    },
    {
      id: 2,
      image: "images/way-we-work2.png",
      title: "Empathy First",
      desc: "Real change begins when someone truly pays attention to your inner world.",
    },
    {
      id: 3,
      image: "images/way-we-wor3.png",
      title: "Connection Builds Safety",
      desc: "Card description goes here.",
    },
  ],
};

const HomeChapter2 = () => {
  const carouselRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const $carousel = window.$(carouselRef.current);

    if (!isDesktop) {
      const items = window.innerWidth >= 601 ? 2.2 : 1.2;

      $carousel.owlCarousel({
        loop: true,
        margin: 16,
        nav: false,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        items: items,
      });
    } else {
      if ($carousel.data("owl.carousel")) {
        $carousel.trigger("destroy.owl.carousel");
        $carousel.removeClass("owl-carousel owl-loaded");
        $carousel.find(".owl-stage-outer").children().unwrap();
      }
    }

    return () => {
      if ($carousel.data("owl.carousel")) {
        $carousel.trigger("destroy.owl.carousel");
      }
    };
  }, [isDesktop]);

  const handlePrev = () => {
    window.$(carouselRef.current).trigger("prev.owl.carousel");
  };

  const handleNext = () => {
    window.$(carouselRef.current).trigger("next.owl.carousel");
  };

  return (
    <div className="home-chapter-2">
      <div className="container">
        <div className="top">
          <div className="top-left">
            <p className="eyebrow-head">{data.eybrowHead}</p>
            <h2>{data.heading}</h2>
          </div>
          <div className="top-right">
            <p>
              <span className="big-pink">{data.bigPink}</span>
              {data.headText}
            </p>
          </div>
        </div>
        <div className="learn-more-cta mobile">
          <a href={data.learnMoreURL} className="primary-btn">
            {data.learnMore}
          </a>
        </div>
        <div
          className={`home-chapter-2-in ${!isDesktop ? "owl-carousel" : ""}`}
          ref={carouselRef}
        >
          {data.cards.map((card) => (
            <WayWorkCard key={card.id} {...card} />
          ))}
        </div>

        {/* Custom Nav — only visible on mobile */}
        {!isDesktop && (
          <div className="owl-custom-nav">
            <button className="owl-custom-prev" onClick={handlePrev}>
              <svg
                className="icon"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="39.3616"
                  height="39.3633"
                  transform="matrix(-1 0 0 1 39.3616 0)"
                  fill="#3E2C25"
                />
                <path
                  d="M20.0092 19.6815L24.362 15.3287L23.0373 14.0039L17.3596 19.6815L23.0373 25.3592L24.362 24.0344L20.0092 19.6815Z"
                  fill="#F7F0E8"
                />
              </svg>
            </button>
            <button className="owl-custom-next" onClick={handleNext}>
              <svg
                className="icon"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="39.3616" height="39.3633" fill="#3E2C25" />
                <path
                  d="M19.3524 19.6815L14.9995 15.3287L16.3243 14.0039L22.002 19.6815L16.3243 25.3592L14.9995 24.0344L19.3524 19.6815Z"
                  fill="#F7F0E8"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="learn-more-cta desktop">
        <a href={data.learnMoreURL} className="primary-btn">
          {data.learnMore}
        </a>
      </div>
    </div>
  );
};

export default HomeChapter2;

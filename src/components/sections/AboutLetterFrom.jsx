import React, { useEffect, useRef } from "react";
import PinkCard from "../snippets/PinkCard";
import BlueCard from "../snippets/BlueCard";
import LightBlueCard from "../snippets/LightBlueCard";
import { animateText, slideInRight, slideInLeft } from "../../animations";

const data = {
  eyeHead: "CHAPTER I",
  titleHead: "A Letter From Me To You",
  pinkCard: {
    title: "Welcome",
    description: "For those diving into therapy for the very first time",
    linkURL: "!#",
    linkText: "Read Letters",
  },
  slides: [
    {
      id: 1,
      letterParagraphs: [
        "For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first timeFor those diving into therapy for the very first time.",
        "For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time",
      ],
      authorLabel: "Yours Truly",
      authorName: "Aatika",
      image: "images/meet-aatika-og.png",
    },
    {
      id: 2,
      letterParagraphs: [
        "For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first timeFor those diving into therapy for the very first time.",
        "For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time",
      ],
      authorLabel: "Yours Truly",
      authorName: "Aatika",
      image: "images/meet-aatika-og.png",
    },
    {
      id: 3,
      letterParagraphs: [
        "For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first timeFor those diving into therapy for the very first time.",
        "For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time For those diving into therapy for the very first time",
      ],
      authorLabel: "Yours Truly",
      authorName: "Aatika",
      image: "images/meet-aatika-og.png",
    },
  ],
};

const cardComponents = [PinkCard, BlueCard, LightBlueCard];

const AboutLetterFrom = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const $ = window.$;
    if (!$) return;

    const $slider = $(sliderRef.current);

    if ($slider.hasClass("owl-loaded")) {
      $slider.trigger("destroy.owl.carousel");
    }

    $slider.owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      items: 1,
    });

    return () => {
      if ($slider.hasClass("owl-loaded")) {
        $slider.trigger("destroy.owl.carousel");
      }
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const cursor = cursorRef.current;
    if (!section || !cursor) return;

    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cursor.style.transform = `translate(${x}px, ${y}px)`;

      if (x < rect.width / 2) {
        cursor.classList.add("is-prev");
        cursor.classList.remove("is-next");
      } else {
        cursor.classList.add("is-next");
        cursor.classList.remove("is-prev");
      }
    };

    const onMouseEnter = () => cursor.classList.add("is-visible");
    const onMouseLeave = () => cursor.classList.remove("is-visible");

    const onClick = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const $slider = window.$(sliderRef.current);
      if (x < rect.width / 2) {
        $slider.trigger("prev.owl.carousel");
      } else {
        $slider.trigger("next.owl.carousel");
      }
    };

    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseenter", onMouseEnter);
    section.addEventListener("mouseleave", onMouseLeave);
    section.addEventListener("click", onClick);

    return () => {
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseenter", onMouseEnter);
      section.removeEventListener("mouseleave", onMouseLeave);
      section.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="letter-from-me for-about" ref={sectionRef}>
      <div className="lfm-cursor" ref={cursorRef}>
        <span className="lfm-cursor-prev">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="lfm-cursor-next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <div className="container">
        <div className="top-head" ref={animateText}>
          <p className="eyebrow-head">{data.eyeHead}</p>
          <h2>{data.titleHead}</h2>
        </div>
        <div className="lfm-slider owl-carousel" ref={sliderRef}>
          {data.slides.map((slide, index) => {
            const CardComponent = cardComponents[index] ?? PinkCard;
            return (
              <div className="lfm-card" key={slide.id}>
                <div className="letter-form-me-in">
                  <div className="left">
                    <div className="letter-page" ref={slideInRight}>
                      {slide.letterParagraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                      <div className="author">
                        <p className="your-truely">{slide.authorLabel}</p>
                        <p className="auther-name">{slide.authorName}</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="polo-img" ref={slideInLeft}>
                      <img src={slide.image} alt={slide.authorName} className="img" />
                    </div>
                  </div>
                </div>
                <CardComponent
                  delay={0.6}
                  title={data.pinkCard?.title}
                  description={data.pinkCard?.description}
                  linkURL={data.pinkCard?.linkURL}
                  linkText={data.pinkCard?.linkText}
                />
              </div>
            );
          })}
        </div>

        {/* Nav buttons — visible only on max-width 1200px */}
        <div className="lfm-nav">
          <div className="owl-custom-nav">
            <button className="owl-custom-prev" onClick={() => window.$(sliderRef.current).trigger("prev.owl.carousel")}>
              <svg className="icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="39.3616" height="39.3633" transform="matrix(-1 0 0 1 39.3616 0)" fill="#3E2C25" />
                <path d="M20.0092 19.6815L24.362 15.3287L23.0373 14.0039L17.3596 19.6815L23.0373 25.3592L24.362 24.0344L20.0092 19.6815Z" fill="#F7F0E8" />
              </svg>
            </button>
            <button className="owl-custom-next" onClick={() => window.$(sliderRef.current).trigger("next.owl.carousel")}>
              <svg className="icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="39.3616" height="39.3633" fill="#3E2C25" />
                <path d="M19.3524 19.6815L14.9995 15.3287L16.3243 14.0039L22.002 19.6815L16.3243 25.3592L14.9995 24.0344L19.3524 19.6815Z" fill="#F7F0E8" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutLetterFrom;
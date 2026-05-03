import React, { useEffect, useRef } from "react";
import IconO from "../snippets/IconO";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = {
  eyeHead: "Chapter I",
  title: (
    <>
      Mission
      <br />
      Statement
    </>
  ),
  image: "images/chapter-1-home.png",
  bigPink: '" G',
  quote: 'round the brand philosophy calm, purpose-driven, poetic yet clear."',
};

const HomeChapter1 = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const cardInnerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const cardInner = cardInnerRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(card, {
        height: "100vh",
        width: "55vw",
        ease: "power2.inOut",
        duration: 0.5,
      })
      .to(cardInner, {
        y: "-50%",
        ease: "none",
        duration: 1.5,
      })
      .to(cardInner, {
        y: "-50%",
        ease: "none",
        duration: 0.3,
      })
      // .to(card, {
      //   height: "calc(100vh - 130px)",
      //   width: "538px",
      //   ease: "power2.inOut",
      //   duration: 0.5,
      // });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      className="home-chapter-1"
      ref={sectionRef}
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className="home-chapter-1-in">
        <div className="container">
        <div className="inner-card" ref={cardRef}>
          <div className="inner-card-scroll" ref={cardInnerRef}>

            {/* Fold 1 */}
            <div className="fold-1">
              <p className="eyebrow-head">{data.eyeHead}</p>
              <div className="brand-logo">
                <img src="icons/header-dark-logo.svg" alt="Brand Logo" className="icon" />
              </div>
              <h3>{data.title}</h3>
              <div className="scroll-down">
                <IconO />
                <p>Scroll Down</p>
              </div>
            </div>

            {/* Fold 2 — scrolls into view */}
            <div className="fold-2">
              <p className="chapter-quote"><span className="big-pink">{data.bigPink}</span>{data.quote}</p>
            </div>

          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomeChapter1;
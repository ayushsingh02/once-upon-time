import React, { useEffect, useRef } from "react";
import IconO from "../snippets/IconO";

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
  const gsapCtx = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (!gsap || !ScrollTrigger) {
      console.error("GSAP or ScrollTrigger not found on window");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 992px)",
      isMobile: "(max-width: 991px)",
    }, (context) => {
      let { isDesktop } = context.conditions;
    
      if (!isDesktop) return;
      const section = sectionRef.current;
      const card = cardRef.current;
      const cardInner = cardInnerRef.current;

      if (!section || !card || !cardInner) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
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
        });

      return () => {
        tl.kill();
      };
    });

    gsapCtx.current = mm;

    return () => {
      if (gsapCtx.current) gsapCtx.current.revert();
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
              <div className="fold-2">
                <p className="chapter-quote">
                  <span className="big-pink">{data.bigPink}</span>
                  {data.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeChapter1;
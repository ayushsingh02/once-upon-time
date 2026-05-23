import React, { useEffect, useRef } from "react";
import IconO from "../snippets/IconO";
import gsap from "gsap";
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

    if (!section || !card || !cardInner) return;

    const isMobile = window.innerWidth < 992;

    const ctx = gsap.context(() => {
      if (isMobile) {
        const fold1 = section.querySelector(".fold-1");
        const fold2 = section.querySelector(".fold-2");
        const cardStyle = window.getComputedStyle(card);
        const paddingTop = parseFloat(cardStyle.paddingTop);

        const fold1H = fold1.offsetHeight;

        // Size fold-2 identically to fold-1 so the centered quote has equal space
        gsap.set(fold2, { height: fold1H });
        // Card shows exactly fold-1; padding-bottom is 0 on mobile so fold-2 starts at the clip edge
        gsap.set(card, { height: fold1H + paddingTop });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            preventOverlaps: true,
          },
        });

        tl.to(cardInner, { y: -fold1H, ease: "none", duration: 2 });
      } else {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            preventOverlaps: true,
          },
        });

        tl.to(card, {
            height: window.innerHeight,
            width: "55vw",
            ease: "power2.inOut",
            duration: 0.5,
          })
          .to(cardInner, {
            y: "-50%",
            ease: "none",
            duration: 1.5,
          });
      }
    }, sectionRef);

    setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => ctx.revert();
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
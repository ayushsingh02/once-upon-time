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

  // useEffect(() => {
  //   const isDesktop = window.innerWidth >= 992;

  //   if (!isDesktop) {
  //     // On mobile/tablet — clear any GSAP inline styles and do nothing
  //     if (cardRef.current) gsap.set(cardRef.current, { clearProps: "all" });
  //     if (cardInnerRef.current) gsap.set(cardInnerRef.current, { clearProps: "all" });
  //     return;
  //   }

  //   // Desktop only
  //   const section = sectionRef.current;
  //   const card = cardRef.current;
  //   const cardInner = cardInnerRef.current;

  //   if (!section || !card || !cardInner) return;

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: section,
  //       start: "top top",
  //       end: "+=100%",
  //       scrub: 1,
  //       pin: true,
  //       anticipatePin: 1,
  //       invalidateOnRefresh: true,
  //     },
  //   });

  //   tl.to(card, {
  //       height: "100vh",
  //       width: "55vw",
  //       ease: "power2.inOut",
  //       duration: 0.5,
  //     })
  //     .to(cardInner, {
  //       y: "-50%",
  //       ease: "none",
  //       duration: 1.5,
  //     })
  //     .to(cardInner, {
  //       y: "-50%",
  //       ease: "none",
  //       duration: 0.3,
  //     });

  //   return () => {
  //     tl.kill();
  //     ScrollTrigger.getAll().forEach((t) => t.kill());
  //   };
  // }, []);
  useEffect(() => {
    const isDesktop = window.innerWidth >= 992;
  
    if (!isDesktop) {
      if (cardRef.current) gsap.set(cardRef.current, { clearProps: "all" });
      if (cardInnerRef.current) gsap.set(cardInnerRef.current, { clearProps: "all" });
      return;
    }
  
    const section = sectionRef.current;
    const card = cardRef.current;
    const cardInner = cardInnerRef.current;
  
    if (!section || !card || !cardInner) return;
  
    // ✅ Safari fix — use window.innerHeight instead of 100vh
    const vh = window.innerHeight;
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // ✅ Safari fix — force ScrollTrigger to use JS scroll instead of native
        scroller: window,
      },
    });
  
    tl.to(card, {
        height: vh,        // ✅ px value instead of "100vh"
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
  
    // ✅ Safari fix — refresh after a delay to let Safari finish layout
    setTimeout(() => ScrollTrigger.refresh(), 300);
  
    return () => {
      tl.kill();
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
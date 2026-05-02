import React, { useEffect, useRef } from "react";

const data = {
  eyebrowHead: "Chapter I",
  heading: "Creating A Safe Space",
  cards: [
    {
      id: 1,
      className: "card-1",
      title: "Purpose",
      desc: "We begin by building a space where people feel seen and respected. Every story shared here is met with care, curiosity, and intention — never judgment or haste.",
      leftBottomImage: "images/sssm.png",
      rightImage: "images/sssl.png",
    },
    {
      id: 2,
      className: "card-2",
      title: "Impact",
      desc: "We begin by building a space where people feel seen and respected. Every story shared here is met with care, curiosity, and intention — never judgment or haste.",
      leftBottomImage: "images/sssm2.png",
      rightImage: "images/sssl2.png",
    },
    {
      id: 3,
      className: "card-3",
      title: "Practice",
      desc: "We begin by building a space where people feel seen and respected. Every story shared here is met with care, curiosity, and intention — never judgment or haste.",
      leftBottomImage: "images/sssm3.png",
      rightImage: "images/sssl3.png",
    },
  ],
};

const SafeSpace = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const sliderRef = useRef(null);
  const gsapCtx = useRef(null);

  useEffect(() => {
    const mm = window.gsap?.matchMedia();
    if (!mm) return;

    mm.add("(min-width: 992px)", () => {
      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);

      const track = trackRef.current;
      const section = sectionRef.current;
      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    gsapCtx.current = mm;

    return () => {
      if (gsapCtx.current) gsapCtx.current.revert();
    };
  }, []);

  useEffect(() => {
    const $ = window.$;
    if (!$) return;

    const $slider = $(sliderRef.current);

    const initOwl = () => {
      if ($slider.hasClass("owl-loaded")) return;
      $slider.owlCarousel({
        loop: true,
        margin: 16,
        nav: false,
        dots: false,
        responsive: {
          0: { items: 1.1 },
          576: { items: 1.4 },
          768: { items: 2 },
        },
      });
    };

    const destroyOwl = () => {
      if ($slider.hasClass("owl-loaded")) {
        $slider.trigger("destroy.owl.carousel");
        $slider.removeClass("owl-carousel owl-loaded");
        $slider.find(".owl-stage-outer").children().unwrap();
        $slider.addClass("owl-carousel");
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 992) {
        initOwl();
      } else {
        destroyOwl();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      destroyOwl();
    };
  }, []);

  const handlePrev = () =>
    window.$(sliderRef.current).trigger("prev.owl.carousel");
  const handleNext = () =>
    window.$(sliderRef.current).trigger("next.owl.carousel");

  return (
    <div className="safe-space" ref={sectionRef}>

      {/* DESKTOP */}
      <div className="safe-space-track" ref={trackRef}>

        {/* CARD 1 */}
        <div className="safe-space-panel card-1">
          <div className="card-1-inner">
            <div className="card-1-top">
              <div className="card-1-heading">
                <p className="eyebrow-head">{data.eyebrowHead}</p>
                <h2>{data.heading}</h2>
              </div>
              <div className="card-1-right-img">
                <img src={data.cards[0].rightImage} alt={data.cards[0].title} className="img" />
              </div>
            </div>
            <div className="card-1-bottom">
              <div className="card-1-bottom-left">
                <div className="card-1-small-img">
                  <img src={data.cards[0].leftBottomImage} alt={data.cards[0].title} className="img" />
                </div>
              </div>
              <div className="card-1-bottom-text">
                <h3>{data.cards[0].title}</h3>
                <p>{data.cards[0].desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="safe-space-panel card-2">
          <div className="card-2-inner">
            <div className="card-2-left">
              <img src={data.cards[1].rightImage} alt={data.cards[1].title} className="img" />
            </div>
            <div className="card-2-right">
              <h3>{data.cards[1].title}</h3>
              <div className="card-2-small-img">
                <img src={data.cards[1].leftBottomImage} alt={data.cards[1].title} className="img" />
              </div>
              <p>{data.cards[1].desc}</p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="safe-space-panel card-3">
          <div className="card-3-inner">
            <div className="card-3-left">
              <h3>{data.cards[2].title}</h3>
              <p>{data.cards[2].desc}</p>
              <div className="card-3-small-img">
                <img src={data.cards[2].leftBottomImage} alt={data.cards[2].title} className="img" />
              </div>
            </div>
            <div className="card-3-right">
              <img src={data.cards[2].rightImage} alt={data.cards[2].title} className="img" />
            </div>
          </div>
        </div>

      </div>

      {/* MOBILE */}
      <div className="safe-space-mobile">
        <div className="container">
          <div className="ss-mobile-top">
            <p className="eyebrow-head">{data.eyebrowHead}</p>
            <h2>{data.heading}</h2>
          </div>

          <div className="safe-space-slider owl-carousel" ref={sliderRef}>
            {data.cards.map((card) => (
              <div className={`safe-space-slide ${card.className}`} key={card.id}>
                <div className="safe-space-slide-inner">
                  <div className="slide-right-img">
                    <img src={card.rightImage} alt={card.title} className="img" />
                  </div>
                  <div className="slide-text">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                  <div className="slide-small-img">
                    <img src={card.leftBottomImage} alt={card.title} className="img" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="custom-nav">
            <div className="owl-custom-nav">
              <button className="owl-custom-prev" onClick={handlePrev}>
                <svg className="icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="39.3616" height="39.3633" transform="matrix(-1 0 0 1 39.3616 0)" fill="#3E2C25" />
                  <path d="M20.0092 19.6815L24.362 15.3287L23.0373 14.0039L17.3596 19.6815L23.0373 25.3592L24.362 24.0344L20.0092 19.6815Z" fill="#F7F0E8" />
                </svg>
              </button>
              <button className="owl-custom-next" onClick={handleNext}>
                <svg className="icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="39.3616" height="39.3633" fill="#3E2C25" />
                  <path d="M19.3524 19.6815L14.9995 15.3287L16.3243 14.0039L22.002 19.6815L16.3243 25.3592L14.9995 24.0344L19.3524 19.6815Z" fill="#F7F0E8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeSpace;
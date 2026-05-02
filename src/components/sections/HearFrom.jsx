import React, { useEffect, useRef } from "react";

const data = {
  eyeHead: "CHAPTER II",
  headTitle: "Hear From Our Community",
  cards: [
    {
      id: 1,
      title: "Finding My Voice",
      desc: "I came in feeling unsure of how to explain what I was carrying. Over time, I learned how to name my feelings without fear. Each session helped me trust my own voice a little more.",
      author: "A.L., 29 | Corporate Professional",
    },
    {
      id: 2,
      title: "A Safe Space to Heal",
      desc: "I never thought I'd open up to a stranger, but here I felt completely at ease. The sessions gave me tools I still use every day to manage stress and find calm.",
      author: "R.M., 34 | Teacher",
    },
    {
      id: 3,
      title: "Rediscovering Myself",
      desc: "After years of putting everyone else first, therapy helped me reconnect with who I am. I left each session feeling lighter and more grounded than before.",
      author: "S.K., 41 | Homemaker",
    },
    {
      id: 4,
      title: "From Chaos to Clarity",
      desc: "I was overwhelmed and burnt out. This space gave me permission to slow down and actually listen to myself. I'm grateful for every conversation we had.",
      author: "D.T., 27 | Entrepreneur",
    },
    {
      id: 5,
      title: "Learning to Let Go",
      desc: "Grief had taken over my life in ways I didn't expect. Through gentle guidance, I found a way to honour my loss while still moving forward with hope.",
      author: "P.N., 52 | Retired",
    },
  ],
};

const QuoteIcon = () => (
  <svg
    width="89"
    height="76"
    viewBox="0 0 89 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M51.1499 75.9941L51.1499 49.6885C51.1499 36.6331 54.0728 25.6237 59.9185 16.6602C65.959 7.50198 75.4096 1.94857 88.2701 0V15.1988C80.6707 15.9783 75.4096 18.7062 72.4867 23.3828C69.7587 27.8645 68.3947 34.5871 68.3947 43.5505L56.7033 41.7968H87.9778V75.9941H51.1499ZM0 75.9941L0 49.6885C0 36.6331 2.92285 25.6237 8.76856 16.6602C14.8091 7.50198 24.2597 1.94857 37.1202 0V15.1988C29.5208 15.9783 24.2597 18.7062 21.3368 23.3828C18.6088 27.8645 17.2448 34.5871 17.2448 43.5505L5.55342 41.7968H36.8279L36.8279 75.9941H0Z"
      fill="#E47C7C"
    />
  </svg>
);

const HearFrom = () => {
  const sliderRef = useRef(null); // 1. added ref

  useEffect(() => {
    const $ = window.$;
    if (!$) return;

    const $slider = window.$(sliderRef.current); // 2. use ref instead of class selector

    if ($slider.hasClass("owl-loaded")) {
      $slider.trigger("destroy.owl.carousel");
    }

    $slider.owlCarousel({
      loop: true,
      margin: 16,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 1.2 },
        600: { items: 1.5 },
        800: { items: 2.2 },
        1024: { items: 2.3 },
        1200: { items: 2.8 },
        1600: { items: 3 },
      },
    });

    return () => {
      if ($slider.hasClass("owl-loaded")) {
        $slider.trigger("destroy.owl.carousel");
      }
    };
  }, []);

  // 4. added handler functions using the ref
  const handlePrev = () => {
    window.$(sliderRef.current).trigger("prev.owl.carousel");
  };

  const handleNext = () => {
    window.$(sliderRef.current).trigger("next.owl.carousel");
  };

  return (
    <div className="hear-from">
      <div className="container">
        <div className="top">
          <div className="heading">
            <p className="eyebrow-head">{data.eyeHead}</p>
            <h2>{data.headTitle}</h2>
          </div>
          <div className="custom-nav desktop">
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
          </div>
        </div>
      </div>

      <div className="container-left">
        <div className="hear-from-in">
          <div className="hear-from-slider owl-carousel" ref={sliderRef}>
            {data.cards.map((card) => (
              <div className="hear-from-card" key={card.id}>
                <div className="quote-symbol">
                  <QuoteIcon />
                </div>
                <div className="content">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
                <div className="bottom-head">
                  <p>{card.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="custom-nav mobile">
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
          </div>
      </div>
    </div>
  );
};

export default HearFrom;
import React, { useEffect, useRef } from "react";
import { animateText, slideInBottom } from "../../animations";

const cardsData = [
  {
    id: 1,
    className: "ethics-card blue",
    title: "Confidentiality & Care",
    image: "images/ethics-card-img1.png",
    desc: "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
  },
  {
    id: 2,
    className: "ethics-card white",
    title: "Client-Led Process",
    image: "images/ethics-card-img2.png",
    desc: "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
  },
  {
    id: 3,
    className: "ethics-card pink",
    title: "Transparency & Honesty",
    image: "images/ethics-card-img3.png",
    desc: "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
  },
];

const Ethics = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const $ = window.$;
    if (!$) return;

    const $slider = $(sliderRef.current);

    if ($slider.hasClass("owl-loaded")) {
      $slider.trigger("destroy.owl.carousel");
    }

    $slider.owlCarousel({
      loop: true,
      margin: 16,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        1024: { items: 2 },
        1200: { items: 3 },
      },
    });

    return () => {
      if ($slider.hasClass("owl-loaded")) {
        $slider.trigger("destroy.owl.carousel");
      }
    };
  }, []);

  const handlePrev = () => {
    window.$(sliderRef.current).trigger("prev.owl.carousel");
  };

  const handleNext = () => {
    window.$(sliderRef.current).trigger("next.owl.carousel");
  };

  return (
    // <div className="ethic"  style={{ backgroundImage: `url(${cardsData.bgImage})` }}>
    <div className="ethic">
      <div className="master-bg">
        <img src="images/ethics-bg.png" alt="Image" className="img" />
      </div>
      <div className="ethics-in-in">
        <div className="container">
          <div className="ethics-in">
            <div className="ethics-img-bg">
              <img
                src="images/ethics-bg-img2.png"
                alt="Image"
                className="img"
              />
              <div className="heading" ref={animateText}>
                <p className="eyebrow-head">Chapter III</p>
                <h2>Ethics</h2>
                <p>
                  Share a brief note about therapy, workshops, training, or
                  booking. Messages are read with care and a team member will
                  reply within 72 hours.
                </p>
              </div>
            </div>
            <div className="ethics-card-wrap" ref={slideInBottom}>
              <div className="ethics-slider owl-carousel" ref={sliderRef}>
                {cardsData.map((card) => (
                  <div className={card.className} key={card.id}>
                    <h3>{card.title}</h3>
                    <div className="ethics-card-img">
                      <img src={card.image} alt={card.title} className="img" />
                    </div>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>

              <div className="custom-nav">
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
        </div>
      </div>
    </div>
  );
};

export default Ethics;

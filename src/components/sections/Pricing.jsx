import React, { useEffect, useRef } from "react";
import { animateText, slideInBottom } from "../../animations";

const pricingData = [
  {
    image: "images/pricing1.png",
    title: "Therapy 1:1",
    price: "₹2,500",
    description: "Real change begins when someone truly pays attention to your inner world.",
    duration: "1hr",
    mode: "Online",
  },
  {
    image: "images/pricing2.png",
    title: "Therapy 1:1",
    price: "₹2,500",
    description: "Real change begins when someone truly pays attention to your inner world.",
    duration: "1hr",
    mode: "Online",
    international: true,
  },
  {
    image: "images/pricing3.png",
    title: "Therapy 1:1",
    price: "₹2,500",
    description: "Real change begins when someone truly pays attention to your inner world.",
    duration: "1hr",
    mode: "Online",
  },
];

const Pricing = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const $ = window.jQuery || window.$;
    if (!$ || !$.fn.owlCarousel) return;

    const $slider = $(sliderRef.current);

    $slider.owlCarousel({
      loop: true,
      margin: 16,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 1.2 },
        600: { items: 1.5 },
        767: { items: 2.2 },
        991: { items: 2.5 },
        1100: { items: 3 },
      },
    });

    return () => {
      $slider.trigger("destroy.owl.carousel");
    };
  }, []);

  const handlePrev = () => {
    const $ = window.jQuery || window.$;
    if (!$) return;
    $(sliderRef.current).trigger("prev.owl.carousel");
  };

  const handleNext = () => {
    const $ = window.jQuery || window.$;
    if (!$) return;
    $(sliderRef.current).trigger("next.owl.carousel");
  };

  return (
    <div className="pricing">
      <div className="container">
        <div className="pricing-in">
          <div className="top" ref={animateText}>
            <p className="eyebrow-head">CHAPTER V</p>
            <h2>Pricing</h2>
          </div>
          <div className="bottom" ref={slideInBottom}>
            <div ref={sliderRef} className="pricing-slider owl-carousel">
              {pricingData.map((item, index) => (
                <div className="item" key={index}>
                  <div className="pricing-card">
                    <div className="pricing-image">
                      <img src={item.image} alt="Image" className="img" />
                    </div>
                    {item.international && <div className="international" />}
                    <div className="pricing-content">
                      <h3>{item.title}</h3>
                      <h4>{item.price}</h4>
                      <p>{item.description}</p>
                      <div className="info-list">
                        <ul>
                          <li>Duration - {item.duration}</li>
                          <li>Mode - {item.mode}</li>
                        </ul>
                      </div>
                    
                    </div>
                    <div className="book-now-cta">
                        <a href="/book-call" className="primary-btn">Book a Call</a>
                      </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="custom-nav">
              <div className="owl-custom-nav">
                <button className="owl-custom-prev" onClick={handlePrev}>
                  <svg className="icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="39.3616" height="39.3633" transform="matrix(-1 0 0 1 39.3616 0)" fill="#e47c7c" />
                    <path d="M20.0092 19.6815L24.362 15.3287L23.0373 14.0039L17.3596 19.6815L23.0373 25.3592L24.362 24.0344L20.0092 19.6815Z" fill="#F7F0E8" />
                  </svg>
                </button>
                <button className="owl-custom-next" onClick={handleNext}>
                  <svg  className="icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="39.3616" height="39.3633" fill="#e47c7c" />
                    <path d="M19.3524 19.6815L14.9995 15.3287L16.3243 14.0039L22.002 19.6815L16.3243 25.3592L14.9995 24.0344L19.3524 19.6815Z" fill="#F7F0E8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
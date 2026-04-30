import React, { useEffect, useRef, useState } from "react";
import InstaFrame from "../snippets/InstaFrame";

const data = {
  eyebrowText: "Chapter VI",
  title: "Here Whenever You Are",
  images: [
    { id: 1, src: "images/insta-sec1.png", url: "https://instagram.com/post/1" },
    { id: 2, src: "images/insta-sec2.png", url: "https://instagram.com/post/2" },
    { id: 3, src: "images/insta-sec3.png", url: "https://instagram.com/post/3" },
  ],
};

const InstaSection = () => {
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
      $carousel.owlCarousel({
        loop: true,
        margin: 16,
        autoplay:true,
        autoplayTimeout: 1500,
        nav: false,
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        items: 2,
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

  return (
    <div className="insta-section">
      <div className="container">
        <div className="heading">
          {data.eyebrowText && <p className="eyebrow-head">{data.eyebrowText}</p>}
          {data.title && <h2>{data.title}</h2>}
        </div>
        <div
          className={`insta-frame-in ${!isDesktop ? "owl-carousel" : ""}`}
          ref={carouselRef}
        >
          {data.images.map((img) => (
            <div className="insta-frame-card" key={img.id}>
              <InstaFrame instaImage={img.src} instaURL={img.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstaSection;
import React from "react";
import { Link } from "react-router-dom";
import PInkCardSm from "../snippets/PInkCardSm";
import { animateText, slideInLeft } from "../../animations";

const data = {
  pinkCard: {
    title: "Every beginning deserves gentleness.",
  },
  heading: "Therapy That Feels Like Coming Home",
  desc: "n a world that moves too quickly, this is your quiet corner — a place where your thoughts slow down, your feelings land safely, and your story can be held with softness.",
  descBigLetter: "I",
  cta: {
    label: "Book a Call",
    url: "/book-call",
  },
  image: "images/therapy-og-banner.png",
  polaroidImage: "images/banner-poloroid.png",
};

const TherapyOgBanner = () => {
  return (
    <div className="og-therapy">
      <div className="container">
        <div className="og-therapy-in">
          <div className="content-block" ref={animateText}>
            <h1>{data.heading}</h1>
            <p>
              <span className="big-pink">{data.descBigLetter}</span>
              {data.desc}
            </p>
            <Link to={data.cta.url} className="primary-btn">
              {data.cta.label}
            </Link>
          </div>
          <div className="center-block">
            <PInkCardSm delay={1} title={data.pinkCard?.title} />
            <div className="image-block">
              <img src={data.image} alt="Image" className="img" />
            </div>
            <div className="poloroid-img" ref={slideInLeft}>
              <img src={data.polaroidImage} alt="Image" className="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyOgBanner;
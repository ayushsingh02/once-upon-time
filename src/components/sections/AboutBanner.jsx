import React from "react";
import PinkCard from "../snippets/PinkCard";
import { animateText } from "../../animations";
const data = {
  image: "images/meet-aatika-og.png",
  bigText:"I",
  text:"n a world that moves too quickly, this is your quiet corner — a place where your thoughts slow down, your feelings land safely, and your story can be held with softness.",
  title:"Meet Aatika",
  pinkCard: {
    title: "Every beginning deserves gentleness.",
  },
};
const AboutBanner = () => {
  return (
    <div className="about-banner">
      <div className="container">
        <div className="about-banner-in">
          <div className="about-banner-image">
            <img src={data.image} alt="Image" className="img" />
          </div>
          <div className="about-banner-text" ref={animateText}>
            <div className="container">
              <p>
                <span className="big-pink">{data.bigText}</span>{data.text}
              </p>
              <PinkCard delay={0.5} title={data.pinkCard?.title} ></PinkCard>
              <h1>{data.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;

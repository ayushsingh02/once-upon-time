import React, { useEffect, useRef } from "react";
import PinkCard from "../snippets/PinkCard";
import { slideInLeft, slideInTop, animateText } from "../../animations";

const data = {
  eyehead: "Chapter III",
  title: "Meet Aatika",
  meetImage: "images/meet-img2.png",
  bigPinkText: "A",
  meetDesc:
    "atika believes therapy should feel human a safe space to pause, reflect, and be truly heard. Her work focuses on emotional storytelling and gentle growth, helping people rediscover themselves, one conversation at a time.",
  ctaText: "Learn More",
  ctaURL: "#!",
  pinkCard: {
    title: "Guided by empathy. Rooted in connection.",
  },
};

const Chapter3Meet = () => {
  const imageRef = useRef(null);
  const topRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    slideInLeft(imageRef.current, 0.2);
    slideInTop(topRef.current, 0.2);
    animateText(contentRef.current, 0.4);
  }, []);

  return (
    <div className="chapter3-meet">
      <div className="container">
        <div className="chapter3-meet-in">
          <div className="left">
            <div className="top" ref={topRef}>
              <p className="eyebrow-head">{data.eyehead}</p>
              <h2>{data.title}</h2>
            </div>
            <div className="meet-img">
              <img ref={imageRef} src={data.meetImage} alt="Image" className="img" />
            </div>
          </div>
          <div className="right">
            <div className="meet-content" ref={contentRef}>
              <p>
                <span className="big-pink">{data.bigPinkText}</span>{" "}
                {data.meetDesc}
              </p>
              <a href={data.ctaURL} className="primary-btn">
                {data.ctaText}
              </a>
            </div>
            <PinkCard delay={1} title={data.pinkCard.title}></PinkCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter3Meet;
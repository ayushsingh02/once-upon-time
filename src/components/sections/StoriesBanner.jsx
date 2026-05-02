import React from "react";
import PinkCard from "../snippets/PinkCard";
import { animateText, slideInBottom } from "../../animations";
const data = {
  headTitle: "Stories That Inspire",
  image: "images/stories-banner.png",
  pinkCard: {
    title: "Every beginning deserves gentleness.",
  },
};

const StoriesBanner = () => {
  return (
    <div className="stories-banner">
      <div className="container">
        <div className="stories-banner-in" ref={animateText}>
          <h1>{data.headTitle}</h1>
          <div className="stories-banner-img" ref={slideInBottom}>
            <img src={data.image} alt="Image" className="img" />
          </div>
          <PinkCard delay={1} title={data.pinkCard?.title}></PinkCard>
        </div>
      </div>
    </div>
  );
};

export default StoriesBanner;

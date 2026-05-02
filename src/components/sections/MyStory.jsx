import React from "react";
import { animateText, slideInLeft } from "../../animations";
const data = {
  eyehead: "Chapter I",
  title: "My Story",
  image: "images/my-story-img.png",
  bigPink: "W",
  text: "e  believe therapy should feel deeply human—never cold or clinical. Our work is soft, collaborative, and rooted in emotional storytelling, guiding you back to connection with yourself and the people around you.",
};
const MyStory = () => {
  return (
    <div className="my-story" ref={animateText}>
      <div className="container">
        <div className="heading">
          <p className="eyebrow-head">{data.eyehead}</p>
          <h2>{data.title}</h2>
        </div>
        <div className="mystory-in">
          <div className="left">
            <div className="mystory-img" ref={slideInLeft}>
              <img src={data.image} alt="Image" className="img" />
            </div>
          </div>
          <div className="right">
            <p>
              <span className="big-pink">{data.bigPink}</span>
              {data.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStory;

import React from "react";
import PinkCard from "../snippets/PinkCard";

const Chapter3Meet = () => {
  return (
    <div className="chapter3-meet">
      <div className="container">
        <div className="chapter3-meet-in">
          <div className="top">
            <p className="eyebrow-head">Chapter III</p>
            <h2>Meet Aatika</h2>
          </div>
          <div className="left">
            <div className="meet-img">
                <img src="" alt="Image" className="img" />
            </div>
          </div>
          <div className="right">
            <p><span className="big-pink">A</span>atika believes therapy should feel human a safe space to pause, reflect, and be truly heard. Her work focuses on emotional storytelling and gentle growth, helping people rediscover themselves, one conversation at a time.</p>
            <a href="#!" className="primary-btn">Learn More</a>
            <PinkCard></PinkCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter3Meet;

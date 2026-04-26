import React from "react";
import InstaFrame from "../snippets/InstaFrame";

const data = {
  eyebrowText: "Chapter VI",
  title: "Here Whenever You Are",
  images: [
    "images/insta-sec1.png",
    "images/insta-sec2.png",
    "images/insta-sec3.png",
  ]
};

const InstaSection = () => {
  return (
    <div className="insta-section">
      <div className="container">
        <div className="heading">
          {data.eyebrowText && <p className="eyebrow-head">{data.eyebrowText}</p>}
          {data.title && <h2>{data.title}</h2>}
        </div>
        <div className="insta-frame-in">
          {data.images.map((img, index) => (
            <div className="insta-frame-card" key={index}>
              <InstaFrame instaImage={img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstaSection;
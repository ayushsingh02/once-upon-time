import React from "react";

const HangingCard =  ({ hangingImage, eyehead, title, desc, ctaText, ctaURL, isHanged }) => {
  return (
    <div className={`hanging-card ${isHanged ? "hanged" : ""}`}>
      <div className="hanging-card-img">
        <img src={hangingImage} alt="Image" className="img" />
      </div>
      <div className="hanging-card-content">
        {eyehead && <p className="eye-head">{eyehead}</p>}
        {title && <h3>{title}</h3>}
        {desc && <p>{desc}</p>}
        {ctaText && <a className="primary-btn" href={ctaURL}>{ctaText}</a>}
      </div>
    </div>
  );
};

export default HangingCard;

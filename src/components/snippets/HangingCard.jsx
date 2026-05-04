import React from "react";
import { Link } from "react-router-dom";

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
        {ctaText && <Link className="primary-btn" to={ctaURL}>{ctaText}</Link>}
      </div>
    </div>
  );
};

export default HangingCard;

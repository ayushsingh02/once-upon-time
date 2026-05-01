import React from "react";


const TherapyCard = ({ eyebrow, title, desc, image, lineColor }) => {
  return (
    <>
      <div className="theraphy-card-outer">
      <div className="theraphy-card">
        <div className="left">
          {eyebrow && <p className="eyebrow-head">{eyebrow}</p>}
          {title && <h3>{title}</h3>}
          {desc && <p>{desc}</p>}
        </div>
        <div className="right">
          <div className="therapy-card-img">
            {image && <img src={image} alt="Image" className="img" />}
          </div>
        </div>
      </div>
      <div className={`bottom-line ${lineColor}`}></div>
      </div>
    </>
  );
};

export default TherapyCard;
import React from "react";

const WayWorkCard = ({ image, title, desc }) => {
  return (
    <div className="way-work-card">
      <div className="way-work-card-img">
        {image && <img src={image} alt={title} className="img" />}
      </div>
      <div className="way-work-card-inner">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{desc}</p>
      </div>
      <div className="card-default-strip">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default WayWorkCard;
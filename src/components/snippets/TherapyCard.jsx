import React from "react";

const TherapyCard = () => {
  return (
    <div className="theraphy-card">
      <div className="left">
        <p className="eye-head">Headline 01</p>
        <h3>Small, Thoughtful Groups</h3>
        <p>
          Build a strong grounding in therapeutic ethics, presence, and
          emotional safety — the essentials every practitioner needs.
        </p>
      </div>
      <div className="right">
        <div className="therapy-card-img">
          <img
            src="../images/theraphy-card-img.png"
            alt="Image"
            className="img"
          />
        </div>
      </div>
    </div>
  );
};

export default TherapyCard;

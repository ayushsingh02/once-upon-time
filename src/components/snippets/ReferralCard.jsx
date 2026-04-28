import React from "react";

const ReferralCard = ({ id, specialisation, description, name, email, phone }) => {
  return (
    <div className="referral-card" data-id={id}>
      <div className="top">
        <h3>Specialises in: {specialisation}</h3>
        <p>{description}</p>
      </div>
      <div className="bottom">
        <p>{name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
};

export default ReferralCard;
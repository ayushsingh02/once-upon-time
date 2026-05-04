import React from "react";
import { Link } from "react-router-dom";
import ReferralCard from "../snippets/ReferralCard";
import { animateText, slideInBottom } from "../../animations";
const data = {
  viewMoreURL: "/referrals",
  viewMoreText: "View More Referrals",
  eyebrowHead: "CHAPTER VII",
  title: "Referrals You Can Browse",
  desc: "Share a brief note about therapy, workshops, training, or booking. Messages are read with care and a team member will reply within 72 hours.",
};
const referrals = [
  {
    id: 1,
    specialisation: "Attention Concerns/ADD",
    description:
      "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
    name: "Mr. Jaideep Mukherjee",
    email: "jaideep@betterhelp.com",
    phone: "+91-9245-654-768",
  },
  {
    id: 2,
    specialisation: "Attention Concerns/ADD",
    description:
      "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
    name: "Mr. Jaideep Mukherjee",
    email: "jaideep@betterhelp.com",
    phone: "+91-9245-654-768",
  },
  {
    id: 3,
    specialisation: "Attention Concerns/ADD",
    description:
      "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
    name: "Mr. Jaideep Mukherjee",
    email: "jaideep@betterhelp.com",
    phone: "+91-9245-654-768",
  },
];
const ReferralBrowse = () => {
  return (
    <div className="referral-browse">
      <div className="container">
        <div className="heading" ref={animateText}>
          <p className="eyebrow-head">{data.eyebrowHead}</p>
          <h2>{data.title}</h2>
          <p>{data.desc}</p>
        </div>
        <div className="referral-browse-in" ref={slideInBottom}>
          {referrals.map((item) => (
            <ReferralCard key={item.id} {...item} />
          ))}
        </div>
        <div className="view-more-cta">
          <Link to={data.viewMoreURL} className="primary-btn">
            {data.viewMoreText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReferralBrowse;

import React from "react";
import ReactLenis from "lenis/react";
import HeaderSecondary from "../components/Header/HeaderSecondary";
import Footer from "../components/Footer/Footer";
import PreFooterForm from "../components/sections/PreFooterForm";
import ReferralCard from "../components/snippets/ReferralCard";
const data = {
  title: "Our Referrals",
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
  {
    id: 4,
    specialisation: "Attention Concerns/ADD",
    description:
      "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
    name: "Mr. Jaideep Mukherjee",
    email: "jaideep@betterhelp.com",
    phone: "+91-9245-654-768",
  },
  {
    id: 5,
    specialisation: "Attention Concerns/ADD",
    description:
      "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
    name: "Mr. Jaideep Mukherjee",
    email: "jaideep@betterhelp.com",
    phone: "+91-9245-654-768",
  },

  {
    id: 6,
    specialisation: "Attention Concerns/ADD",
    description:
      "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
    name: "Mr. Jaideep Mukherjee",
    email: "jaideep@betterhelp.com",
    phone: "+91-9245-654-768",
  },
  {
    id: 7,
    specialisation: "Attention Concerns/ADD",
    description:
      "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
    name: "Mr. Jaideep Mukherjee",
    email: "jaideep@betterhelp.com",
    phone: "+91-9245-654-768",
  },
  {
    id: 8,
    specialisation: "Attention Concerns/ADD",
    description:
      "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
    name: "Mr. Jaideep Mukherjee",
    email: "jaideep@betterhelp.com",
    phone: "+91-9245-654-768",
  },
  {
    id: 9,
    specialisation: "Attention Concerns/ADD",
    description:
      "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
    name: "Mr. Jaideep Mukherjee",
    email: "jaideep@betterhelp.com",
    phone: "+91-9245-654-768",
  },
  {
    id: 10,
    specialisation: "Attention Concerns/ADD",
    description:
      "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
    name: "Mr. Jaideep Mukherjee",
    email: "jaideep@betterhelp.com",
    phone: "+91-9245-654-768",
  },
  {
    id: 11,
    specialisation: "Attention Concerns/ADD",
    description:
      "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
    name: "Mr. Jaideep Mukherjee",
    email: "jaideep@betterhelp.com",
    phone: "+91-9245-654-768",
  },
  {
    id: 12,
    specialisation: "Attention Concerns/ADD",
    description:
      "Not at all. Therapy begins exactly where you are — confused, curious, overwhelmed, or simply unsure. There's no right way to arrive.",
    name: "Mr. Jaideep Mukherjee",
    email: "jaideep@betterhelp.com",
    phone: "+91-9245-654-768",
  },
];

const Referrals = () => {
  return (
    <ReactLenis root>
      <HeaderSecondary transparent />
      <main>
        <div className="referrals-page">
          <div className="referr-banner">
            <div className="container">
              <div className="heading">
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
              </div>
            </div>
            <div className="referr-pink-bar"></div>
          </div>
          <div className="referrals-page-in">
            <div className="container">
              <div className="referr-card-wrap">
                {referrals.map((item) => (
                  <ReferralCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="spacer"></div>
      <PreFooterForm></PreFooterForm>
      <Footer />
    </ReactLenis>
  );
};

export default Referrals;

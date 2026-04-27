import React from "react";
import Lenis from "lenis";
import ReactLenis from "lenis/react";
import HeaderSecondary from "../components/Header/HeaderSecondary";
import Footer from "../components/Footer/Footer";
import ReferralCard from "../components/snippets/ReferralCard";

const Referrals = () => {
  return (
    <div>
      <HeaderSecondary></HeaderSecondary>
      <ReferralCard />
      <Footer></Footer>
    </div>
  );
};

export default Referrals;

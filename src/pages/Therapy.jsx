import React from "react";
import Lenis from "lenis";
import ReactLenis from "lenis/react";
import HeaderSecondary from "../components/Header/HeaderSecondary";
import Footer from "../components/Footer/Footer";
import LearnTherapy from "../components/sections/LearnTherapy";

const Therapy = () => {
  return (
    <>
      <ReactLenis root>
        <HeaderSecondary></HeaderSecondary>
        <main className="top-spacing-all">
          <LearnTherapy></LearnTherapy>
        </main>
        <div className="spacer"></div>
        <Footer></Footer>
      </ReactLenis>
    </>
  );
};

export default Therapy;

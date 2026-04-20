import React from "react";
import Lenis from "lenis";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HomeBanner from "../components/sections/HomeBanner";
import ReactLenis from "lenis/react";

const Homepage = () => {
  return (
    <ReactLenis root>
      <Header />
      <HomeBanner />
      <Footer />
    </ReactLenis>
  );
};

export default Homepage;

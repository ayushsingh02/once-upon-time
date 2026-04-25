import React from "react";
import Lenis from "lenis";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HomeBanner from "../components/sections/HomeBanner";
import HomeChapter1 from "../components/sections/HomeChapter1";
import HomeChapter2 from "../components/sections/HomeChapter2";
import Chapter3Meet from "../components/sections/Chapter3Meet";
import Certification from "../components/sections/Certification";
import ContactSection from "../components/sections/ContactSection";
import ReactLenis from "lenis/react";

const Homepage = () => {
  return (
    <ReactLenis root>
      <Header />
    <main className="top-spacing">
    <HomeBanner />
    <HomeChapter1 />
    <div className="spacer"></div>
    <HomeChapter2 />
    <div className="spacer"></div>
    <Chapter3Meet></Chapter3Meet>
    <div className="spacer"></div>
    <Certification></Certification>
    <div className="spacer"></div>
    <ContactSection></ContactSection>
    </main>
      <Footer />
    </ReactLenis>
  );
};

export default Homepage;

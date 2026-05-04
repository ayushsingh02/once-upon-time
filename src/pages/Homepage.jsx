import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis, { useLenis } from "lenis/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HomeBanner from "../components/sections/HomeBanner";
import HomeChapter1 from "../components/sections/HomeChapter1";
import HomeChapter2 from "../components/sections/HomeChapter2";
import Chapter3Meet from "../components/sections/Chapter3Meet";
import ExploreWays from "../components/sections/ExploreWays";
import Certification from "../components/sections/Certification";
import ContactSection from "../components/sections/ContactSection";
import InstaSection from "../components/sections/InstaSection";
import PreFooterForm from "../components/sections/PreFooterForm";

gsap.registerPlugin(ScrollTrigger);

// Keeps Lenis virtual scroll in sync with ScrollTrigger's scroll tracking.
// Without this, ScrollTrigger never hears Lenis scroll events — critical on iOS.
function LenisScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });
  return null;
}

const Homepage = () => {
  useEffect(() => {
    document.title = "Homepage | Once Upon A Time";
  }, []);
  return (
    <ReactLenis root>
      <LenisScrollTriggerSync />
      <Header />
      <main className="top-spacing">
        <HomeBanner />
        <HomeChapter1 />
        <div className="spacer"></div>
        <HomeChapter2 />
        <div className="spacer"></div>
        <Chapter3Meet></Chapter3Meet>
        <div className="spacer"></div>
        <ExploreWays></ExploreWays>
        <div className="spacer"></div>
        <Certification></Certification>
        <div className="spacer"></div>
        <ContactSection></ContactSection>
        <div className="spacer"></div>
        <InstaSection></InstaSection>
        <div className="spacer"></div>
        <PreFooterForm></PreFooterForm>
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default Homepage;

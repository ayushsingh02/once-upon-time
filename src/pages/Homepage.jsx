import { useEffect } from "react";
import ReactLenis, { useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

const Homepage = () => {
  const lenis = useLenis();

  useEffect(() => {
    document.title = "Homepage | Once Upon A Time";
  }, []);

  useEffect(() => {
    if (!lenis) return;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, [lenis]);

  return (
    <ReactLenis root options={{
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      prevent: (node) => node.closest(".home-chapter-1") !== null,
    }}>
      <Header />
      <main className="top-spacing">
        <HomeBanner />
        <HomeChapter1 />
        <div className="spacer"></div>
        <HomeChapter2 />
        <div className="spacer"></div>
        <Chapter3Meet />
        <div className="spacer"></div>
        <ExploreWays />
        <div className="spacer"></div>
        <Certification />
        <div className="spacer"></div>
        <ContactSection />
        <div className="spacer"></div>
        <InstaSection />
        <div className="spacer"></div>
        <PreFooterForm />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default Homepage;
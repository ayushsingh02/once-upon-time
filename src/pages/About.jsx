import { useEffect } from "react";
import HeaderSecondary from "../components/Header/HeaderSecondary";
import Footer from "../components/Footer/Footer";
import PreFooterForm from "../components/sections/PreFooterForm";
import InstaSection from "../components/sections/InstaSection";
import ContactSectionMain from "../components/sections/ContactSectionMain";
import ExploreWays from "../components/sections/ExploreWays";
import HomeChapter2 from "../components/sections/HomeChapter2";
import AboutBanner from "../components/sections/AboutBanner";
import MyStory from "../components/sections/MyStory";
import AboutMeChapter2 from "../components/sections/AboutMeChapter2";
import AboutLetterFrom from "../components/sections/AboutLetterFrom";

const data = {
  image: {
    src: "images/chapter-1-home.png",
    alt: "Image",
  },
  eyebrowText: "Chapter I",
  title: "Ready to begin your journey",
  desc: "Share a brief note about therapy, workshops, training, or booking. Messages are read with care and a team member will reply within 72 hours.",
  capText: "Want to start with a call?",
  ctaText: "book slot directly",
  emailid: "hello@onceuponatime.com",
  ctaURL: "#!",
  blueCard: {
    title: "Expect a reply within 72 hours. Thank you for your patience.",
  },
};

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
      <HeaderSecondary transparent />
        <main>
          <AboutBanner></AboutBanner>
          <div className="spacer"></div>
          <MyStory></MyStory>
          <div className="spacer"></div>
          <AboutMeChapter2></AboutMeChapter2>
          <div className="spacer"></div>
          <HomeChapter2 />
          <div className="spacer"></div>
          <AboutLetterFrom></AboutLetterFrom>
          <div className="spacer"></div>
          <ExploreWays />
          <div className="spacer"></div>
          <ContactSectionMain
            image={data.image}
            eyebrowText={data.eyebrowText}
            title={data.title}
            desc={data.desc}
            capText={data.capText}
            ctaText={data.ctaText}
            ctaURL={data.ctaURL}
            emailid={data.emailid}
            blueCard={data.blueCard}
          />
          <div className="spacer"></div>
          <InstaSection />
          <div className="spacer"></div>
          <PreFooterForm />
        </main>
        <Footer />
    </>
  );
};

export default About;

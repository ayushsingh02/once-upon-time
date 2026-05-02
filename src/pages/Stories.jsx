import {useEffect} from "react";
import Lenis from "lenis";
import ReactLenis from "lenis/react";
import ContactSectionMain from "../components/sections/ContactSectionMain";
import StoriesBanner from "../components/sections/StoriesBanner";
import Footer from "../components/Footer/Footer";
import PreFooterForm from "../components/sections/PreFooterForm";
import InstaSection from "../components/sections/InstaSection";
import HeaderSecondary from "../components/Header/HeaderSecondary";
import RulesForSubmission from "../components/sections/RulesForSubmission";
import HearFrom from "../components/sections/HearFrom";
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
const instaData = {
  eyebrowText: "Chapter VI",
  title: "Here Whenever You Are",
  images: [
    {
      id: 1,
      src: "images/insta-sec1.png",
      url: "https://instagram.com/post/1",
    },
    {
      id: 2,
      src: "images/insta-sec2.png",
      url: "https://instagram.com/post/2",
    },
    {
      id: 3,
      src: "images/insta-sec3.png",
      url: "https://instagram.com/post/3",
    },
  ],
};
const Stories = () => {
    useEffect(() => {
        document.title = "Stories";
      }, []);
  return (
    <>
      <ReactLenis root>
        <HeaderSecondary transparent/>
        <main>
        <StoriesBanner></StoriesBanner>
        <div className="spacer"></div>
        <HearFrom></HearFrom>
        <div className="spacer"></div>
        <RulesForSubmission></RulesForSubmission>
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
          <InstaSection instaData={instaData} />
        </main>
        <div className="spacer"></div>
        <PreFooterForm></PreFooterForm>
        <Footer></Footer>
      </ReactLenis>
    </>
  );
};

export default Stories;

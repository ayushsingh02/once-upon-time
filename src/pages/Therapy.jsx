import { useEffect } from "react";
import Lenis from "lenis";
import ReactLenis from "lenis/react";
import HeaderSecondary from "../components/Header/HeaderSecondary";
import Footer from "../components/Footer/Footer";
import ContactSectionMain from "../components/sections/ContactSectionMain";
import InstaSection from "../components/sections/InstaSection";
import PreFooterForm from "../components/sections/PreFooterForm";
import StickyScrollTab from "../components/snippets/StickyScrollTab";
import Ethics from "../components/sections/Ethics";
import ReferralBrowse from "../components/sections/ReferralBrowse";
import FaqsAccord from "../components/sections/FaqsAccord";
import Pricing from "../components/sections/Pricing";
import YourQuestions from "../components/sections/YourQuestions";
import WhoIsIt from "../components/sections/WhoIsIt";
import TherapyOgBanner from "../components/sections/TherapyOgBanner";
import LetterFromMe from "../components/sections/LetterFromMe";

const tabs = [
  { label: "a letter for you", target: "#sec-1" },
  { label: "who is it for", target: "#sec-2" },
  { label: "ethics", target: "#sec-3" },
  { label: "our approach", target: "#sec-4" },
  { label: "pricing", target: "#sec-5" },
  { label: "faqs", target: "#sec-6" },
  { label: "refrrals", target: "#sec-7" },
  { label: "connect", target: "#sec-8" },
];


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
const Therapy = () => {
  useEffect(() => {
    document.title = "Therapy";
  }, []);
  return (
    <>
      <ReactLenis root>
        <HeaderSecondary transparent light />
        <main>
        <TherapyOgBanner></TherapyOgBanner>
        <div className="spacer"></div>
        <StickyScrollTab tabs={tabs}/>
        <div className="spacer"></div>
          <div id="sec-1">
        <LetterFromMe></LetterFromMe>
        </div>
          <div className="spacer"></div>
          <div id="sec-2">

        <WhoIsIt></WhoIsIt>
        </div>
          <div className="spacer"></div>
          <div id="sec-3">

          <Ethics></Ethics>
          </div>
          <div className="spacer"></div>
          <div id="sec-4">

          <YourQuestions></YourQuestions>
          </div>
          <div className="spacer"></div>
          <div id="sec-5">

          <Pricing></Pricing>
          </div>
          <div className="spacer"></div>
          <div id="sec-6">

          <FaqsAccord></FaqsAccord>
          </div>
          <div className="spacer"></div>
          <div id="sec-7">

          <ReferralBrowse></ReferralBrowse>
          </div>
          <div className="spacer"></div>
          <div id="sec-8">

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
          </div>
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

export default Therapy;

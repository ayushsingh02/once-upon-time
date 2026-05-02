import React from "react";
import Lenis from "lenis";
import ReactLenis from "lenis/react";
import HeaderSecondary from "../components/Header/HeaderSecondary";
import Footer from "../components/Footer/Footer";
import LearnTherapy from "../components/sections/LearnTherapy";
import WorkshopThat from "../components/sections/WorkshopThat";
import InviteThought from "../components/sections/InviteThought";
import ContactSectionMain from "../components/sections/ContactSectionMain";
import InstaSection from "../components/sections/InstaSection";
import PreFooterForm from "../components/sections/PreFooterForm";
import WorkWithMe from "../components/sections/WorkWithMe";
import StickyScrollTab from "../components/snippets/StickyScrollTab";
import TherapyBanner from "../components/sections/TherapyBanner";
const tabs = [
  { label: "Work With Me", target: "#work-with-me" },
  { label: "Learn Therapy", target: "#learn-therapy" },
  { label: "Workshop That", target: "#workshop-that" },
  { label: "Invite Thought", target: "#invite-thought" },
];

<StickyScrollTab tabs={tabs} />;
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
  return (
    <>
      <ReactLenis root>
      <HeaderSecondary transparent light />
        <main>
          <TherapyBanner></TherapyBanner>
          <div className="spacer-sm sst-space"></div>
          <StickyScrollTab tabs={tabs} />
          <div className="spacer-sm"></div>
          <div id="work-with-me">
          <WorkWithMe ></WorkWithMe>
          </div>
          <div className="spacer-sm"></div>
          <div id="learn-therapy">
          <LearnTherapy ></LearnTherapy>
          </div>
          <div className="spacer-sm"></div>
          <div id="workshop-that">
          <WorkshopThat></WorkshopThat>
          </div>
          <div className="spacer-sm"></div>
          <div id="invite-thought">
          <InviteThought ></InviteThought>
          </div>
          <div className="spacer-sm"></div>
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

export default Therapy;

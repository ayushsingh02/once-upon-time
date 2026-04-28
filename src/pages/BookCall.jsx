import React from "react";
import ReactLenis from "lenis/react";
import HeaderSecondary from "../components/Header/HeaderSecondary";
import Footer from "../components/Footer/Footer";
import PreFooterForm from "../components/sections/PreFooterForm";
import ContactSectionMain from "../components/sections/ContactSectionMain";

const data = {
  image: {
    src: "images/chapter-1-home.png",
    alt: "Image",
  },
  eyebrowText: "Chapter I",
  title: "Ready to begin your journey",
  desc: "Share a brief note about therapy, workshops, training, or booking. Messages are read with care and a team member will reply within 72 hours.",
  capText:"Want to start with a call?",
  ctaText :"book slot directly",
  emailid: "hello@onceuponatime.com",
  ctaURL :"#!",
  blueCard: {
    title: "Expect a reply within 72 hours. Thank you for your patience.",
    description: "We will get back to you shortly.",
  },
};

const BookCall = () => {
  return (
    <ReactLenis root>
      <HeaderSecondary />
      <main className="top-spacing">
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
      </main>
      <PreFooterForm />
      <Footer />
    </ReactLenis>
  );
};

export default BookCall;
import React from 'react'
import Lenis from "lenis";
import ReactLenis from "lenis/react";
import HeaderSecondary from "../components/Header/HeaderSecondary";
import Footer from "../components/Footer/Footer";
const data = {
    heading: "We have received your request",
    text: "For those diving into therapy for the very first time",
    ctaText: "Go to Home",
    ctaURL: "/",
  };

const ThankyouPage = () => {
  return (
    <ReactLenis root>
    <HeaderSecondary transparent />
    <main className="error-page-main">
      <div className="error-page thankyou-page">
        <div className="thankyou-card">
        <div className="error-content">
            <h2>Thank You</h2>
          <h3>{data.heading}</h3>
          <p>{data.text}</p>
          <a href={data.ctaURL} className="primary-btn pink">
            {data.ctaText}
          </a>
        </div>
        </div>
      </div>
    </main>
    <Footer />
  </ReactLenis>
  )
}

export default ThankyouPage
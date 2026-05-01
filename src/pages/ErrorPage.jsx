import React from "react";
import Lenis from "lenis";
import ReactLenis from "lenis/react";
import HeaderSecondary from "../components/Header/HeaderSecondary";
import Footer from "../components/Footer/Footer";
import { slideInBottom } from '../animations';

const data = {
  heading: "Requested Page not found",
  text: "For those diving into therapy for the very first time",
  ctaText: "Go to Home",
  ctaURL: "/",
};
const ErrorPage = () => {
  return (
    <ReactLenis root>
      <HeaderSecondary transparent />
      <main className="error-page-main">
        <div className="error-page">
          <div className="error-img" ref={slideInBottom}>
            <img src="icons/error.svg" alt="404 Error" className="icon" />
          </div>
          <div className="error-content">
            <h3>{data.heading}</h3>
            <p>{data.text}</p>
            <a href={data.ctaURL} className="primary-btn pink">
              {data.ctaText}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default ErrorPage;

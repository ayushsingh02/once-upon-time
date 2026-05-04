import { useEffect } from "react";
import { Link } from "react-router-dom";
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
  useEffect(() => {
    document.title = "Error 404";
  }, []);
  return (
    <>
      <HeaderSecondary transparent />
      <main className="error-page-main">
        <div className="error-page">
          <div className="error-img" ref={slideInBottom}>
            <img src="icons/error.svg" alt="404 Error" className="icon" />
          </div>
          <div className="error-content">
            <h3>{data.heading}</h3>
            <p>{data.text}</p>
            <Link to={data.ctaURL} className="primary-btn pink">
              {data.ctaText}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;

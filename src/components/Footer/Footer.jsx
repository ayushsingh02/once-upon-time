import React from "react";
import "./footer.css";
import PinkCard from "../snippets/PinkCard";

const data = {
  logo: "images/footer-logo.svg",
  nav: [
    {
      head: "Service",
      text: ["Therapy", "Training", "Workshops", "Talks"],
      link: ["/therapy", "/training", "/workshops", "/talks"],
    },
    {
      head: "About",
      text: ["Stories", "Referrals"],
      link: ["/stories", "/referrals"],
    },
    {
      head: "Terms and Conditions",
      text: ["Privacy Policy", "Refunds & Cancellations"],
      link: ["/legal", "/legal"],
    },
  ],
  socials: [
    { icon: "icons/linkedin.svg", alt: "Linkedin" },
    { icon: "icons/instagram.svg", alt: "Instagram" },
    { icon: "icons/facebook.svg", alt: "Facebook" },
  ],
  cta: {
    heading: "We are just a call away",
    btnText: "Book A Call",
    btnLink: "/book-call",
  },
  pinkCard: {
    title: "Where Empathy Leads",
    description: "Guided by empathy. Rooted in connection.",
  },
  copyright: "Once Upon A Time. All rights reserved.",
  designedBy: { label: "StudioTwo42", link: "#!" },
};

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="footer-in">
              <div className="footer-top">
                <div className="footer-top-left">
                  <div className="footer-logo">
                    <img src={data.logo} alt="Footer Logo" className="icon" />
                  </div>
                  <div className="footer-nav">
                    {data.nav.map((block, i) => (
                      <div className="footer-nav-block" key={i}>
                        <p className="head">{block.head}</p>
                        <ul>
                          {block.text.map((text, j) => (
                            <li key={j}>
                              <a href={block.link[j]}>{text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="footer-top-right">
                  <PinkCard
                    title={data.pinkCard.title}
                    description={data.pinkCard.description}
                  />
                </div>
              </div>

              <div className="footer-bottom">
                <div className="footer-bottom-left">
                  <div className="social-icon">
                    {data.socials.map((social, i) => (
                      <a href="#!" key={i}>
                        <div>
                          <img src={social.icon} alt={social.alt} />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="footer-bottom-right">
                  <h3>{data.cta.heading}</h3>
                  <div className="cta-btn">
                    <a href={data.cta.btnLink} className="primary-btn">
                      {data.cta.btnText}
                    </a>
                  </div>
                </div>
              </div>

              <div className="footer-copyright">
                <div className="copyright">
                  <p>
                    <span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.875 13.25C10.3958 13.25 13.25 10.3958 13.25 6.875C13.25 3.35418 10.3958 0.5 6.875 0.5C3.35418 0.5 0.5 3.35418 0.5 6.875C0.5 10.3958 3.35418 13.25 6.875 13.25Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.99969 8.46917C8.66512 8.91507 8.19876 9.24441 7.66664 9.41054C7.13451 9.57668 6.56361 9.57119 6.03478 9.39486C5.50595 9.21853 5.046 8.88029 4.72007 8.42804C4.39414 7.9758 4.21875 7.43247 4.21875 6.87502C4.21875 6.31756 4.39413 5.77423 4.72005 5.32199C5.04597 4.86974 5.50592 4.53149 6.03475 4.35515C6.56358 4.17881 7.13448 4.17332 7.66661 4.33945C8.19873 4.50558 8.6651 4.83491 8.99967 5.28081" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {data.copyright}
                  </p>
                </div>
                <div className="design-by">
                  <p>
                    Designed by{" "}
                    <a href={data.designedBy.link}>{data.designedBy.label}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
import React, { useEffect } from "react";

const data = {
  image1: {
    src: "icons/Medicine.svg"
  },
  image2: {
    src: "icons/therapyappointment_logo.svg"
  },
  image3: {
    src: "icons/us_physical_therapy_logo.svg"
  },
};
const Certification = () => {
  useEffect(() => {
    if (window.$ && window.$(".certification-ticker-wrap").length) {
      window.$(".certification-ticker-wrap").bxSlider({
        minSlides: 4,
        maxSlides: 6,
        slideWidth: 250,
        ticker: true,
        speed: 25000
      });
    }
  }, []);
  return (
    <div className="certification-ticker">
      <p className="eyebrow-head">Certification</p>
      <ul className="certification-ticker-wrap">
        <li><img src={data.image1.src} alt="Logo" className="icon" /></li>
        <li><img src={data.image2.src} alt="Logo" className="icon" /></li>
        <li><img src={data.image3.src} alt="Logo" className="icon" /></li>
        <li><img src={data.image1.src} alt="Logo" className="icon" /></li>
        <li><img src={data.image2.src} alt="Logo" className="icon" /></li>
        <li><img src={data.image3.src} alt="Logo" className="icon" /></li>
      </ul>
    </div>
  );
};

export default Certification;
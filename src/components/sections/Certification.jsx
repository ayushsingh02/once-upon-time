import React, { useEffect } from "react";

const images = import.meta.glob("../../assets/icons/*.svg", { eager: true });
const getImg = (name) => images[`../../assets/icons/${name}`]?.default;

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
        <li><img src={getImg("Medicine.svg")} alt="Logo" className="icon" /></li>
        <li><img src={getImg("therapyappointment_logo.svg")} alt="Logo" className="icon" /></li>
        <li><img src={getImg("us_physical_therapy_logo.svg")} alt="Logo" className="icon" /></li>
        <li><img src={getImg("Medicine.svg")} alt="Logo" className="icon" /></li>
        <li><img src={getImg("therapyappointment_logo.svg")} alt="Logo" className="icon" /></li>
        <li><img src={getImg("us_physical_therapy_logo.svg")} alt="Logo" className="icon" /></li>
      </ul>
    </div>
  );
};

export default Certification;
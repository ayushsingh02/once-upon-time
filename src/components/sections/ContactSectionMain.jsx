import React from "react";
import BlueCard from "../snippets/BlueCard";
import countryCodesList from "country-codes-list";

const allCountries = countryCodesList.customList(
  "countryCallingCode",
  "+{countryCallingCode}",
);

const ContactSectionMain = ({
  image,
  eyebrowText,
  title,
  desc,
  blueCard,
  ctaText,
  ctaURL,
  emailid,
  capText,
}) => {
  return (
    <div className="contact-section main-component">
      <div className="contact-bg-img">
        <img src={image.src} alt={image.alt} className="img" />
      </div>
      <div className="container">
        <div className="contact-component-wrap">
          <div className="contact-form-top">
            <div>
              <p className="eyebrow-head">{eyebrowText}</p>
              <div className="heading-block">
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="book-slot">
                  <p>{capText}</p>
                  <a href={ctaURL} className="primary-btn">
                    {ctaText}
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom-email-block">
              <p>Email</p>
              <a href={`mailto:${emailid}`}>{emailid}</a>
            </div>
          </div>
          <div className="contact-form-main">
            <h3>Fill The Form</h3>
            <form action="" className="contact-form">
              <div className="">
                <div className="input-wrap">
                  <label htmlFor="fullName">Full Name*</label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="input-wrap">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Email Id"
                    required
                  />
                </div>
              </div>
              <div className="input-wrap">
                <label htmlFor="contactNumber">Contact Number*</label>
                <div className="contact-number-wrap">
                  <select id="selectCountry" defaultValue="+91">
                    {Object.entries(allCountries).map(([code, label]) => (
                      <option key={code} value={label}>
                        {label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="contactNumber"
                    placeholder="Enter Phone Number"
                    maxLength={10}
                    minLength={10}
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    required
                    onKeyPress={(e) => {
                      if (!/[0-9]/.test(e.key)) e.preventDefault();
                    }}
                  />
                </div>
              </div>
              <div className="input-wrap">
                <label htmlFor="yourQuestion">Your Question</label>
                <textarea
                  rows="6"
                  name="yourQuestion"
                  id="yourQuestion"
                  placeholder="Write a message"
                ></textarea>
              </div>
              <div>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
        <BlueCard
          rotate={25}
          title={blueCard?.title}
          description={blueCard?.description}
        />
      </div>
    </div>
  );
};

export default ContactSectionMain;

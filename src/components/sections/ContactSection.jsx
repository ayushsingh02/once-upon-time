import React from "react";
import BlueCard from "../snippets/BlueCard";
import countryCodesList from "country-codes-list";
const allCountries = countryCodesList.customList(
  "countryCallingCode",
  "+{countryCallingCode}",
);
const data = {
  image: {
    src: "images/chapter-1-home.png",
    alt: "Image",
  },
 
  eyebrowText: "Chapter VII",
  title: "Send Your Questions My Way!",
  desc: "Share a quick note about therapy, workshops, or training. We’ll get back to you within 72 hours.",
  pinkCard: {
    title: "Expect a reply within 72 hours. Thank you for your patience.",
  },
};
const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-bg-img">
        <img src={data.image.src} alt={data.image.alt} className="img" />
      </div>
      <div className="container">
        <div className="contact-section-in">
          <div className="left">
            <div className="contact-form-outer">
              <div className="contact-form-top">
                <p className="eyebrow-head">{data.eyebrowText}</p>
                <h2>{data.title}</h2>
                <p>
                  {data.desc}
                </p>
              </div>
              <div className="contact-form-main">
                <h3>Fill The Form</h3>
                <form action="" className="contact-form">
                  <div className="contact-form-2col">
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
                          if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="yourQuestion">Your Question</label>
                    <textarea
                      row="6"
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
          </div>
          <div className="right">
            <BlueCard
              title={data.pinkCard?.title}
              description={data.pinkCard?.description}
            ></BlueCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

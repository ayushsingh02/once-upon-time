import React from "react";
import TherapyCard from "../snippets/TherapyCard";

const data = {
  eyehead: "Chapter II",
  heading: "Learn Therapy the Right Way",
  ctaText: "Book a Call",
  ctaURL: "/book-call",
  cards: [
    {
      id: 1,
      eyebrow: "Headline 01",
      title: "Foundations That Matter",
      desc: "Build a strong grounding in therapeutic ethics, presence, and emotional safety — the essentials every practitioner needs.",
      image: "images/lt1.png",
      lineColor: "pink",
    },
    {
      id: 2,
      eyebrow: "Headline 02",
      title: "Human-Centered Practice",
      desc: "Learn to work with people, not just frameworks — honoring nuance, emotion, and lived experience.",
      image: "images/lt2.png",
      lineColor: "pink",
    },
    {
      id: 3,
      eyebrow: "Headline 03",
      title: "Emotional Literacy",
      desc: "Develop the ability to recognize, hold, and respond to complex emotional states with clarity and care.",
      image: "images/lt3.png",
      lineColor: "pink",
    },
  ],
};

const LearnTherapy = () => {
  return (
    <section>
      <div className="learn-therapy">
        <div className="container">
          <div className="heading">
            <p className="eyebrow-head">{data.eyehead}</p>
            <h2>{data.heading}</h2>
          </div>
          <div className="learn-therapy-in">
            {data.cards.map((card) => (
              <TherapyCard key={card.id} {...card} />
            ))}
          </div>
          <div className="book-call-cta">
            <a href={data.ctaURL} className="primary-btn">{data.ctaText}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnTherapy;
import React, { useRef, useEffect } from "react";
import TherapyCard from '../snippets/TherapyCard';
import { slideInLeft, slideInRight, animateText } from "../../animations";

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
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const isOdd = (index + 1) % 2 !== 0;
      if (isOdd) {
        slideInRight(ref);
      } else {
        slideInLeft(ref);
      }
    });
  }, []); 

  return (
    <section>
      <div className="learn-therapy">
        <div className="container">
          <div className="heading" ref={animateText}>
            <p className="eyebrow-head">{data.eyehead}</p>
            <h2>{data.heading}</h2>
          </div>
          <div className="learn-therapy-in">
            {data.cards.map((card, index) => (
              <TherapyCard
                key={card.id}
                {...card}
                cardRef={(el) => (cardRefs.current[index] = el)} 
              />
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
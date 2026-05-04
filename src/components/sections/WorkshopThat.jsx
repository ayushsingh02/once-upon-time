import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import TherapyCard from '../snippets/TherapyCard';
import { slideInLeft, slideInRight, animateText } from "../../animations";

const data = {
  eyehead: "Chapter III",
  heading: "Workshops That Create Space",
  ctaText: "Book a Call",
  ctaURL: "/book-call",
  cards: [
    {
      id: 1,
      eyebrow: "Headline 01",
      title: "Small, Thoughtful Groups",
      desc: "Build a strong grounding in therapeutic ethics, presence, and emotional safety — the essentials every practitioner needs.",
      image: "images/wt1.png",
      lineColor: "blue",
    },
    {
      id: 2,
      eyebrow: "Headline 02",
      title: "Guided Conversations",
      desc: "Learn to work with people, not just frameworks — honoring nuance, emotion, and lived experience.",
      image: "images/lt2.png",
      lineColor: "blue",
    },
    {
      id: 3,
      eyebrow: "Headline 03",
      title: "Shared Reflection",
      desc: "Develop the ability to recognize, hold, and respond to complex emotional states with clarity and care.",
      image: "images/wt3.png",
      lineColor: "blue",
    },
  ],
};

const WorkshopThat = () => {
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
            <Link to={data.ctaURL} className="primary-btn">{data.ctaText}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopThat;
import React, { useEffect, useRef, useState } from "react";
import HangingCard from "../snippets/HangingCard";
import { animateText } from '../../animations';

const data = {
  eyebrowHead: "Chapter IV",
  headTitle: "Explore the Ways We Can Help",
  cards: [
    {
      id: 1,
      hangingImage: "images/hanging1.png",
      eyehead: "Therapy",
      title: "Grow & Evolve",
      desc: "A safe, steady space to understand your story, process emotions, and grow at your own pace.",
      ctaText: "Learn more",
      ctaURL: "#!",
    },
    {
      id: 2,
      hangingImage: "images/hanging2.png",
      eyehead: "Workshop",
      title: "Collaborate",
      desc: "Join guided sessions that blend learning, conversation, and community.",
      ctaText: "Learn more",
      ctaURL: "#!",
    },
    {
      id: 3,
      hangingImage: "images/hanging3.png",
      eyehead: "Learn",
      title: "Training",
      desc: "Skill-building training rooted in compassion, clarity, and real-world practice.",
      ctaText: "Learn more",
      ctaURL: "#!",
    },
  ],
};
 
const ExploreWays = () => {
  const sectionRef = useRef(null);
  const [hangedCards, setHangedCards] = useState([]);

  useEffect(() => {
    if (window.innerWidth < 992) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setHangedCards((prev) => [...prev, 2]);
          }, 300);
          setTimeout(() => {
            setHangedCards((prev) => [...prev, 3]);
          }, 300);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
 
    return () => observer.disconnect();
  }, []);
  const textRef = useRef(null)

  useEffect(() => {
    animateText(textRef.current, 0.3)
  }, [])
  return (
    <div className="explore-ways" ref={sectionRef}>
      <div className="container">
        <div className="heading" ref={textRef}>
          <p className="eyebrow-head">{data.eyebrowHead}</p>
          <h2>{data.headTitle}</h2>
        </div>
        <div className="explore-ways-in">
          {data.cards.map((card) => (
            <HangingCard
              key={card.id}
              {...card}
              isHanged={hangedCards.includes(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreWays;
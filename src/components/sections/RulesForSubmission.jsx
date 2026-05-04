import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = {
  eyeHead: "Chapter III",
  headTitle: "Rules For Submission",
  desc: "Share a brief note about therapy, workshops, training, or booking. Messages are read with care and a team member will reply within 72 hours.",
  img: "images/rules-img.png",
  cards: [
    {
      id: 1,
      title: "Share From Lived Experience",
      desc: "Submissions should reflect your own journey or perspective. We value authenticity over perfection—your truth matters.",
    },
    {
      id: 2,
      title: "Write With Care and Respect",
      desc: "Lorem ipsum dolor sit amet consectetur. Enim est a suspendisse amet eleifend fringilla. Pretium duis ac lorem.",
    },
    {
      id: 3,
      title: "Protect Privacy",
      desc: "Lorem ipsum dolor sit amet consectetur. Enim est a suspendisse amet eleifend fringilla. Pretium duis ac lorem.",
    },
    {
      id: 4,
      title: "Keep It Thoughtful, Not Promotional",
      desc: "Lorem ipsum dolor sit amet consectetur. Enim est a suspendisse amet eleifend fringilla. Pretium duis ac lorem.",
    },
    {
      id: 5,
      title: "Trust the Process",
      desc: "Lorem ipsum dolor sit amet consectetur. Enim est a suspendisse amet eleifend fringilla. Pretium duis ac lorem.",
    },
  ],
};

const RulesForSubmission = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      // Entry animation: card slides up, image slides down
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        imgRef.current,
        { opacity: 0, y: -80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Parallax on scroll
      gsap.to(cardRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(imgRef.current, {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="rules-for-submission" ref={sectionRef}>
      <div className="container">
        <div className="heading">
          <p className="eyebrow-head">{data.eyeHead}</p>
          <h2>{data.headTitle}</h2>
          <p>{data.desc}</p>
        </div>
        <div className="rules-for-submission-in">
          <div className="left">
            <div className="card-text-wrap" ref={cardRef}>
              {data.cards.map((card) => (
                <div key={card.id}>
                  <h3>{card.id}. {card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <img src={data.img} alt="Image" className="img" ref={imgRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesForSubmission;

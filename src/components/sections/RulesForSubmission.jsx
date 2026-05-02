import React from "react";
import { slideInBottom, slideInTop } from "../../animations";

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
  return (
    <div className="rules-for-submission">
      <div className="container">
        <div className="heading">
          <p className="eyebrow-head">{data.eyeHead}</p>
          <h2>{data.headTitle}</h2>
          <p>{data.desc}</p>
        </div>
        <div className="rules-for-submission-in">
          <div className="left">
            <div className="card-text-wrap" ref={slideInTop}>
              {data.cards.map((card) => (
                <div key={card.id}>
                  <h3>{card.id}. {card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="right" ref={slideInBottom}>
            <img src={data.img} alt="Image" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesForSubmission;
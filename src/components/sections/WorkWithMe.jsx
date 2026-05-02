import React from "react";

const data = {
  eyebrow: "Chapter I",
  heading: "Work With Me",
  desc: "Share a brief note about therapy, workshops, training, or booking. Messages are read with care and a team member will reply within 72 hours.",
  cards: [
    {
      id: 1,
      tag: "Training",
      image: "images/wwm1.png",
      title: "Build skills with intention",
      desc: "Real change begins when someone truly pays attention to your inner world.",
      ctaText: "Book Now",
      ctaURL: "#!",
    },
    {
      id: 2,
      tag: "Therapy",
      image: "images/wwm2.png",
      title: "Learn together, gently",
      desc: "Real change begins when someone truly pays attention to your inner world.",
      ctaText: "Book Now",
      ctaURL: "#!",
    },
    {
      id: 3,
      tag: "Workshops",
      image: "images/wwm3.png",
      title: "Conversations that resonate",
      desc: "Real change begins when someone truly pays attention to your inner world.",
      ctaText: "Book Now",
      ctaURL: "#!",
    },
  ],
};

const WorkWithMe = () => {
  return (
    <section>
      <div className="work-with-me">
        <div className="container">
          <div className="heading">
            <p className="eyebrow-head">{data.eyebrow}</p>
            <h2>{data.heading}</h2>
            <p>{data.desc}</p>
          </div>
          <div className="work-with-me-in">
            <div className="work-with-me-slider">
              {data.cards.map((card) => (
                <div className="wwm-card" key={card.id}>
                  <div className="top">
                    {card.tag && <p>{card.tag}</p>}
                    <div className="wwm-img">
                      {card.image && <img src={card.image} alt="Image" className="img" />}
                    </div>
                  </div>
                  <div className="bottom">
                    {card.title && <h3>{card.title}</h3>}
                    {card.desc && <p>{card.desc}</p>}
                    {card.ctaURL && (
                      <a href={card.ctaURL} className="primary-btn">{card.ctaText}</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMe;
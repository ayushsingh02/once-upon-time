import React from 'react'
import PinkCard from '../snippets/PinkCard'
import { animateText, slideInBottom, slideInTop } from '../../animations';

const data = {
  heading: "A Space to Come Together",
  desc: "n a world that moves too quickly, this is your quiet corner — a place where your thoughts slow down, your feelings land safely, and your story can be held with softness.",
  ctaText: "Book A Call",
  ctaURL: "#!",
  pinkCard: {
    title: "Every beginning deserves gentleness.",
  },
  image: "images/therapy-banner.png",
};

const TherapyBanner = () => {
  return (
    <section>
        <div className="therapy-banner">
            <div className="container">
                <div className="therapy-banner-in">
                    <div className="top" ref={animateText}>
                        <h1>{data.heading}</h1>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <p><span className='big-pink'>I</span>{data.desc}</p>
                            <a href={data.ctaURL} className='primary-btn'>{data.ctaText}</a>
                            <PinkCard delay={.5} title={data.pinkCard?.title} />
                        </div>
                        <div className="right">
                            <div className="therapy-banner-img" ref={slideInBottom}>
                                <img src={data.image} alt="Image" className="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TherapyBanner
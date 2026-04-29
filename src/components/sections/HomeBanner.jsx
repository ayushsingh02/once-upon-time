import React from 'react'
import { useEffect, useRef } from 'react';
import PinkCard from '../snippets/PinkCard';
import { slideInBottom } from '../../animations';
 
const data = {
  title: "Therapy That Feels Like Coming Home",
  image: {
    src: "images/home-banner.png",
    alt: "Image",
  },
  pinkCard: {
    title: "Every beginning deserves gentleness.",
  },
  description: "n a world that moves too quickly, this is your quiet corner — a place where your thoughts slow down, your feelings land safely, and your story can be held with softness.",
  cta: {
    label: "Book A Call",
    href: "#!",
  },
}

const HomeBanner = () => {
  const imageRef = useRef(null)

  useEffect(() => {
    slideInBottom(imageRef.current, 0.8)  // delay 0.8s → appears after header
  }, [])
  return (
    <div className='home-banner'>
      <div className="container">
        <div className="home-banner-in">
          <div className="left">
            {data.title && <h1>{data.title}</h1>}
          </div>
          <div className="center">
            {data.image && (
              <div className="home-banner-img">
                <img ref={imageRef} src={data.image.src} alt={data.image.alt} className="img" />
              </div>
            )}
            <PinkCard delay={1} title={data.pinkCard?.title} description={data.pinkCard?.description} />
          </div>
          <div className="right">
            {data.description && (
              <p><span className='big-pink'>I</span>{data.description}</p>
            )}
            {data.cta && (
              <a href={data.cta.href} className="primary-btn">{data.cta.label}</a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
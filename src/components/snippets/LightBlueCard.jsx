import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const LightBlueCard = ({ title, description, delay = 0, linkText, linkURL }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current

    gsap.fromTo(card,
      {
        opacity: 0,
        scale: 0.9,
        rotation: -14,
        y: -30,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 25,
        y: 0,
        duration: 2,
        delay: delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      }
    )
  }, [])

  return (
    <div className='pink-card' ref={cardRef}>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {linkText && <a href={linkURL}>{linkText}</a>}
    </div>
  )
}

export default LightBlueCard
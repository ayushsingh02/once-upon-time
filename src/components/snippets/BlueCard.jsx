import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BlueCard = ({ title, description, rotate = 25, delay = 0 }) => {
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
        rotation: rotate,
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
    <div className='pink-card blue' ref={cardRef}>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </div>
  )
}

export default BlueCard
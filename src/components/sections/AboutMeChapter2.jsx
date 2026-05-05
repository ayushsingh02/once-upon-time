import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const chapters = [
  {
    number: 'CHAPTER II',
    label: 'INTRODUCTION',
    title: 'About Me',
    image: 'images/scroll1.png',
    bg: 'images/scroll1.png',
    leftText:
      'Our team is made up of highly trained, insight oriented psychotherapists. Our practice is trauma informed, psychodynamically inclined and relational — all these are big words to say that we focus on the depth and nuance of your inner world, your dreams, desires, where emotions are held in your body and childhood experiences - tracing patterns that are holding you back from reaching your full potential.',
    rightText:
      'It is important for us to provide you with a safe, empathic and holding therapeutic relationship in order to wholly explore these parts of yourself.',
  },
  {
    number: 'CHAPTER III',
    label: 'ABOUT ONCE UPON A TIME',
    title: 'The Start',
    image: 'images/scroll2.png',
    bg: 'images/scroll2.png',
    leftText:
      'Our team is made up of highly trained, insight oriented psychotherapists. Our practice is trauma informed, psychodynamically inclined and relational — all these are big words to say that we focus on the depth and nuance of your inner world, your dreams, desires, where emotions are held in your body and childhood experiences - tracing patterns that are holding you back from reaching your full potential.',
    rightText:
      'It is important for us to provide you with a safe, empathic and holding therapeutic relationship in order to wholly explore these parts of yourself.',
  },
  {
    number: 'CHAPTER IV',
    label: 'PHILOSOPHY',
    title: 'Better Care',
    image: 'images/scroll3.png',
    bg: 'images/scroll3.png',
    leftText:
      'Our team is made up of highly trained, insight oriented psychotherapists. Our practice is trauma informed, psychodynamically inclined and relational — all these are big words to say that we focus on the depth and nuance of your inner world, your dreams, desires, where emotions are held in your body and childhood experiences - tracing patterns that are holding you back from reaching your full potential.',
    rightText:
      'It is important for us to provide you with a safe, empathic and holding therapeutic relationship in order to wholly explore these parts of yourself.',
  },
]

export default function AboutMeChapter2() {
  const sectionRef     = useRef(null)
  const bgStripRef     = useRef(null)
  const imgStripRef    = useRef(null)
  const activeIndex    = useRef(0)

  const chapterNumRefs = useRef([])
  const labelRefs      = useRef([])
  const leftTextRefs   = useRef([])
  const rightTextRefs  = useRef([])
  const titleRefs      = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const total        = chapters.length
    const slideH       = section.offsetHeight
    const imgSlideH    = imgStripRef.current.children[0]?.offsetHeight || slideH
    const bgScrollDist = (total - 1) * slideH
    const imgScrollDist = (total - 1) * imgSlideH

    const showTextSlide = (idx) => {
      chapters.forEach((_, i) => {
        const on = i === idx
        gsap.set(chapterNumRefs.current[i], { opacity: on ? 1 : 0 })
        gsap.set(labelRefs.current[i],      { opacity: on ? 1 : 0 })
        gsap.set(leftTextRefs.current[i],   { opacity: on ? 1 : 0 })
        gsap.set(rightTextRefs.current[i],  { opacity: on ? 1 : 0 })
        gsap.set(titleRefs.current[i],      { opacity: on ? 1 : 0, y: on ? 0 : 40 })
      })
    }

    const crossfadeText = (prev, next) => {
      gsap.timeline()
        .to(
          [chapterNumRefs.current[prev], labelRefs.current[prev], leftTextRefs.current[prev], rightTextRefs.current[prev]],
          { opacity: 0, duration: 0.25 }
        )
        .to(titleRefs.current[prev], { opacity: 0, y: -30, duration: 0.3 }, '<')
        .fromTo(
          titleRefs.current[next],
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
          '-=0.15'
        )
        .to(
          [chapterNumRefs.current[next], labelRefs.current[next], leftTextRefs.current[next], rightTextRefs.current[next]],
          { opacity: 1, duration: 0.35 },
          '-=0.35'
        )
    }

    showTextSlide(0)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger : section,
          start   : 'top top',
          end     : `+=${bgScrollDist}`,
          scrub   : 1.5,
          pin     : true,
          snap    : {
            snapTo  : 1 / (total - 1),
            duration: { min: 0.3, max: 0.6 },
            delay   : 0.05,
            ease    : 'power2.inOut',
          },
          onUpdate(self) {
            const idx = Math.min(Math.round(self.progress * (total - 1)), total - 1)
            if (idx !== activeIndex.current) {
              crossfadeText(activeIndex.current, idx)
              activeIndex.current = idx
            }
          },
        },
      })

      tl.to(bgStripRef.current,  { y: -bgScrollDist,  ease: 'none' }, 0)
        .to(imgStripRef.current, { y: -imgScrollDist, ease: 'none' }, 0)
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <>

      <section ref={sectionRef} className="amc2-section">

        {/* Background strip — physically scrolls up */}
        <div ref={bgStripRef} className="amc2-bg-strip">
          {chapters.map((ch, i) => (
            <div key={`bg-${i}`} className="amc2-bg-slide">
              <img src={ch.bg} alt="" />
            </div>
          ))}
        </div>

        {/* Chapter number labels — crossfade */}
        {chapters.map((ch, i) => (
          <div
            key={`num-${i}`}
            className="amc2-chapter-num"
            ref={el => (chapterNumRefs.current[i] = el)}
          >
            {ch.number}
          </div>
        ))}

        {/* Center card */}
        <div className="amc2-card">

          {/* LEFT col */}
          <div className="amc2-left-col">
            {chapters.map((ch, i) => (
              <div
                key={`left-${i}`}
                className="amc2-left-item"
                style={i === 0 ? { position: 'relative' } : {}}
              >
                <span className="amc2-label" ref={el => (labelRefs.current[i] = el)}>
                  {ch.label}
                </span>
                <span className="amc2-body" ref={el => (leftTextRefs.current[i] = el)}>
                  {ch.leftText}
                </span>
              </div>
            ))}
          </div>

          {/* CENTER col — clipped frame with scrolling image strip */}
          <div className="amc2-img-frame">
            <div ref={imgStripRef} className="amc2-img-strip">
              {chapters.map((ch, i) => (
                <div key={`img-${i}`} className="amc2-img-slide">
                  <img src={ch.image} alt={ch.title} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT col */}
          <div className="amc2-right-col">
            {chapters.map((ch, i) => (
              <span
                key={`right-${i}`}
                className="amc2-body"
                style={i === 0 ? { position: 'relative' } : { position: 'absolute', bottom: 0 }}
                ref={el => (rightTextRefs.current[i] = el)}
              >
                {ch.rightText}
              </span>
            ))}
          </div>

        </div>

        {/* Big italic titles — crossfade with y slide */}
        {chapters.map((ch, i) => (
          <div
            key={`title-${i}`}
            className="amc2-title-layer"
            ref={el => (titleRefs.current[i] = el)}
          >
            <span className="amc2-title">{ch.title}</span>
          </div>
        ))}

      </section>
    </>
  )
}
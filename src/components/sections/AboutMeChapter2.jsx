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
  const chapterNumRefs = useRef([])
  const labelRefs      = useRef([])
  const leftTextRefs   = useRef([])
  const rightTextRefs  = useRef([])
  const titleRefs      = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const total       = chapters.length
    const slideH      = section.offsetHeight
    const imgSlideH   = imgStripRef.current.children[0]?.offsetHeight || slideH

    // 1.5× slide height per chapter gives comfortable reading time before transition
    const perChapter    = slideH * 1.5
    const bgScrollDist  = (total - 1) * perChapter       // total scroll travel
    const bgMoveAmount  = (total - 1) * slideH            // bg strip travel
    const imgMoveAmount = (total - 1) * imgSlideH         // img strip travel
    const dur           = total - 1                        // timeline duration units

    // Initial visibility
    chapters.forEach((_, i) => {
      const on = i === 0
      gsap.set(
        [chapterNumRefs.current[i], labelRefs.current[i], leftTextRefs.current[i], rightTextRefs.current[i]],
        { opacity: on ? 1 : 0 }
      )
      gsap.set(titleRefs.current[i], { opacity: on ? 1 : 0, y: on ? 0 : 30 })
    })

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
            duration: { min: 0.5, max: 0.9 },
            delay   : 0.15,
            ease    : 'power2.inOut',
          },
        },
      })

      // Strips scroll upward at their own speed
      tl.to(bgStripRef.current,  { y: -bgMoveAmount,  ease: 'none', duration: dur }, 0)
      tl.to(imgStripRef.current, { y: -imgMoveAmount, ease: 'none', duration: dur }, 0)

      // Text crossfades are part of the scrub timeline — no independent timelines,
      // no onUpdate. Each chapter's text fades out in the last 35% of its scroll
      // window and the next chapter's text fades in from 75%.
      for (let i = 0; i < total - 1; i++) {
        const body = (idx) => [
          chapterNumRefs.current[idx],
          labelRefs.current[idx],
          leftTextRefs.current[idx],
          rightTextRefs.current[idx],
        ]

        // Out: chapter i fades at 65%
        tl.fromTo(body(i),              { opacity: 1 }, { opacity: 0, duration: 0.2, ease: 'none'        }, i + 0.65)
        tl.fromTo(titleRefs.current[i], { opacity: 1, y: 0 }, { opacity: 0, y: -25, duration: 0.2, ease: 'power1.in' }, i + 0.65)

        // In: chapter i+1 fades from 75%, fully visible by snap point
        tl.fromTo(titleRefs.current[i + 1], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.22, ease: 'power2.out' }, i + 0.75)
        tl.fromTo(body(i + 1),              { opacity: 0 },         { opacity: 1, duration: 0.2,  ease: 'none'             }, i + 0.78)
      }
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
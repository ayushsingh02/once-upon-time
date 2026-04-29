import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const slideInLeft = (element, delay = 0) => {
  gsap.fromTo(element,
    { opacity: 0, x: -80 },
    {
      opacity: 1, x: 0,
      duration: 1.2,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
      },
    }
  );
};

export const slideInRight = (element, delay = 0) => {
  gsap.fromTo(element,
    { opacity: 0, x: 80 },
    {
      opacity: 1, x: 0,
      duration: 1.2,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
      },
    }
  );
};

export const slideInTop = (element, delay = 0) => {
  gsap.fromTo(element,
    { opacity: 0, y: -80 },
    {
      opacity: 1, y: 0,
      duration: 1.2,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
      },
    }
  );
};

export const slideInBottom = (element, delay = 0) => {
  gsap.fromTo(element,
    { opacity: 0, y: 80 },
    {
      opacity: 1, y: 0,
      duration: 1.2,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
      },
    }
  );
};
export const animateText = (container, delay = 0) => {
    const eyebrow = container.querySelector(".eyebrow-head");
    const headings = container.querySelectorAll("h1, h2, h3, h4, h5");
    const body = container.querySelectorAll("p:not(.eyebrow-head), li");
    const buttons = container.querySelectorAll(".primary-btn");
  
    const scrollConfig = {
      trigger: container,
      start: "top 88%",
    };
  
    if (eyebrow) {
      gsap.fromTo(eyebrow,
        { opacity: 0, y: 16, letterSpacing: "0.3em" },
        { opacity: 1, y: 0, letterSpacing: "inherit", duration: 0.8, delay, ease: "power3.out", scrollTrigger: scrollConfig }
      );
    }
  
    if (headings.length) {
      gsap.fromTo(headings,
        { opacity: 0, y: 60, skewY: 4 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, delay: delay + 0.1, ease: "power4.out", stagger: 0.08, scrollTrigger: scrollConfig }
      );
    }
  
    if (body.length) {
      gsap.fromTo(body,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, delay: delay + 0.2, ease: "power3.out", stagger: 0.06, scrollTrigger: scrollConfig }
      );
    }
  
    if (buttons.length) {
      gsap.fromTo(buttons,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: delay + 0.35, ease: "back.out(1.4)", stagger: 0.1, scrollTrigger: scrollConfig }
      );
    }
  };
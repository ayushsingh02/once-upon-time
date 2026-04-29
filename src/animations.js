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
    const body = container.querySelectorAll("p:not(.eyebrow-head), li, a");
    
  
    const baseConfig = {
      opacity: 0,
      y: 24,
    };
  
    const animConfig = (extraDelay) => ({
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 88%",
      },
      delay: delay + extraDelay,
    });
  
    if (eyebrow) gsap.fromTo(eyebrow, baseConfig, animConfig(0));
    if (headings.length) gsap.fromTo(headings, baseConfig, animConfig(0.1));
    if (body.length) gsap.fromTo(body, baseConfig, animConfig(0.2));
  };
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
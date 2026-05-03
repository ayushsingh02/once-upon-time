// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const slideInLeft = (element, delay = 0) => {
//   gsap.fromTo(element,
//     { opacity: 0, x: -80 },
//     {
//       opacity: 1, x: 0,
//       duration: 1.6,
//       delay,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: element,
//         start: "top 85%",
//       },
//     }
//   );
// };

// export const slideInRight = (element, delay = 0) => {
//   gsap.fromTo(element,
//     { opacity: 0, x: 80 },
//     {
//       opacity: 1, x: 0,
//       duration: 1.2,
//       delay,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: element,
//         start: "top 85%",
//       },
//     }
//   );
// };

// export const slideInTop = (element, delay = 0) => {
//   gsap.fromTo(element,
//     { opacity: 0, y: -80 },
//     {
//       opacity: 1, y: 0,
//       duration: 1.2,
//       delay,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: element,
//         start: "top 85%",
//       },
//     }
//   );
// };

// export const slideInBottom = (element, delay = 0) => {
//   gsap.fromTo(element,
//     { opacity: 0, y: 80 },
//     {
//       opacity: 1, y: 0,
//       duration: 1.2,
//       delay,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: element,
//         start: "top 85%",
//       },
//     }
//   );
// };
// export const animateText = (container, delay = 0) => {
//     const eyebrow = container.querySelector(".eyebrow-head");
//     const headings = container.querySelectorAll("h1, h2, h3, h4, h5");
//     const body = container.querySelectorAll("p:not(.eyebrow-head), li");
//     const buttons = container.querySelectorAll(".primary-btn");
  
//     const scrollConfig = {
//       trigger: container,
//       start: "top 88%",
//     };
  
//     if (eyebrow) {
//       gsap.fromTo(eyebrow,
//         { opacity: 0, y: 16, letterSpacing: "0.3em" },
//         { opacity: 1, y: 0, letterSpacing: "inherit", duration: 0.8, delay, ease: "power3.out", scrollTrigger: scrollConfig }
//       );
//     }
  
//     if (headings.length) {
//       gsap.fromTo(headings,
//         { opacity: 0, y: 60, skewY: 4 },
//         { opacity: 1, y: 0, skewY: 0, duration: 1, delay: delay + 0.1, ease: "power4.out", stagger: 0.08, scrollTrigger: scrollConfig }
//       );
//     }
  
//     if (body.length) {
//       gsap.fromTo(body,
//         { opacity: 0, y: 24 },
//         { opacity: 1, y: 0, duration: 0.7, delay: delay + 0.2, ease: "power3.out", stagger: 0.06, scrollTrigger: scrollConfig }
//       );
//     }
  
//     if (buttons.length) {
//       gsap.fromTo(buttons,
//         { opacity: 0, y: 20, scale: 0.95 },
//         { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: delay + 0.35, ease: "back.out(1.4)", stagger: 0.1, scrollTrigger: scrollConfig }
//       );
//     }
//   };
//   export const parallaxImage = (element, speed = 0.4) => {
//     gsap.to(element, {
//       yPercent: speed * 100,
//       ease: "none",
//       scrollTrigger: {
//         trigger: element,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true,
//       },
//     });
//   };

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const slideInLeft = (element, delay = 0) => {
//   gsap.fromTo(element,
//     { opacity: 0, x: -80 },
//     {
//       opacity: 1, x: 0,
//       duration: 1.6,
//       delay,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: element,
//         start: "top 85%",
//       },
//     }
//   );
// };

// export const slideInRight = (element, delay = 0) => {
//   gsap.fromTo(element,
//     { opacity: 0, x: 80 },
//     {
//       opacity: 1, x: 0,
//       duration: 1.2,
//       delay,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: element,
//         start: "top 85%",
//       },
//     }
//   );
// };

// export const slideInTop = (element, delay = 0) => {
//   gsap.fromTo(element,
//     { opacity: 0, y: -80 },
//     {
//       opacity: 1, y: 0,
//       duration: 1.2,
//       delay,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: element,
//         start: "top 85%",
//       },
//     }
//   );
// };

// export const slideInBottom = (element, delay = 0) => {
//   gsap.fromTo(element,
//     { opacity: 0, y: 80 },
//     {
//       opacity: 1, y: 0,
//       duration: 1.2,
//       delay,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: element,
//         start: "top 85%",
//       },
//     }
//   );
// };

// export const animateText = (container, delay = 0) => {
//   const eyebrow = container.querySelector(".eyebrow-head");
//   const headings = container.querySelectorAll("h1, h2, h3, h4, h5");
//   const body = container.querySelectorAll("p:not(.eyebrow-head), li");
//   const buttons = container.querySelectorAll(".primary-btn");

//   const scrollConfig = {
//     trigger: container,
//     start: "top 88%",
//   };

//   if (eyebrow) {
//     gsap.fromTo(eyebrow,
//       { opacity: 0, y: 16, letterSpacing: "0.3em" },
//       { opacity: 1, y: 0, letterSpacing: "inherit", duration: 0.8, delay, ease: "power3.out", scrollTrigger: scrollConfig }
//     );
//   }

//   if (headings.length) {
//     gsap.fromTo(headings,
//       { opacity: 0, y: 60, skewY: 4 },
//       { opacity: 1, y: 0, skewY: 0, duration: 1, delay: delay + 0.1, ease: "power4.out", stagger: 0.08, scrollTrigger: scrollConfig }
//     );
//   }

//   if (body.length) {
//     gsap.fromTo(body,
//       { opacity: 0, y: 24 },
//       { opacity: 1, y: 0, duration: 0.7, delay: delay + 0.2, ease: "power3.out", stagger: 0.06, scrollTrigger: scrollConfig }
//     );
//   }

//   if (buttons.length) {
//     gsap.fromTo(buttons,
//       { opacity: 0, y: 20, scale: 0.95 },
//       { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: delay + 0.35, ease: "back.out(1.4)", stagger: 0.1, scrollTrigger: scrollConfig }
//     );
//   }
// };

// export const parallaxImage = (element, speed = 0.4) => {
//   gsap.to(element, {
//     yPercent: speed * 100,
//     ease: "none",
//     scrollTrigger: {
//       trigger: element,
//       start: "top bottom",
//       end: "bottom top",
//       scrub: true,
//     },
//   });
// };

// // ─── GLOBAL AUTO-INIT ────────────────────────────────────────────────────────
// // data-animate="text"        → animateText
// // data-animate="slide-left"  → slideInLeft
// // data-animate="slide-right" → slideInRight
// // data-animate="slide-top"   → slideInTop
// // data-animate="slide-bottom"→ slideInBottom
// // data-animate="parallax"    → parallaxImage
// // data-delay="0.3"           → optional delay
// // Skip elements that already have data-animate-done="true"

// export const initGlobalAnimations = () => {
//   const elements = document.querySelectorAll("[data-animate]:not([data-animate-done])");

//   elements.forEach((el) => {
//     const type = el.getAttribute("data-animate");
//     const delay = parseFloat(el.getAttribute("data-delay") || "0");

//     switch (type) {
//       case "text":
//         animateText(el, delay);
//         break;
//       case "slide-left":
//         slideInLeft(el, delay);
//         break;
//       case "slide-right":
//         slideInRight(el, delay);
//         break;
//       case "slide-top":
//         slideInTop(el, delay);
//         break;
//       case "slide-bottom":
//         slideInBottom(el, delay);
//         break;
//       case "parallax":
//         parallaxImage(el);
//         break;
//       default:
//         break;
//     }

//     el.setAttribute("data-animate-done", "true");
//   });
// };
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Call this once in your App.jsx after page loads
export const refreshScrollTrigger = () => {
  setTimeout(() => ScrollTrigger.refresh(), 500);
};

const getScrollConfig = (element, start = "top 90%") => ({
  trigger: element,
  start,
  once: true,
});

export const slideInLeft = (element, delay = 0) => {
  gsap.fromTo(element,
    { opacity: 0, x: -80 },
    {
      opacity: 1, x: 0,
      duration: 1.6,
      delay,
      ease: "power3.out",
      scrollTrigger: getScrollConfig(element),
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
      scrollTrigger: getScrollConfig(element),
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
      scrollTrigger: getScrollConfig(element),
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
      scrollTrigger: getScrollConfig(element),
    }
  );
};

export const animateText = (container, delay = 0) => {
  const eyebrow = container.querySelector(".eyebrow-head");
  const headings = container.querySelectorAll("h1, h2, h3, h4, h5");
  const body = container.querySelectorAll("p:not(.eyebrow-head), li");
  const buttons = container.querySelectorAll(".primary-btn");

  const scrollConfig = getScrollConfig(container);

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

export const parallaxImage = (element, speed = 0.4) => {
  gsap.to(element, {
    yPercent: speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const initGlobalAnimations = () => {
  ScrollTrigger.refresh();

  const elements = document.querySelectorAll("[data-animate]:not([data-animate-done])");

  elements.forEach((el) => {
    const type = el.getAttribute("data-animate");
    const delay = parseFloat(el.getAttribute("data-delay") || "0");

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (alreadyVisible) {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay, ease: "power3.out" }
      );
      el.setAttribute("data-animate-done", "true");
      return;
    }

    switch (type) {
      case "text":         animateText(el, delay);    break;
      case "slide-left":   slideInLeft(el, delay);    break;
      case "slide-right":  slideInRight(el, delay);   break;
      case "slide-top":    slideInTop(el, delay);     break;
      case "slide-bottom": slideInBottom(el, delay);  break;
      case "parallax":     parallaxImage(el);         break;
      default: break;
    }

    el.setAttribute("data-animate-done", "true");
  });
};
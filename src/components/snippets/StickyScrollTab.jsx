import React, { useEffect, useRef, useState } from "react";

const StickyScrollTab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const stickyRef = useRef(null);

  useEffect(() => {
    const sticky = stickyRef.current;
    const header = document.querySelector("header");
    const getHeaderHeight = () => header?.offsetHeight || 0;

    sticky.style.top = `${getHeaderHeight()}px`;

    let prevScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const headerHeight = getHeaderHeight();

      if (currentScroll > prevScroll && currentScroll > 100) {
        sticky.style.top = "0px";
        sticky.style.paddingBottom = "20px";
      } else {
        sticky.style.top = `${headerHeight}px`;
        sticky.style.paddingBottom = "80px";
      }

      prevScroll = currentScroll;

      tabs.forEach((tab, index) => {
        const section = document.querySelector(tab.target);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const offset = headerHeight + sticky.offsetHeight + 20;
        if (rect.top <= offset && rect.bottom > offset) {
          setActiveTab(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabs]);

  const handleClick = (index, target) => {
    const section = document.querySelector(target);
    if (!section) return;
    const header = document.querySelector("header");
    const headerHeight = header?.offsetHeight || 0;
    const stickyHeight = stickyRef.current?.offsetHeight || 0;
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - stickyHeight - 10;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveTab(index);
  };

  return (
    <div className="sticky-scroll-tab" ref={stickyRef} style={{ paddingBottom: "80px", transition: "top 0.4s ease, padding-bottom 0.3s ease" }}>
      <div className="container">
        <div className="scroll-tab-wrap">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`ss-tabs ${activeTab === index ? "active" : ""}`}
              onClick={() => handleClick(index, tab.target)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyScrollTab;
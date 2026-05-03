import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: "Therapy", href: "/therapy" },
  { label: "Collaborate", href: "/collaborate" },
  { label: "About", href: "/about" },
  { label: "Stories", href: "/stories" },
  { label: "Book A Call", href: "/book-call" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const isMenuOpenRef = useRef(false);
  const location = useLocation();

  const openMenu = () => {
    isMenuOpenRef.current = true;
    setIsMenuOpen(true);
    if (headerRef.current) {
      headerRef.current.classList.remove("header-hide");
    }
  };

  const closeMenu = () => {
    isMenuOpenRef.current = false;
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const header = headerRef.current;
    const logo = logoRef.current;

    if (!header || !logo) return;

    // Kill all existing ScrollTriggers before creating new ones
    ScrollTrigger.getAll().forEach((t) => t.kill());

    header.style.transform = "translateY(-100%)";

    const t1 = setTimeout(() => {
      if (!headerRef.current) return;
      header.style.transition = "transform 1s cubic-bezier(0.22, 1, 0.36, 1)";
      header.style.transform = "translateY(0%)";
    }, 300);

    const t2 = setTimeout(() => {
      if (!headerRef.current) return;
      header.style.transition = "transform 0.4s ease";
      header.style.transform = "";
    }, 1300);

    const shrinkEnd =
      window.innerWidth < 768 ? 120 :
      window.innerWidth < 1100 ? 150 :
      window.innerWidth < 1300 ? 180 :
      300;

    const logoTween = gsap.to(logo, {
      width: "360px",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: `+=${shrinkEnd}`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    let prevScroll = 0;

    const handleScroll = () => {
      if (isMenuOpenRef.current) return;

      const currentScroll = window.scrollY;
      if (currentScroll > shrinkEnd) {
        if (currentScroll > prevScroll) {
          header.classList.add("header-hide");
        } else {
          header.classList.remove("header-hide");
        }
      } else {
        header.classList.remove("header-hide");
      }
      prevScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll", handleScroll);
      logoTween.scrollTrigger?.kill();
      logoTween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [location.pathname]); // re-runs on every route change

  return (
    <>
      <header ref={headerRef}>
        {/* ── DESKTOP ── */}
        <div className="header desktop">
          <div className="container">
            <div className="header-in">
              <div className="left">
                <Link to="/">
                  <div className="header-logo" ref={logoRef}>
                    <img src="icons/header-dark-logo.svg" alt="Logo" className="icon" />
                  </div>
                </Link>
              </div>
              <div className="right">
                <nav>
                  <ul>
                    {navItems.map((item) => (
                      <li key={item.label}>
                        <Link to={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE ── */}
        <div className="header mobile">
          <div className="container">
            <div className="header-in">
              <div className="header-top">
                <div className="ham-menu" onClick={openMenu}>
                  <svg className="icon" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 11.1429V9.28572H18V11.1429H0ZM0 6.5V4.64286H18V6.5H0ZM0 1.85714V0H18V1.85714H0Z" fill="#3E2C25" />
                  </svg>
                </div>
                <Link to="/">
                  <div className="header-mob-logo">
                    <img src="icons/header-dark-logo.svg" alt="Logo" className="icon" />
                  </div>
                </Link>
                <div className="bac-cta">
                  <Link to="/book-call" className="primary-btn">Book A Call</Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`header-menu ${isMenuOpen ? "open-menu" : ""}`}
            style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
          >
            <nav>
              <ul>
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="close-cta" onClick={closeMenu}>
                <svg className="icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.4524 1.35059L1.35059 20.4524M1.35059 1.35059L20.4524 20.4524" stroke="#F7F0E8" strokeWidth="1.91008" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </nav>
            <div className="header-menu-logo">
              <img src="icons/header-light-logo.svg" alt="Logo" className="icon" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
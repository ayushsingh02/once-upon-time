import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const navItems = [
  { label: "Therapy", href: "/therapy" },
  { label: "Collaborate", href: "/collaborate" },
  { label: "About", href: "/about" },
  { label: "Stories", href: "/stories" },
  { label: "Book A Call", href: "/book-call" },
];

const HeaderSecondary = ({ transparent = false, light = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(transparent);
  const [isLight, setIsLight] = useState(light);
  const headerRef = useRef(null);
  const isMenuOpenRef = useRef(false);
  const prevScrollRef = useRef(0);

  const logo = isLight ? "icons/header-light-logo.svg" : "icons/header-dark-logo.svg";
  const mobLogo = isLight ? "icons/header-light-logo.svg" : "icons/header-dark-logo.svg";

  const openMenu = () => {
    isMenuOpenRef.current = true;
    setIsMenuOpen(true);
    headerRef.current.classList.remove("header-hide");
  };

  const closeMenu = () => {
    isMenuOpenRef.current = false;
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const header = headerRef.current;

    header.style.transform = "translateY(-100%)";
    setTimeout(() => {
      header.style.transition = "transform 1s cubic-bezier(0.22, 1, 0.36, 1)";
      header.style.transform = "translateY(0%)";
    }, 300);
    setTimeout(() => {
      header.style.transition = "transform 0.4s ease";
      header.style.transform = "";
    }, 1300);

    const handleScroll = () => {
      if (isMenuOpenRef.current) return;

      const currentScroll = window.scrollY;

      if (transparent) {
        setIsTransparent(currentScroll < 10);
      }

      if (light) {
        setIsLight(currentScroll < 10);
      }

      if (currentScroll > 80) {
        if (currentScroll > prevScrollRef.current) {
          header.classList.add("header-hide");
        } else {
          header.classList.remove("header-hide");
        }
      } else {
        header.classList.remove("header-hide");
      }

      prevScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparent, light]);

  return (
    <>
      <header
        ref={headerRef}
        className={`secondary-header${isLight ? " light-header" : ""}${isTransparent ? " transparent-header" : ""}`}
      >
        {/* ── DESKTOP ── */}
        <div className="header desktop">
          <div className="container">
            <div className="header-in">
              <div className="left">
                <Link to="/">
                  <div className="header-logo">
                    <img src={logo} alt="Logo" className="icon" />
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
                    <img src={mobLogo} alt="Logo" className="icon" />
                  </div>
                </Link>
                <div className="bac-cta">
                  <Link to="/book-call" className="primary-btn">Book A Call</Link>
                </div>
              </div>
            </div>
          </div>

          <div className={`header-menu ${isMenuOpen ? "open-menu" : ""}`}>
            <nav>
              <ul>
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} onClick={closeMenu}>{item.label}</Link>
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

export default HeaderSecondary;
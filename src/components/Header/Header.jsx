import React,{ useState} from "react";
import "./header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header desktop">
          <div className="container">
            <div className="header-in">
              <div className="left">
                <div className="header-logo">
                  <img
                    src="src/assets/images/header-logo.svg"
                    alt="Logo"
                    className="icon"
                  />
                </div>
              </div>
              <div className="right">
                <nav>
                  <ul>
                    <li>
                      <a href="#!">Therapy</a>
                    </li>
                    <li>
                      <a href="#!">Collaborate</a>
                    </li>
                    <li>
                      <a href="#!">About</a>
                    </li>
                    <li>
                      <a href="#!">Stories</a>
                    </li>
                    <li>
                      <a href="#!">Book A Call</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="header mobile">
          <div className="container">
            <div className="header-in">
              <div className="header-top">
                <div className="ham-menu" onClick={() => setIsMenuOpen(true)}>
                  <svg
                  className="icon"
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 11.1429V9.28572H18V11.1429H0ZM0 6.5V4.64286H18V6.5H0ZM0 1.85714V0H18V1.85714H0Z"
                      fill="#3E2C25"
                    />
                  </svg>
                </div>
                <div className="header-mob-logo">
                  <img
                    src="src/assets/images/header-logo.svg"
                    alt="Logo"
                    className="icon"
                  />
                </div>
                <div className="bac-cta">
                  <a href="#!" className="primary-btn">
                    Book A Call
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`header-menu ${isMenuOpen ? 'open-menu' : ''}`}>
            <nav>
              <ul>
                <li>
                  <a href="#!">Therapy</a>
                </li>
                <li>
                  <a href="#!">Collaborate</a>
                </li>
                <li>
                  <a href="#!">About</a>
                </li>
                <li>
                  <a href="#!">Stories</a>
                </li>
                <li>
                  <a href="#!">Book A Call</a>
                </li>
              </ul>
              <div className="close-cta" onClick={() => setIsMenuOpen(false)}>
                    <svg className="icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.4524 1.35059L1.35059 20.4524M1.35059 1.35059L20.4524 20.4524" stroke="#F7F0E8" stroke-width="1.91008" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
              </div>
            </nav>
            <div className="header-menu-logo">
              <img
                src="src/assets/images/header-menu-logo.svg"
                alt="Logo"
                className="icon"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
<script>
    
</script>
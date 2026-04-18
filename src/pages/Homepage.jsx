import React from "react";

const Homepage = () => {
  return (
    <div>
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
                      <a href="#!">Therapy</a>
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
      </header>
    </div>
  );
};

export default Homepage;

import React from "react";

const HomeChapter1 = () => {
    return (
        <div className="home-chapter-1">
            <div className="home-chapter-img">
                <img src="images/chapter-1-home.png" alt="" className="img" />
            </div>
            <div className="home-chapter-1-in">
                <div className="container">
                    <div className="inner-card">
                        <p className="eyebrow-head">
                            Chapter I
                        </p>
                        <div className="brand-logo">
                            <img src="images/header-logo.svg" alt="Brand Logo" className="icon" />
                        </div>
                        <h3>Mission <br />
                            Statement</h3>

                        <div className="scroll-down">
                            <div className="img-icon">
                                <svg width="75" height="79" viewBox="0 0 75 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.5746 71.2546C20.16 69.1142 14.0371 64.4459 10.206 57.2498C6.37483 50.0537 5.65582 41.7516 8.04895 32.3436C10.5313 22.585 15.3864 15.4831 22.6143 11.0378C29.8422 6.5926 37.6926 5.44763 46.1657 7.60293C54.6387 9.75824 60.7616 14.4265 64.5343 21.6078C68.3655 28.8039 69.0845 37.106 66.6914 46.514C64.2091 56.2726 59.354 63.3745 52.1261 67.8198C44.8982 72.265 37.0477 73.4099 28.5746 71.2546ZM31.1765 67.9969C36.6109 69.3792 41.3687 68.1631 45.4499 64.3484C49.5459 60.4752 52.6938 54.2145 54.8937 45.5661C57.2869 36.1581 57.4503 28.4227 55.3839 22.3599C53.4058 16.195 49.4658 12.362 43.5638 10.8607C38.1294 9.47833 33.3642 10.7237 29.2682 14.5969C25.187 18.4116 22.0465 24.6431 19.8466 33.2915C17.4683 42.641 17.2683 50.3982 19.2464 56.5631C21.2979 62.6843 25.2746 66.4956 31.1765 67.9969Z" fill="#E47C7C" />
                                </svg>
                            </div>
                            <p>Scroll Down</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeChapter1;

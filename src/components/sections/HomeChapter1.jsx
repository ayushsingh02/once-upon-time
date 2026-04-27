import React from "react";
import IconO from "../snippets/IconO";
const data={
    eyeHead:"Chapter I",
    title: <>Mission<br />Statement</>,
    image: "images/chapter-1-home.png"
}
const HomeChapter1 = () => {
    return (
        <div className="home-chapter-1" style={{ backgroundImage: `url(${data.image})` }}>
            <div className="home-chapter-1-in">
                <div className="container">
                    <div className="inner-card">
                        <p className="eyebrow-head">
                            {data.eyeHead}
                        </p>
                        <div className="brand-logo">
                            <img src="images/header-logo.svg" alt="Brand Logo" className="icon" />
                        </div>
                        <h3>{data.title}</h3>
                        <div className="scroll-down">
                            <IconO></IconO>
                            <p>Scroll Down</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeChapter1;

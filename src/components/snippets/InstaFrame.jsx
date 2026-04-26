import React from "react";
import InstaIcon from "../snippets/InstaIcon";

const InstaFrame = ({ instaImage, instaURL }) => {
  return (
   <a href={instaURL || "#!"} target="_blank" rel="noreferrer">
     <div className="insta-frame">
        <InstaIcon />
      <div className="insta-image">
        {instaImage && <img src={instaImage} alt="Image" className="img" />}
      </div>
    </div>
   </a>
  );
};

export default InstaFrame;

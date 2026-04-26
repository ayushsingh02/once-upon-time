import React from "react";
import InstaIcon from "../snippets/InstaIcon";

const InstaFrame = ({ instaImage }) => {
  return (
    <div className="insta-frame">
        <InstaIcon />
      <div className="insta-image">
        {instaImage && <img src={instaImage} alt="Image" className="img" />}
      </div>
    </div>
  );
};

export default InstaFrame;

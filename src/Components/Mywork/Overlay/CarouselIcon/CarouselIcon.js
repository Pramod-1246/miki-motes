import React from "react";

import "./CarouselIcon.css";

const PrevIcon = ({ src, iconType }) => {
  return (
    <img
      className={`carousel-icon ${iconType}`}
      src={src}
      alt="carousel icon"
      aria-hidden="true"
    />
  );
};

export default PrevIcon;

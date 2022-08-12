import "./HeroImgStyles.css";
import React from "react";
import HeroImage from "../assets/sunshine.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero-img" src={HeroImage} alt="Lady" />
      </div>
    </div>
  );
};

export default HeroImg;

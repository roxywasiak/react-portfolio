import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroThree from "../components/HeroThree";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroThree heading="About Me" text="strapline" />
      <Footer />
    </div>
  );
};

export default About;

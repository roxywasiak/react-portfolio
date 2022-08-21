import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroTwo from "../components/HeroTwo";
import PhotoImage from "../assets/sunshine.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo
        heading="About Me"
        text="Rukhsana Wasiak"
        subhead="A collaborative Full Stack Developer based in Birmingham. 
        I come from a strong client facing background and enjoy problem solving. I enjoy cookery and fitness in my spare time as well as learning more code to build new projects."
      />
      <div className="photo-place">
        <img className="photo" src={PhotoImage} alt="Image of a lady" />
      </div>
      <Footer />
    </div>
  );
};

export default About;

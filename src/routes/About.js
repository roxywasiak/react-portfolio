import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroTwo from "../components/HeroTwo";
import PhotoImage from "../assets/photo.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo
        heading="About Me"
        text="A collaborative Full Stack Developer."
        subhead="Write a short description or bio"
      />
      <div className="photo-place">
        <img
          className="photo" 
          src={PhotoImage}
          alt="Image of a cartoon avatar lady"
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
// your photo styles are in heroimstyles not sure if i should make component ask tutor or see how tos tyle yourself.

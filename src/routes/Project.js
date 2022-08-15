import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroTwo from "../components/HeroTwo";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo heading="PROJECTS" text="Some of my most recent work" />
      <Footer />
    </div>
  );
};

export default Project;

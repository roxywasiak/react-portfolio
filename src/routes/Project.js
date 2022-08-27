import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroTwo from "../components/HeroTwo";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo heading="PROJECTS" text="Some of my most recent work" />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;

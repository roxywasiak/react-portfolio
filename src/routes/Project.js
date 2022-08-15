import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroTwo from "../components/HeroTwo";
import WorkCard from "../components/WorkCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo heading="PROJECTS" text="Some of my most recent work" />
      <WorkCard />
      <Footer />
    </div>
  );
};

export default Project;

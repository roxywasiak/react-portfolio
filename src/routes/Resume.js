import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroTwo from "../components/HeroTwo";
import Cv from "../components/Cv";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo heading="RESUME" text="Explore my resume" />
      <CvFile />
      <Footer />
    </div>
  );
};

export default Resume;

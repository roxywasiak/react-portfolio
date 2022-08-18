import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroTwo from "../components/HeroTwo";

import CV from "../components/Cv";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo
        heading="RESUME"
        text="Explore my resume"
        title="My Skills"
        subhead="JavaScript, HTML, CSS, NodeJs"
      />
      <CV />

      <Footer />
    </div>
  );
};

export default Resume;

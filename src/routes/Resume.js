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
        title="My Skills"
        subhead=" HTML ,CSS3, JavaScript, JQuery ,Bootstrap, Express.js , React.js, Node.js, MongoDB, MySQL/noSQL, Git, API's, GraphQL"
      />
      <CV />

      <Footer />
    </div>
  );
};

export default Resume;

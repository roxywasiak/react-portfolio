import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroTwo from "../components/HeroTwo";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo heading="RESUME" text="Explore my resume" />
      <div className="cv">
        <Link to="./src/assets/rukhsana.pdf">
          {" "}
          <FaFileDownload size={60} style={{ color: "#fff" }} />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;

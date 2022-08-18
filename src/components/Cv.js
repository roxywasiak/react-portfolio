import "./CvStyles.css";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

import React from "react";

const CV = () => {
  return (
    <div className="cv">
      <a href="/rukhsana.pdf" target="_blank" download>
        <FaFileDownload size={80} style={{ color: "#fff" }} />
      </a>
    </div>
  );
};

export default CV;

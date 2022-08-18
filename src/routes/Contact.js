import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroTwo from "../components/HeroTwo";
import { FaCoffee } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo heading="CONTACT." text="Let's have a chat"></HeroTwo>
      <div className="coffee">
        <FaCoffee size={80} style={{ color: "#fff" }} />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

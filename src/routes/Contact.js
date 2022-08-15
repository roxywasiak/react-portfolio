import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroThree from "../components/HeroThree";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroThree heading="CONTACT." text="Let's have a chat" />
      <Footer />
    </div>
  );
};

export default Contact;

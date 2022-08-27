import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaRegEnvelopeOpen,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#ffff", marginRight: "2rem" }} />
            <p>Birmingham</p>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffff", marginRight: "2rem" }}
              />
              07908813491
            </h4>
          </div>

          <div className="email">
            <h4>
              <a href="mailto:ruksclone@hotmail.com">
                <FaRegEnvelopeOpen
                  size={20}
                  style={{ color: "#ffff", marginRight: "2rem" }}
                />
              </a>
              ruksclone@hotmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>Created By Rukhsana Wasiak</h4>
          <p>
            Contact me on any of my socials or email for any more information
          </p>
          <div className="social">
            <Link to="https://github.com/roxywasiak" target="_blank">
              <FaGithub
                size={30}
                style={{ color: "#ffff", marginRight: "1rem" }}
              />
            </Link>
            <Link to="https://www.linkedin.com/in/rukhsana-wasiak-43561a94/">
              <FaLinkedin
                size={30}
                style={{ color: "#ffff", marginRight: "1rem" }}
              />
            </Link>
            <Link to="https://www.instagram.com/ruksclone/">
              <FaInstagram
                size={30}
                style={{ color: "#ffff", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
// ask tutor about pathname links to click

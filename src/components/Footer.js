import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaRegEnvelopeOpen,
  FaPhone,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#ffff", marginRight: "2rem" }} />
          </div>

          <div>
            <p>58 Lyttleton Street</p>
            <p>West Bromwhich</p>
            <p>B70 7SB</p>
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
              <FaRegEnvelopeOpen
                size={20}
                style={{ color: "#ffff", marginRight: "2rem" }}
              />
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
            <FaFacebook
              size={30}
              style={{ color: "#ffff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#ffff", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "#ffff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

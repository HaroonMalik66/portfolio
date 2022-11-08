import React from "react";
import { ReactComponent as Linkedin } from "../../assets/linkedin2.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Whatsapp } from "../../assets/square-whatsapp.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* <hr /> */}
      <div className="social-icons">
        <span className="social-icon-f">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.wa.me/+923098039903"
          >
            <Whatsapp fill="green" />
            Whatsapp
          </a>
        </span>
        <span className="social-icon-f">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/haroon-ahmed-728645206"
          >
            <Linkedin fill="blue" />
            LinkedIn
          </a>
        </span>

        <span className="social-icon-f">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/mharoon.awan.50"
          >
            <Facebook fill="blue" />
            Facebook
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
